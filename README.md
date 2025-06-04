# Fit-Checker

Fit Checker is an AI assisted wardrobe system that aims to customise personal styles based on the user's personal wardrobe. Users take images of the clothes they personally own and upload to the website, after which, fit-checker would help assist on picking clothes based on the styles the user have suggested.

# how to set up fit-checker

## Prerequisites
- [python3](https://www.python.org/downloads/)
- [mongodb](https://www.mongodb.com/docs/manual/administration/install-community/)
- [npm node](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Database
Install [mongoDB Community edition](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/) 
1. Run: mongoDB service
2. Run: python3 database/database_setup.py

## frontend
1. npm i
2. npm run build
3. npm run dev

React frontend should now be running at http://localhost:3000

## backend
1. cd backend
2. pip install -r requirements.txt
3. cd back to fit-checker and run python3 server.py
4. alternatively venv can be set up for this project by running python3 -m venv .venv

Flask backend should now be running at http://localhost:5000

Developed by Nick Tong and Angus Chao
