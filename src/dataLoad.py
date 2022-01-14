#!C:\Python39\python.exe
import json
import sys
import requests
import os
from bs4 import BeautifulSoup
from selenium.webdriver import Chrome
from selenium.webdriver.common.by import By

os.chdir("F:/Projects/footstats/src")

news_url = "https://www.skysports.com/football/news"
scores_url = "https://www.espn.in/football/scoreboard/_/league/all/date/20220113"
stats_url = ""

final_news_data = []
final_scores_data = []
final_stats_data = []


driver = Chrome()

def create_selenium_driver(url):
    driver.get(url)
    driver.maximize_window()
    driver.minimize_window()

#code to read data from html href using selenium
# element = driver.find_element(By.CSS_SELECTOR ,".team-info")
# print(element.text)


def create_json_data(file_name, data_array):
    sys.stdout = open(file_name, 'w')

    jsonobj = json.dumps(data_array, indent=4)
    print("{}".format(jsonobj))
    sys.stdout = sys.__stdout__


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
            "longDescription": ""
        }
        counter = counter + 1
        final_news_data.append(final_news_object)

    for (news_content, news_object) in zip(news_content_source, final_news_data):
        news_object["shortDescription"] = news_content.text

    create_json_data("newsData.json", final_news_data)
    
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
            "link": summary_link,
            "league": league
         }

        counter = counter + 1
        final_scores_data.append(final_score_object)

    create_json_data("scoresData.json", final_scores_data)

    
create_news_data(news_url)
create_scores_data(scores_url)