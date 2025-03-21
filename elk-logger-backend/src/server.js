const express = require('express');
const bodyParser = require('body-parser');
const winston = require('winston');
const cors=require('cors');
const {ElasticsearchTransport} = require('winston-elasticsearch');

const app = express();
app.use(bodyParser.json());
app.use(cors())

// Configure Winston with Elasticsearch
const esTransportOpts = {
  level: 'info',
  clientOpts: { node: 'http://localhost:9200' }
};

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new ElasticsearchTransport(esTransportOpts)
  ]
});

app.post('/logs', (req, res) => {
  const { level, message, timestamp, app } = req.body;
  logger.log({ level, message, timestamp, app });
  res.status(200).send({"status":"Log Received"});
});

app.listen(3000, () => console.log('Log server running on port 3000'));
