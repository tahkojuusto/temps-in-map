const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const validate = require('jsonschema').validate;

const logger = require('./logger');
const temperatureFileSchema = require('./schema');

const app = express();

// Middlewares

// Set specific URL for CORS. For development, set to allow all URLs.
app.use(cors());
app.use(fileUpload());

// In-memory store for temperature contents.
let temperatures = [];

// Routes

app.get('/temperatures', (req, res) => {
  logger.info('GET /temperatures invoked.');
  logger.info('GET /temperatures successfully executed.');
  return res.json(temperatures);
});

app.post('/temperatures/upload', (req, res) => {
  logger.info('POST /temperatures/upload invoked.');

  try {
    if (!req.files || !req.files.temperatureFile || Object.keys(req.files).length !== 1) {
      logger.warn('Invalid file input was passed.');
      return res.status(400).json({
        error: 'Invalid file input'
      });
    }
    
    let temperatureFileJson = null;
    try {
      // Parse and check file format and syntax.
      const temperatureFileString = req.files.temperatureFile.data.toString('utf8');
      temperatureFileJson = JSON.parse(temperatureFileString);
      validate(temperatureFileJson, temperatureFileSchema, {
        throwError: true
      });
      logger.debug(`Uploaded file "${req.files.temperatureFile.name}" was parsed successfully.`);
    } catch (ex) {
      logger.warn(`Uploaded file was in invalid file format: ${ex}`);
      return res.status(400).json({
        error: 'Invalid file format'
      });
    }
    
    // Store the latest uploaded temperatures in-memory.
    // TODO: Is this enough?
    temperatures = temperatureFileJson;

    logger.info('POST /temperatures/upload successfully executed.');
    return res.status(201).json(temperatures);
  } catch (ex) {
    logger.error(`Internal server error: ${ex}.`);
    return res.status(500).json({
      error: 'Internal server error'
    });
  }
});

module.exports = app;