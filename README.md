<p align="center">
 <img width="320px" src="https://i.redd.it/em1s8xzjs8b81.jpg" align="center" alt="footstats" />
 <h2 align="center">A Football Analysis Application</h3>
</p>

<br/>

## Description

 - A football analysis and prediction app created using ReactJS and Flask.
 - The application uses ML and AI to predict predict team and player statistics and attributes.

### Server

 - The server for the app is created using flask.
 - Data scraping is performed on the server, after which we use our own API's to create/fetch JSON data sets.
 - Uding these data sets we have created the machine learning models to predict player similarity, market value, expected goals etc using python.
 - We have deployed the developed models on the server. 

### Client

 - The front-end was created using react. This interactive react app is dislayed to the end user.
 - The app includes 5 modules including home, live scores, news, stats and coaches center.
 - Live scores from matches across the world are displayed to user in the live scores modules. These scores can be filtered by leagues.
 - Latest football news is displayed under the news module and various live league and player stats are shown in the stats module.
 - These modules use the data fetched/received from the server through api calls.
 - The coaches center module shows the results from the prediction models developed using machine learning on the server.

<br/>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
The app is ready to be deployed!
