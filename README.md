# Brainhub Fullstack Project

This project was created for a job interview, below is a description of all the necessary things to install, run and test the application itself.

## Project structure

The project is devided into two folders: client (which represents the frontend of the app) and server (which represents the backend of the app).
We need to run both in order to have full functionality.


## What should I do to run this app ?
After you cloned the repository open two terminals.

### First terminal :
Please navigate to the client folder and run the following command:

### `npm install`
This will install all the dependencies needed in order to run this app.

### `npm start`
This will run the client side of the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### Second terminal :
Please navigate to the server folder and run the following command:

### `npm install`
This will install all the dependencies needed in order to run this app.

### `npm run dev`
This will run the server side of the app in the development mode.
The server will be localy hosted on port 3001.

You should also receive a message in the terminal stating "Server is starting at port 3001"

## How to test the app ?
The client and the server side share one command to test the app.
You need to open a terminal window and navigate to the part you want to test and simply run the following command :

### `npm test`
Launches the test runner in the interactive watch mode.

If you run the test on the server side an error will appear.
"Jest has detected the following 1 open handle potentially keeping Jest from exiting"

This is a bug with jest that hasn't been fixed yet, more one that on the official GitHub page from jest :
https://github.com/facebook/jest/issues/11665

