const app = require('./server.js');

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`app is listening on port: ${PORT}`);
});

module.exports = app;