const express = require('express');

const app = express();

app.listen(port, () => {
  const port = process.env.PORT || 8080;
  console.log(`temps-in-map backend listening at http://localhost:${port}`);
});