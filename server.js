const express = require('express');
const app = express();
const motionDetection = require('./device');

const server = () => {
  console.log('Server Starting!');
  app.get('*', (req, res) => res.send('Running Server!'));
  app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Listening on ${process.env.HOST}:${process.env.PORT}`);
  });
  motionDetection();
};

server();
