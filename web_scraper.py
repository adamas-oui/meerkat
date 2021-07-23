import requests
import time

from bs4 import BeautifulSoup

from selenium import webdriver
from selenium.webdriver.common.keys import Keys 

def get_page(url):
    #get dynamic page content
    driver = webdriver.Chrome()
    driver.get(url)
    time.sleep(5)
    html = driver.page_source
    # print(html)
    driver.close()

    soup = BeautifulSoup(html, "html.parser")
    return soup

def get_availability(url):
    soup = get_page(url)
    #print the calendars available
    available_dates = soup.find_all('button', class_="ConsumerCalendar-day is-in-month is-available")
    set_available = set()
    for date in available_dates:
        set_available.add(date.attrs['aria-label'])
    available_dates = soup.find_all('button', class_="ConsumerCalendar-day is-in-month is-selected is-available")
    for date in available_dates:
        set_available.add(date.attrs['aria-label'])
    # print(set_available)
    return set_available

def get_restaurant_name(url):
    soup = get_page(url)
    restaurant_name = soup.find('h2', {"id": "experience-dialog-title"})
    # print(restaurant_name.get_text())
    return restaurant_name.get_text()










