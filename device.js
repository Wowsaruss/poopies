const Gpio = require('onoff').Gpio;
const pir = new Gpio(17, 'in', 'both');
const axios = require('axios');

let i = 0;
const motionDetection = () => {
  return pir.watch((err, value) => {
    if (err) exit();
    let message = `Movement Detected! ${i++}`;
    console.log(message);
    await axios
      .post(`${process.env.API_GATEWAY}/Prod`, {
        message
      })
      .then(res => {
        console.log('HIT!', res.data);
      });
    return message;
  });
};

function exit() {
  pir.unexport();
  process.exit();
}
module.exports = motionDetection;
