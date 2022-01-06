#!C:\Python39\python.exe
import requests
from bs4 import BeautifulSoup

news_url = "https://www.skysports.com/football/news"
scores_url = "https://www.espn.in/football/scoreboard/_/league/all/"
stats_url = ""

def create_news_data(url):
    request = requests.get(url)
    soup = BeautifulSoup(request.content, "html.parser")
    news_source = soup.find_all('a')

    news_array = []
    for news_object in news_source:
        if(news_object.has_attr('aria-label')):
            news_array.append(news_object)
    
    for news_object in news_array:
        print(news_object['title'])
        #print(news_object['href'])
        #print(news_object.find('img')['data-src']
        #print(news_object.find('img')['alt'])

def create_scores_data(url):
    request = requests.get(url)
    soup = BeautifulSoup(request.content, "html.parser")
    scores_source = soup.find('div', class_='team-info')
    #team_name = scores_source.find_next('span', class_='short-name')
    print(scores_source)
    #for title_object in scores_source:
        #print(title_object)

    #scores_array = []
    #for score_object in scores_source:
        #if(score_object.has_attr('aria-label')):
            #scores_array.append(score_object)
    
    #for news_object in scores_array:
        #print(score_object['title'])
        #print(news_object['href'])
        #print(news_object.find('img')['data-src']
        #print(news_object.find('img')['alt'])

create_news_data(news_url)
create_scores_data(scores_url)


#import json
#import sys

#sys.stdout = open('test_data.js', 'w')

#jsonobj = json.dumps(dictionary)
#print("var jsonstr = {} ".format(jsonobj))