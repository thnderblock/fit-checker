from database import queries as query
import base64

all_users = query.get_all_users()

def get_user_email(email):
    all_users = query.get_all_users()
    for user in all_users:
        if user["email"] == email:
            return user
    return None

def get_user_username(username):
    for user in all_users:
        if user["username"] == username:
            return user
    return None
    
def convert_image_to_base64(image_path):
    with open(image_path, 'rb') as image_file:
        # From https://stackoverflow.com/a/6375973
        binary_fc = image_file.read()
        base64_utf8_str = base64.b64encode(binary_fc).decode('utf-8')
        ext = image_path.split('.')[-1]
        image_data = f'data:image/{ext};base64,{base64_utf8_str}'
        return image_data