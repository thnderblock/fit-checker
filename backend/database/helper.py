from database import queries as query
import base64

all_users = query.get_all_users()
all_clothes = query.get_all_clothes()
all_messages = query.get_all_messages()
def get_user_email(email):
    # all_users = query.get_all_users()
    for user in all_users:
        if user["email"] == email:
            return user
    return None

def get_user_username(username):
    for user in all_users:
        if user["username"] == username:
            return user
    return None

#get clothes data based on username
def get_clothes_username(username):
    user_clothes = []
    for clothes in all_clothes:
        if clothes["username"] == username:
            user_clothes.append(clothes["description"])
    return user_clothes
            

# getting clothes data
def get_clothes_types(type):
    for user in all_users:
        if user["type"] == type:
            return user
    return None
#get chatgpt recommendations
def get_recommendation(username):
    for message in all_messages:
        if message["username"] == username:
            return message
    return None

def convert_image_to_base64(image_path):
    with open(image_path, 'rb') as image_file:
        # From https://stackoverflow.com/a/6375973
        binary_fc = image_file.read()
        base64_utf8_str = base64.b64encode(binary_fc).decode('utf-8')
        ext = image_path.split('.')[-1]
        image_data = f'data:image/{ext};base64,{base64_utf8_str}'
        return image_data
    
# get clothes image based on description
def get_img_des(descrip):
    for cloth in all_clothes:
        if cloth['description'] == descrip:
            return cloth['image']
    return None