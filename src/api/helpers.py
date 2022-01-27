#!C:\Python39\python.exe
import flask
import json
import sys
import requests
import os
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By

def create_json_data(file_name, data_array):    
    sys.stdout = open(file_name, 'w')
    jsonobj = json.dumps(data_array, indent=4)
    print("{}".format(jsonobj))
    sys.stdout = sys.__stdout__