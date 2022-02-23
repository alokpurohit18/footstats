#!C:\Python39\python.exe
import imp
import flask
import json
import sys
import requests
import os
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By

app = flask.Flask(__name__)

options = webdriver.ChromeOptions()
options.headless = True
driver = webdriver.Chrome(chrome_options=options)
    
def create_selenium_driver(url):    
    driver.get(url)
    driver.maximize_window()
    driver.minimize_window()

def create_json_data(file_name, data_array):    
    sys.stdout = open(file_name, 'w')
    jsonobj = json.dumps(data_array, indent=4)
    print("{}".format(jsonobj))
    sys.stdout = sys.__stdout__


@app.route("/data_scraping", methods=["GET"])
def data_scraping():    

    os.chdir("F:/Projects/footstats/src/api/data")

    news_url = "https://www.skysports.com/football/news"
    scores_url = "https://www.espn.in/football/scoreboard/_/league/all"

    final_news_data = []
    final_scores_data = []


    def create_news_data(url):
        create_selenium_driver(url)
        soup = BeautifulSoup(driver.page_source, "html.parser")
        news_details_source = soup.find_all('a')
        news_content_source = soup.find_all("p", {"class": "news-list__snippet"})
    
        news_details_array = []    
        for news_detials in news_details_source:    
            if(news_detials.has_attr('aria-label')):
                news_details_array.append(news_detials)
        
        global counter
        counter = 0
        for news_detials in news_details_array:
            final_news_object = {
                "key": counter,
                "title": news_detials['title'],
                "link": news_detials['href'],
                "imageSource": news_detials.find('img')['data-src'],
                "shortDescription": "",
            }
            counter = counter + 1
            final_news_data.append(final_news_object)
    
        for (news_content, news_object) in zip(news_content_source, final_news_data):
            news_object["shortDescription"] = news_content.text
    
        create_json_data("newsData.json", final_news_data)
        

    def create_scores_data(url):
        create_selenium_driver(url)
        soup = BeautifulSoup(driver.page_source, "html.parser")
        score_card_containers = soup.find_all("div", {"class": "scoreboard-wrapper game-strip-scoreboard"})
        link_containers = soup.find_all("div", {"class": "scoreboard-top no-tabs"})
        global counter
        counter = 0
    
        for (score_card_container, link_container) in zip(score_card_containers, link_containers):
            score_card = score_card_container.find("div", {"class": "main-container"})
            team_names = score_card.find_all("span", {"class": "short-name"})
            team_logos = score_card.find_all("img", {"class": "team-logo imageLoaded"})
            team_scores = score_card.find_all("div", {"class": "score-container"})
            
            home_score = team_scores[0].text
            away_score = team_scores[1].text
            home_score = home_score.replace("\n", "")
    
            home_score = home_score.replace(" ", "")
            away_score = away_score.replace("\n", "")
            away_score = away_score.replace(" ", "")
    
            game_status = score_card.find("div", {"class": "game-status"})
            game_result = score_card.find("div", {"class": "game-status note"})
            if(game_result == None):
                game_result = ""
            else:
                game_result = game_result.text.strip()
    
            goal_scorers = score_card.find_all("ul", {"class": "icon-soccer-ball"})
            home_goal_scorers = ""
            away_goal_scorers = ""
    
            link = link_container.find("a", {"class": "button-alt sm"})
            base_url = "https://www.espn.in"
            summary_link =  base_url + link["href"]
            league = link["rel"][0]
    
            if(len(goal_scorers) > 1):
                home_goal_scorers = goal_scorers[0].text.strip()
                home_goal_scorers = home_goal_scorers.replace("\n", "")
                home_goal_scorers = home_goal_scorers.replace("\t", "")
                home_goal_scorers = home_goal_scorers + " "
                away_goal_scorers = goal_scorers[1].text.strip()
                away_goal_scorers = away_goal_scorers.replace("\n", "")
                away_goal_scorers = away_goal_scorers.replace("\t", "")
                away_goal_scorers = " " + away_goal_scorers
    
            if(len(goal_scorers) == 1):
                if(home_score > away_score):
                    home_goal_scorers = goal_scorers[0].text.strip()
                    home_goal_scorers = home_goal_scorers.replace("\n", "")
                    home_goal_scorers = home_goal_scorers.replace("\t", "")
                    home_goal_scorers = home_goal_scorers + " "
                else:
                    away_goal_scorers = goal_scorers[0].text.strip()
                    away_goal_scorers = away_goal_scorers.replace("\n", "")
                    away_goal_scorers = away_goal_scorers.replace("\t", "")
                    away_goal_scorers = " " + away_goal_scorers
            
            final_score_object = {
                "key": counter,
                "home_team_name": team_names[0].text,
                "home_team_logo": team_logos[0]["src"],
                "home_score": home_score,
                "home_scorers": home_goal_scorers,
                "away_team_name": team_names[1].text,
                "away_team_logo": team_logos[1]["src"],
                "away_score": away_score,
                "away_scorers": away_goal_scorers,
                "game_status": game_status.text.strip(),
                "game_result": game_result,
                "link": summary_link,
                "league": league
             }

            if(final_score_object["home_team_name"] == "Swansea City"):
                final_score_object["home_team_logo"] = "https://ssl.gstatic.com/onebox/media/sports/logos/45heVhzL3HvaZW3e2B94kg_96x96.png"

            if(final_score_object["away_team_name"] == "Swansea City"):
                final_score_object["away_team_logo"] = "https://ssl.gstatic.com/onebox/media/sports/logos/45heVhzL3HvaZW3e2B94kg_96x96.png"

            if(final_score_object["home_team_name"] == "Queens Park Rangers"):
                final_score_object["home_team_logo"] = "https://ssl.gstatic.com/onebox/media/sports/logos/SYBiHsr8jq3vT4p0HauolA_96x96.png"

            if(final_score_object["away_team_name"] == "Queens Park Rangers"):
                final_score_object["away_team_logo"] = "https://ssl.gstatic.com/onebox/media/sports/logos/SYBiHsr8jq3vT4p0HauolA_96x96.png"

            if(final_score_object["home_team_name"] == "Preston North End"):
                final_score_object["home_team_logo"] = "https://ssl.gstatic.com/onebox/media/sports/logos/2NRxn9AO_zb45mFCRIdCYQ_96x96.png"

            if(final_score_object["away_team_name"] == "Preston North End"):
                final_score_object["away_team_logo"] = "https://ssl.gstatic.com/onebox/media/sports/logos/2NRxn9AO_zb45mFCRIdCYQ_96x96.png"

            if(final_score_object["home_team_name"] == "NorthEast United FC"):
                final_score_object["home_team_logo"] = "https://ssl.gstatic.com/onebox/media/sports/logos/VeolOM7Y1XYnu6ufb1fEjg_96x96.png"

            if(final_score_object["away_team_name"] == "NorthEast United FC"):
                final_score_object["away_team_logo"] = "https://ssl.gstatic.com/onebox/media/sports/logos/VeolOM7Y1XYnu6ufb1fEjg_96x96.png"

            if(final_score_object["home_team_name"] == "NEROCA FC"):
                final_score_object["home_team_logo"] = "https://upload.wikimedia.org/wikipedia/en/5/5a/Official_NEROCA_FC_Logo.png"

            if(final_score_object["away_team_name"] == "NEROCA FC"):
                final_score_object["away_team_logo"] = "https://upload.wikimedia.org/wikipedia/en/5/5a/Official_NEROCA_FC_Logo.png"

            if(final_score_object["home_team_name"] == "Brighton & Hove Albion"):
                final_score_object["home_team_logo"] = "https://ssl.gstatic.com/onebox/media/sports/logos/EKIe0e-ZIphOcfQAwsuEEQ_96x96.png"

            if(final_score_object["away_team_name"] == "Brighton & Hove Albion"):
                final_score_object["away_team_logo"] = "https://ssl.gstatic.com/onebox/media/sports/logos/EKIe0e-ZIphOcfQAwsuEEQ_96x96.png"

            if(final_score_object["home_team_name"] == "Tottenham Hotspur"):
                final_score_object["home_team_logo"] = "https://ssl.gstatic.com/onebox/media/sports/logos/k3Q_mKE98Dnohrcea0JFgQ_96x96.png"

            if(final_score_object["away_team_name"] == "Tottenham Hotspur"):
                final_score_object["away_team_logo"] = "https://ssl.gstatic.com/onebox/media/sports/logos/k3Q_mKE98Dnohrcea0JFgQ_96x96.png"
            
            if(final_score_object["home_team_name"] == "Nice"):
                final_score_object["home_team_logo"] = "https://ssl.gstatic.com/onebox/media/sports/logos/Llrxrqsc3Tw4JzE6xM7GWw_96x96.png"

            if(final_score_object["away_team_name"] == "Nice"):
                final_score_object["away_team_logo"] = "https://ssl.gstatic.com/onebox/media/sports/logos/Llrxrqsc3Tw4JzE6xM7GWw_96x96.png"
            
            if(final_score_object["home_team_name"] == "Strasbourg"):
                final_score_object["home_team_logo"] = "https://ssl.gstatic.com/onebox/media/sports/logos/Eb9xtMpUy8FXQ0RCKvLxcg_96x96.png"

            if(final_score_object["away_team_name"] == "Strasbourg"):
                final_score_object["away_team_logo"] = "https://ssl.gstatic.com/onebox/media/sports/logos/Eb9xtMpUy8FXQ0RCKvLxcg_96x96.png"
            
            if(final_score_object["home_team_name"] == "Altay Izmir"):
                final_score_object["home_team_logo"] = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/default-team-logo-500.png&w=100&h=100"
                
            if(final_score_object["away_team_name"] == "Altay Izmir"):
                final_score_object["away_team_logo"] = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/default-team-logo-500.png&w=100&h=100"

            counter = counter + 1
            final_scores_data.append(final_score_object)
    
        create_json_data("scoresData.json", final_scores_data)
    
        
    create_news_data(news_url)
    create_scores_data(scores_url)

    return {
            "key": 200,
            "server-message" : "data scraping successfull and data files manually created",
        }

@app.route("/news_description", methods=["POST"], strict_slashes=False)
def news_description():
    print(flask.request.json)
    # for news_object in final_news_data:
        #     create_selenium_driver(news_object['link'])
        #     soup = BeautifulSoup(driver.page_source, "html.parser")
        #     news_description_container = soup.find("div", {"class": "sdc-article-body"})
    
        #     if (news_description_container is None):
        #         continue
    
        #     news_description_source = news_description_container.find_all("p")
    
        #     news_description = ""
    
        #     for news_paragraph in news_description_source:
        #         news_description = news_description + " LINEBREAK " + (news_paragraph.text)
    
        #     news_object['longDescription'] = news_description

    return {
            "key": 1,
            "server-message" : "news description data loaded",
        }

@app.route("/playerDetails", methods=["POST"], strict_slashes=False)
def playerDetails():
    os.chdir("F:/Projects/footstats/src/api/data")
    resultingPlayer = {}
    request = flask.request.json
    file = open('playerDetails.json')
    dataArray = json.load(file)
    resultingPlayer = dataArray[request]

    return resultingPlayer