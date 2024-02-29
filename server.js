const { App } = require('@slack/bolt');
const express = require('express');

const app = express();

const slackApp = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
});

slackApp.message(async ({ message, say }) => {
  if (message.text.includes('@channel')) {
    await say('@channel please see above');
  }
});

(async () => {
  await slackApp.start(process.env.PORT || 3000);
})();

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
