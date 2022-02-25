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
base_url = "https://www.espn.in/soccer/stats/_/league/"

def create_selenium_driver(url):    
    driver.get(url)
    driver.maximize_window()
    driver.minimize_window()

def create_json_data(file_name, data_array):    
    sys.stdout = open(file_name, 'w')
    jsonobj = json.dumps(data_array, indent=4)
    print("{}".format(jsonobj))
    sys.stdout = sys.__stdout__

final_league_tables = []
urls = ["eng.1", "ger.1", "esp.1", "ita.1", "fra.1"]

for i in range(0,5):
    url = base_url + urls[i]
    create_selenium_driver(url)
    soup = BeautifulSoup(driver.page_source, "html.parser")
    table_main = soup.find("div", {"class": "top-score-table"})

    final_league_table = []
    stats = []

    stat_cells = table_main.find_all("td", {"class": "Table__TD"})
    for stat_cell in stat_cells:
        stats.append(stat_cell.text)

    print(stats)

    
