import time
import glob
import json
import nltk   
from wifi import Cell, Scheme
import pickle
import urllib.request
import requests
from bs4 import BeautifulSoup
import math
import os
import sys
from os import listdir
from os.path import isfile, join

def options():
  print("Welcome to Dirtbot Web Scraper.")
  print("1: Ping the domain or IP to check that they are alive")
  print("2: Scrape the data from a website")
  cmd = input('Number: ')

  if cmd == '1':
    ping()
  elif cmd == '2':
    scrape()
  else:
    options()

def ping():
  domain = input('Domain/IP: ')
  os.system("ping "+str(domain))
  options()

def scrape():
  url = input('URL: ')
  browse = requests.get(url)
  total = BeautifulSoup(browse.text, 'html.parser')
  print(total)
  options()
options()
