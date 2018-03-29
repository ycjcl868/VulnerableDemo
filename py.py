import requests
from bs4 import BeautifulSoup

url = 'http://localhost/8c69b6b71fc52aa338a08812361e6fd1/index.php'

f = open('./hack11.txt', 'rb')
g = open('./hack22.txt', 'rb')

param1 = f.read()
param2 = g.read()

session = requests.Session()

# get csrf_token
r = session.get(url)
soup = BeautifulSoup(r.text, "html5lib")
token = soup.find_all(id='csrf_token')[0].get("value")
print token

headers = {
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:40.0) Gecko/20100101 Firefox/40.0',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Referer': 'http://localhost/8c69b6b71fc52aa338a08812361e6fd1',
}

data = {
  'param1': param1,
  'param2': param2,
  'csrf_token': token,
}
s = session.post(url, headers=headers, data=data)
print s.content
