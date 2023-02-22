import requests

url = requests.get('https://img.freepik.com/fotos-gratis/close-de-um-pato-perto-de-um-lago-em-um-zoologico_181624-51048.jpg?w=740&t=st=1677017740~exp=1677018340~hmac=aad63afc69a34fe7770eec69ec792bcf8d7a1cd7d6adebb41730a89dad73b2d6',verify=False)

with open('img.jpg','wb') as f:
    f.write(url.content)