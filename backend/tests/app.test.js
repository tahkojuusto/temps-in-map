/* eslint-disable jest/no-test-callback */
/* eslint-disable jest/expect-expect */
// eslint-disable-next-line node/no-unpublished-require
const request = require('supertest');
const path = require('path');
const app = require('../src/app');

describe('POST /temperatures/upload', () => {
  let server = null;
  
  beforeAll(() => {
    server = app.listen(8080);
  })

  afterAll(async () => {
    await server.close();
  })

  it('should upload correct temperature files', function (done) {
    const testResourcePath = path.join(__dirname, 'resources', 'correctTemperatureFile.json');

    request(app)
    .post('/temperatures/upload')
    .attach('temperatureFile', testResourcePath)
    .expect('Content-Type', /json/)
    .expect(201, done);
  });

  it('should not accept wrong files', function (done) {
    const testResourcePath = path.join(__dirname, 'resources', 'correctTemperatureFile.json');

    request(app)
    .post('/temperatures/upload')
    .attach('randomFile', testResourcePath)
    .expect('Content-Type', /json/)
    .expect(400, done);
  });

  it('should not accept files in wrong format', function (done) {
    const testResourcePath = path.join(__dirname, 'resources', 'invalidTemperatureFile.json');

    request(app)
    .post('/temperatures/upload')
    .attach('temperatureFile', testResourcePath)
    .expect('Content-Type', /json/)
    .expect(400, done);
  });
});

describe('GET /temperatures', () => {
  let server = null;
  
  beforeAll(() => {
    server = app.listen(8080);
  })

  afterAll(async () => {
    await server.close();
  })

  it('should return uploaded temperatures', function (done) {
    request(app)
    .get('/temperatures')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
});