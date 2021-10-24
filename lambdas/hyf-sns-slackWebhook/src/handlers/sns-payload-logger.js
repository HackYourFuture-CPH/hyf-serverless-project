/**
 * A Lambda function that logs the payload received from SNS.
 */
require("dotenv").config();
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const aws = require("aws-sdk");
const db = new aws.DynamoDB({
  region: "us-east-1",
  maxRetries: 1,
});

const tableName = process.env.PERSONS_TABLE;

exports.snsPayloadLoggerHandler = async (event, context) => {
  var params = {
    TableName: tableName,
    Key: { id: { S: event.Records[0].Sns.Message } }, //id from sns event.Records[0].Sns.Message
  };

  const result = await db.getItem(params).promise();

  const roundsText = result["Item"].interviewRounds.S > 1 ? "rounds" : "round";

  const data = {
    username: "HYF Alumni Hired",
    icon_emoji: ":hyf-new:",
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*${result["Item"].fullname.S}* from class *${result["Item"].classNr.S}* just landed a job after *${result["Item"].interviewRounds.S}* interview ${roundsText}! :clap:`,
        },
      },
      {
        type: "image",
        image_url: result["Item"].imageUrl.S,
        alt_text: result["Item"].fullname.S,
      },
    ],
    attachments: [
      {
        color: "#2A3A7D", // color of the attachments sidebar.
        fields: [
          {
            title: "Hired by:",
            value: result["Item"].company.S,
            short: false,
          },
          {
            title: "Position:",
            value: result["Item"].position.S,
            short: false,
          },
          {
            title: "Code assignment:",
            value: result["Item"].assignment.S,
            short: false,
          },
          {
            title: "Comment:",
            value: "Comment goes here", //result["Item"].comment.S,
            short: false,
          },
        ],
      },
    ],
  };

  const slackURL = process.env.SLACK_URL;

  await fetch(slackURL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
