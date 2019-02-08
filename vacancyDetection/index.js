const axios = require('axios');

exports.handler = async event => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(event.message)
  };
  let slackMessage = {
    text: 'POOPER ALERT! :poop:\nRestroom #1 Currently Occupied!'
  };
  axios
    .post(process.env.SLACK_HOOK_URL, JSON.stringify(slackMessage))
    .then(res => {
      console.log('Sent with status 200', res.data);
    })
    .catch(err => {
      console.log('Error:', err);
    });
  return response;
};
