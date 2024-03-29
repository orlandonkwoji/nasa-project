require('dotenv').config();
const http = require('http');
const mongoose = require('mongoose');

const app = require('./app');
const { loadPlanetsData } = require('./models/planets.model');
const { mongoConnect } = require('./services/mongo');
const { loadLaunchData } = require('./models/launches.model');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(PORT, async () => {
  await mongoConnect();
  await loadPlanetsData();
  await loadLaunchData();

  console.log(`Listening on ${PORT}...`);
});
