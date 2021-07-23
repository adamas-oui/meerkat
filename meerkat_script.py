import database
import web_scraper
import send_sms 

db = database.get_db()
collection = db["customerInfo"]
items = collection.find()

users = database.get_users(items)
availability_results = database.check_availability(users)

for res in availability_results:
    if res.dates_available:
        # print(res.dates_available)
        send_sms.send_message(res.phone_num, res.restaurant_name, res.dates_available)