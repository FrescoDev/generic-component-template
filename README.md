# __C_NAME__

The __C_ACRONYM__ API is responsible for

[Apiary documentation](__APIARY_LINK__)

* DEV URL: [__DEV_LINK__]
* LIVE URL: [__LIVE_LINK__]
* DEV FB PAGE: [https://www.facebook.com/NioBi-Development-414974712209773/]
* LIVE FB PAGE: [https://www.facebook.com/NioBiChat/]


[![Build Status](__BUILD_LINK__)](__BUILD_LINK__)


### Prerequisities

* node/npm
* docker
* nodemon
* heroku-cli

### Install and Run Locally

1. Clone the repo
2. Run: ```npm install``` to install project dependencies
3. Run: ```npm run build``` to transpile and build the application
4. Run: ```npm start``` to kickstart and run the server

### Run as Docker Container

1. Run: ```docker build -t "frescodev/__C_NAME__:latest" .``` to build the container image hosted on port 8888
2. Run: ```docker run -p 8888:8888 -d frescodev/__C_NAME__``` to run the container image and map it to your local 8888 port

### Deploy to Heroku

1. Run: ```heroku login``` and enter credentials
2. Run: ```heroku create``` to create the app on Heroku
3. Run: ```git push heroku master``` to activate the deployment
4. Run: ```heroku ps:scale web=1git push heroku master``` to ensure at least one instance of the app is running
5. Run: ```heroku open``` to visit the app's URL
6. Run: ```heroku logs``` to view app logs
7. Run: ```heroku addons:create deployhooks:http --url https://hooks.slack.com/services/{token}``` to add slack deploy hook
8. Run: ```heroku apps:rename [newname]``` to rename the app

## Running the Tests

- ```npm run test```

## Testing the API

Test the API using [Postman](https://www.getpostman.com/collections/{id})

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/{id})

## Request & Response Examples

### API Resources

  - [GET /meta](#get-meta)

### GET /meta

Example: http:/{url}/meta

Response body:

    {
        "description": "__C_NAME__",
        "status": "ok"
    }

## System interaction diagram

![diagram](__DIAGRAM__)