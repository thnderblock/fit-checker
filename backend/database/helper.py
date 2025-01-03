import queries as query
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