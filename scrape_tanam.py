import requests
import time

from bs4 import BeautifulSoup

from selenium import webdriver
from selenium.webdriver.common.keys import Keys 

#get dynamic page content#
driver = webdriver.Chrome()
driver.get("https://www.exploretock.com/tanam/experience/283863/patio-reservation?date=2021-07-22&size=2&time=20%3A00")
time.sleep(5)
html = driver.page_source
# print(html)
driver.close()

# URL = "https://www.exploretock.com/tanam/experience/283863/patio-reservation?date=2021-07-22&size=2&time=20%3A00"
# page = requests.get(URL)
# # print(page.text)
soup = BeautifulSoup(html, "html.parser")

# results = soup.find(id="experience-dialog-content")
# print(results.prettify())
# 
calendars = soup.find_all('div', class_='ConsumerCalendar-month')
for calendar in calendars:
    print(calendar, end="\n"*2)
# 
# btns = soup.find_all('button')
# for btn in btns:
#     print(btn)