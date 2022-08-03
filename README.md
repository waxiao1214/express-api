# Overview
This Rest API is built with express, mongoose and support the swagger API document.

# Getting Started
Clone this repository: `git clone git@github.com:waxiao1214/express-api.git`

### Node.js
You will need to install node in your local. [Node.js](https://nodejs.org/en/)

Node 14 version is recommended.

### Database
You will need to install docker to install MongoDB.

After install the docker
Run:
```
docker-compose up
```

MongoDB will be running on port 27017.


### Run API in local
```
npm install
npm run dev
```

API service will be running on port 5000

To see the API documentation
Visit: `http://localhost:5000/docs`

### Build API service
```
npm run build
```