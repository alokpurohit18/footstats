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

os.chdir("F:/Projects/footstats/src/api/data")
url = "https://www.espn.com/soccer/standings/_/league/eng.1"

def create_selenium_driver(url):    
    driver.get(url)
    driver.maximize_window()
    driver.minimize_window()

create_selenium_driver(url)
soup = BeautifulSoup(driver.page_source, "html.parser")
table_main = soup.find("div", {"class": "ResponsiveTable"})

team_names = table_main.find_all("span", {"class": "hide-mobile"})
team_positions = table_main.find_all("span", {"class": "team-position"})
team_logos = table_main.find_all("img", {"class": "Logo"})

for (team_name, team_position, team_logo) in zip(team_names, team_positions, team_logos) :
    print(team_position.text + ". " + team_name.text)
    print(team_logo["src"])

table_rows = table_main.find_all("span", {"class": "stat-cell"})
for table_row in table_rows:
    print(table_row.text)