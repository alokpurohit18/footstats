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
from webdriver_manager.chrome import ChromeDriverManager
import numpy as np
import os
import pandas as pd
from scipy import spatial
from sklearn import preprocessing
from matplotlib import pyplot as plt
from sklearn.preprocessing import MinMaxScaler
from sklearn.preprocessing import StandardScaler

app = flask.Flask(__name__)

options = webdriver.ChromeOptions()
options.headless = True
driver = webdriver.Chrome(ChromeDriverManager().install(), chrome_options=options)
    
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


@app.route("/player_details", methods=["POST"], strict_slashes=False)
def player_details():
    os.chdir("F:/Projects/footstats/src/api/data")
    resultingPlayer = {}
    request = flask.request.json
    file = open('playerDetails.json')
    dataArray = json.load(file)
    resultingPlayer = dataArray[request]

    return resultingPlayer


@app.route("/leagu_details", methods=["POST"], strict_slashes=False)
def league_details():
    os.chdir("F:/Projects/footstats/src/api/data")
    tables_url = "https://www.espn.com/soccer/standings/_/league/" 
    stats_url = "https://www.espn.in/soccer/stats/_/league/"
    urls = ["eng.1", "ger.1", "esp.1", "ita.1", "fra.1"]
    final_league_tables = []
    leagues_stats = {}

    
    def create_league_tables():

        for i in range(0,5):
            url = tables_url + urls[i]
            create_selenium_driver(url)
            soup = BeautifulSoup(driver.page_source, "html.parser")
            table_main = soup.find("div", {"class": "ResponsiveTable"})

            final_league_table = []
            stats = []

            stat_cells = table_main.find_all("span", {"class": "stat-cell"})
            for stat_cell in stat_cells:
                stats.append(stat_cell.text)

            team_names = table_main.find_all("span", {"class": "hide-mobile"})
            team_positions = table_main.find_all("span", {"class": "team-position"})
            team_logos = table_main.find_all("img", {"class": "Logo"})

            start_index = 0
            for (team_name, team_position, team_logo) in zip(team_names, team_positions, team_logos):
                final_leagues_object = {
                    "rank": team_position.text,
                    "team_logo": team_logo["src"],
                    "team_name": team_name.text,
                    "played": stats[start_index],
                    "won": stats[start_index + 1],
                    "drawn": stats[start_index + 2],
                    "lost": stats[start_index + 3],
                    "goals_for": stats[start_index + 4],
                    "goals_against": stats[start_index + 5],
                    "goal_difference": stats[start_index + 6],
                    "points": stats[start_index + 7],
                }
                start_index = start_index + 8
                final_league_table.append(final_leagues_object)

            final_league_tables.append(final_league_table)

        create_json_data("leagueTables.json", final_league_tables)


    def create_league_stats(class_name):
        for i in range(0,5):
            url = stats_url + urls[i]
            create_selenium_driver(url)
            soup = BeautifulSoup(driver.page_source, "html.parser")
            table_main = soup.find("div", {"class": class_name})

            stats = []
            final_league_stats = []

            stat_cells = table_main.find_all("td", {"class": "Table__TD"})
            for stat_cell in stat_cells:
                stats.append(stat_cell.text)

            start_index = 0
            counter = 1
            while ((start_index < len(stats)) and (counter<=10)):
                leagues_stats_object = {
                    "rank": counter,
                    "name": stats[start_index + 1],
                    "club": stats[start_index + 2],
                    "matches": stats[start_index + 3],
                    "value": stats[start_index + 4],
                }
                counter = counter + 1
                start_index = start_index + 5
                final_league_stats.append(leagues_stats_object)

            if class_name=="top-score-table":
                if i==0:
                    leagues_stats["premier_league_scorers"] = final_league_stats
                elif i==1:
                    leagues_stats["bundesliga_scorers"] = final_league_stats
                elif i==2:
                    leagues_stats["la_liga_scorers"] = final_league_stats
                elif i==3:
                    leagues_stats["serie_a_scorers"] = final_league_stats
                else:
                    leagues_stats["ligue_1_scorers"] = final_league_stats
            else:
                if i==0:
                    leagues_stats["premier_league_assists"] = final_league_stats
                elif i==1:
                    leagues_stats["bundesliga_assists"] = final_league_stats
                elif i==2:
                    leagues_stats["la_liga_assists"] = final_league_stats
                elif i==3:
                    leagues_stats["serie_a_assists"] = final_league_stats
                else:
                    leagues_stats["ligue_1_assists"] = final_league_stats

        create_json_data("leagueStats.json", leagues_stats)

    create_league_tables()
    create_league_stats("top-score-table")
    create_league_stats("top-assists-table")

    return {
            "key": 0,
            "server-message" : "league stats data loaded",
        }
  

@app.route("/player_similarity_prediction", methods=["POST"], strict_slashes=False)
def player_similarity_prediction():
    # Player Similarity Prediction

    """Two players are similar if they have attributes similar to each other. This helps football teams replace a player if one leaves/retires. It also helps teams scout potential future players. However, in our model, by similar we mean stats skewed in a similar fashion, not necessarily values being similar. By that we mean, Player A can be similar to Player B even if he has 2x the values for shooting, passing, dribbling, pace, physical, defending.
    """

    os.chdir("F:/Projects/footstats/src/api/data")

    predata=pd.read_csv("players_22.csv")  # Reading data from the dataset

    x=predata.iloc[:,0:2]
    y=predata['nationality_name']
    x.join(y)

    data=predata.drop(['short_name','nationality_name','player_positions','club_contract_valid_until'],axis=1, inplace=False)
    data= pd.get_dummies(data, columns = ['preferred_foot'])

    scaler = MinMaxScaler()

    new_data = scaler.fit_transform(data.to_numpy())
    new_data = pd.DataFrame(new_data, columns = ["overall", "potential", "wage_eur", "age", "weak_foot", "skill_moves", "release_clause_eur", "pace", "shooting",
                                             "passing", "dribbling", "defending", "physic", "attacking_crossing", "attacking_finishing", "attacking_heading_accuracy",
                                             "attacking_short_passing", "attacking_volleys", "skill_dribbling", "skill_curve", "skill_fk_accuracy", "skill_long_passing",
                                             "skill_ball_control", "movement_acceleration", "movement_sprint_speed", "movement_agility", "movement_reactions", "movement_balance",
                                             "power_shot_power", "power_jumping", "power_stamina", "power_strength", "power_long_shots", "mentality_aggression",
                                             "mentality_interceptions", "mentality_positioning", "mentality_vision", "mentality_penalties", "mentality_composure",
                                             "defending_marking_awareness", "defending_standing_tackle", "defending_sliding_tackle", "goalkeeping_diving", "goalkeeping_handling",
                                             "goalkeeping_kicking", "goalkeeping_positioning", "goalkeeping_reflexes", "goalkeeping_speed", "value_eur", "preferred_foot_Left",
                                             "preferred_foot_Right"])


    """# Taking User Input"""

    request = flask.request.json
    player_1 = request[0]
    player_2 = request[1]

    p1 = x.loc[x["short_name"] == player_1]
    p1_df = pd.DataFrame(data=p1)
    index_1 = 0
    for row in p1_df.index:
        index_1 = row

    p2 = x.loc[x["short_name"] == player_2]
    p2_df = pd.DataFrame(data=p2)
    index_2 = 0
    for row in p2_df.index:
        index_2 = row

    cosine_result_1 = 1 - spatial.distance.cosine(new_data.iloc[index_1:index_1+1,:], new_data.iloc[index_2:index_2+1,:])
    
    player_similarity = {"similarity_percent": cosine_result_1*100}

    return player_similarity