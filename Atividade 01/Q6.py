import requests
import requests_cache
from bs4 import BeautifulSoup
from pprint import pprint

requests_cache.install_cache('banco')
response = requests.get('https://www.meutimao.com.br/tabela-de-classificacao/campeonato_brasileiro/')
soup = BeautifulSoup(response.text, 'html.parser')
tags = soup.find_all('th')
for t in tags:
    texto = t.get_text()
    print('-',texto)