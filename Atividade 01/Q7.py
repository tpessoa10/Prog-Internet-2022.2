import requests
import requests_cache
from bs4 import BeautifulSoup
from pprint import pprint

requests_cache.install_cache('banco')
cep = int(input("CEP que deseja buscar: "))
response = requests.get('https://viacep.com.br/ws/%i/json/' % cep)
lugar = response.json()
print('UF =',lugar['uf'])
print('Cidade = ',lugar['localidade'])
print('Bairro =',lugar['bairro'])
print('Rua =',lugar['logradouro'])