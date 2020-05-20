const express = require('express');

const app = express();

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`temps-in-map backend listening at http://localhost:${port}`);
});