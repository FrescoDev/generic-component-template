# __API_NAME__

Last Edited: <DATE>

The __API_NAME__ API is responsible for <description>


[![Build Status](__BUILD_LINK__)](__BUILD_LINK__)

[![Coverage Badge](_COVERAGE_BADGE_LINK__)](LINK)


### Prerequisites

- [Node.js and npm](nodejs.org) Node >= 6.x.x, npm >= 3.x.x
- (Optional) [Bunyan](https://github.com/trentm/node-bunyan) - The bunyan CLI provides formatted output of JSON logs `npm install -g bunyan`

### Install and Run Locally

1. Run `npm install` to install server dependencies, the post install script should then automatically run the build command which uses Babel to transpile the app into native javascript. The output is produced and output in the build directory

2. Run: `npm start` to kickstart and run the server OR Run: `npm start | bunyan` to kickstart and run the server with prettyfied logging (*requires global install of bunyan). The logging level can be changed by editing the config file (src/configuration). For development, the server is configured to run on: http://localhost:4567/

* Run `npm start:watch` to start the server using nodemon which will restart upon file change

## Running the Tests

* Running `npm test` will run the tests and generate a HTML test report in mochawesome-report
* Running `npm run test:watch` will run the tests using nodemon which will re-run the tests upon any file change
* Running `npm run coverage` will run the tests and generate a coverage report in the coverage directory. 

## Testing the API

Test the API using [Postman](https://www.getpostman.com/collections/{id})

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/{id})

## Request & Response Examples

### API Resources

  - [GET /server-status](#get-server-status)

### GET /server-status

Example: http:/{url}/server-status

Response body:

    {
        "description": "__API_NAME__",
        "status": "ok"
    }