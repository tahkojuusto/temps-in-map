const app = require('./app');

const port = process.env.PORT || 8080;
app.listen(port, () => {
  logger.info(`🚀 temps-in-map backend listening at http://localhost:${port}.`);
});