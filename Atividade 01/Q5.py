import requests
import requests_cache
from bs4 import BeautifulSoup
from pprint import pprint

requests_cache.install_cache('banco')
busca = str(input('O que deseja buscar: '))
response = requests.get('http://www.google.com/search?q=%s' % busca)
soup = BeautifulSoup(response.text, 'html.parser')
tags = soup.find_all('h3')
for t in tags:
    texto = t.get_text()
    print('-',texto)