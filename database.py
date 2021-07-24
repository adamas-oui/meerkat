import pymongo

from pymongo import MongoClient
import web_scraper

#get database from mongodb
def get_db():
    CONNECTION_STRING = "mongodb+srv://notshowingmyid:andpassword@clustertest.mhx8s.mongodb.net/customerInfo?retryWrites=true&w=majority"
    client = MongoClient(CONNECTION_STRING)
    db = client.customerTest
    return db

class User:
    def __init__(self):
        self.phone_num = ""
        self.restaurant_urls = []
        self.dates = []
    def __str__(self):
        return "______\nphone: %s\n url: %s\n date: %s\n" % (self.phone_num, self.restaurant_urls, self.dates)


def get_users(items):
    #store user info
    users = []
    
    for item in items:
        new_user = User()
        new_user.phone_num = item["phoneNum"]
        for r in item["restaurant"]:
            # print("scrubbies " + r)
            new_user.restaurant_urls.append(r)
        for date in item["date"]:
            new_user.dates.append(date.strftime('%Y-%m-%d'))
        print(new_user)
        users.append(new_user)
    return users
    
class Availability:
    def __init__(self):
        self.phone_num = ""
        self.restaurant_url = ""
        self.dates_available = []
        self.restaurant_name = ""
    def __str__(self):
        return "______\nphone: %s\n url: %s\n date: %s\n" % (self.phone_num, self.restaurant_url, self.dates_available)
    
def check_availability(users):
    availabilities = []
    for user in users:
        for url in user.restaurant_urls:
            name = web_scraper.get_restaurant_name(url)
            restaurant_available_dates = web_scraper.get_availability(url)
            user_dates = set(user.dates)
            good_dates = restaurant_available_dates.intersection(user_dates)
    
            if good_dates:
                new_avail = Availability()
                new_avail.phone_num = user.phone_num
                new_avail.restaurant_url = url 
                new_avail.dates_available = good_dates
                new_avail.restaurant_name = name
                availabilities.append(new_avail)
                print(new_avail)
            
    
    return availabilities
            
    


