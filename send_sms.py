from twilio.rest import Client

def send_message(phone_num, name, msg):
    # Your Account SID from twilio.com/console
    account_sid = "notgoingtoshowsid"
    # Your Auth Token from twilio.com/console
    auth_token  = "neitherthetoken"

    client = Client(account_sid, auth_token)

    message = client.messages.create(
        to=phone_num, 
        from_="+12019921125",
        body="Hurry! The restaurant "+ name + " is available to book on " + str(msg))
    
    print(message.sid)

