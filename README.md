# AskGooglePlaces
An app that searches Google Places.

1. [Requirements](#requirements)
2. [Usage](#usage)
  1. [Installing dependencies](#installing-dependencies)
  2. [Setting up environment variables](#setting-up-environment-variables)
  3. [Starting the server locally](#starting-the-server-locally)

##Requirements
Node

##Usage

###Installing dependencies
```npm install```

###Setting up environment variables
Step 1: From the root directory of the app, create a `.env` file:

```touch .env```

Step 2: Open `.env`, add your Google API Key in the following format:

`GOOGLE_PLACES_API_KEY="YOUR_API_KEY_HERE"`

###Starting the server locally
From the root directory of the app:
```npm start```

Navigate to localhost:3000 in a browser to interact with the app!
