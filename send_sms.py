from twilio.rest import Client

def send_message(phone_num, name, msg):
    # Your Account SID from twilio.com/console
    account_sid = "ACd5cc186c6c9d34cc80aea33d98e9433d"
    # Your Auth Token from twilio.com/console
    auth_token  = "215c039643a4950ede1b3527f0efa927"

    client = Client(account_sid, auth_token)

    message = client.messages.create(
        to=phone_num, 
        from_="+12019921125",
        body="Hurry! The restaurant "+ name + " is available to book on " + str(msg))
    
    print(message.sid)

