const express = require('express');
const dotenv = require('dotenv');

const dbmanager = require("./dbmanager");
const utils = require("./utils");

const app = express();
app.use(express.static("../build/"));
app.use(express.json());

dotenv.config();


app.get('/api/now', (req, res) => {
  dbmanager.tempNow(utils.passData(res));
});

app.get('/api/now/:thermometer', (req, res) => {
  dbmanager.tempNowThermometer(req.params.thermometer, utils.passData(res));
});

app.get('/api/history', (req, res) => {
  dbmanager.history(req.body.limits, utils.passData(res));
});

app.get('/api/history/:thermometer', (req, res) => {
  dbmanager.historyThermometer(req.body.limits, req.params.thermometer, utils.passData(res));
});


app.listen(3001, () => { console.log("listening 3001...") })