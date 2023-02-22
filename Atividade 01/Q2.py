import requests
import requests_cache
from bs4 import BeautifulSoup
from pprint import pprint

requests_cache.install_cache('banco')
response = requests.get('https://www.reddit.com/r/investimentos/',verify=False)
soup = BeautifulSoup(response.text, 'html.parser')
tag = input('Digite uma tag que deseja buscar: ')
tags = soup.find_all(tag)
for t in tags:
    texto = t.get_text()
    print('-',texto)