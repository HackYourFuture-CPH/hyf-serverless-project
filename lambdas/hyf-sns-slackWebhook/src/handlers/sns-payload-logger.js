/**
 * A Lambda function that logs the payload received from SNS.
 */
const axios = require("axios").default;
const aws = require("aws-sdk");
const db = new aws.DynamoDB();

const tableName = process.env.PERSONS_TABLE;

exports.snsPayloadLoggerHandler = async (event, context) => {

  var params = {
    TableName: tableName,
    Key: { id: { S: event.Records[0].Sns.Message } },
  };

  const result = await db.getItem(params).promise();

  const roundsText = result["Item"].interviewRounds.S > 1 ? "rounds" : "round";
  const header = `*${result["Item"].fullname.S}* from class *${result["Item"].classNr.S}* just landed a job after *${result["Item"].interviewRounds.S}* interview ${roundsText}! :clap:`;
 
  const payload = {
    username: "HYF Alumni Hired",
    icon_emoji: ":hyf-new:",
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: header,
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
            value: result["Item"].comment.S,
            short: false,
          },
        ],
      },
    ],
  };

  const slackURL = process.env.SLACK_URL;

  await axios({
    method: "post",
    url: slackURL,
    data: payload,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  })
    .then(function (response) {
      //handle success
      console.info(response);
    })
    .catch(function (error) {
      //handle error
      console.error(`Error posting message to Slack API: ${error}`);
    });

};
