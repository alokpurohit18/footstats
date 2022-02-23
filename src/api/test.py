#!C:\Python39\python.exe
from ast import Constant
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

os.chdir("F:/Projects/footstats/src/api/data")
url = "https://www.espn.com/soccer/standings/_/league/eng.1"

def create_selenium_driver(url):    
    driver.get(url)
    driver.maximize_window()
    driver.minimize_window()

create_selenium_driver(url)
soup = BeautifulSoup(driver.page_source, "html.parser")
table_main = soup.find("div", {"class": "ResponsiveTable"})
final_league_tables = []

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
        "key": team_position.text,
        "team_logo": team_logo["src"],
        "team_name": team_name.text,
        "played": stats[start_index],
        "won": stats[start_index + 1],
        "drawn": stats[start_index + 2],
        "lost": stats[start_index + 3],
        "goals_for": stats[start_index + 4],
        "goals_away": stats[start_index + 5],
        "goal_difference": stats[start_index + 6],
        "points": stats[start_index + 7],
    }
    start_index = start_index + 8
    final_league_tables.append(final_leagues_object)

print(final_league_tables)
