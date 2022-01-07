#!C:\Python39\python.exe
from typing import Counter
import requests
from bs4 import BeautifulSoup
from selenium.webdriver import Chrome
from selenium.webdriver.common.by import By

news_url = "https://www.skysports.com/football/news"
scores_url = "https://www.espn.in/football/scoreboard/_/league/all/"
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
    counter = 1
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
    # logos = soup.find_all("img", {"class": "team-logo imageLoaded"})
    # for i in logos:
    #     print(i['src'])


create_news_data(news_url)
create_scores_data(scores_url)


# import json
# import sys

# sys.stdout = open('test_data.js', 'w')

# jsonobj = json.dumps(final_news_data)
# print("var final_news_data = {} ".format(jsonobj))