/**
 * A Lambda function that logs the payload received from SNS.
 */
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const aws = require("aws-sdk");
const db = new aws.DynamoDB({
  region: "us-east-1",
  maxRetries: 1,
});

const tableName = process.env.personsTable;

exports.snsPayloadLoggerHandler = async (event, context) => {
  //console.log(event.Records[0].Sns.Message);
  var params = {
    TableName: tableName,
    Key: { id: { S: "3" } }, //id from sns event.Records[0].Sns.Message
  };

  const result = await db.getItem(params).promise();

  const data = {
    username: "HYF Alumni Hired",
    text: "A new position has been added :developers:",
    icon_emoji: ":hyf-new:",
    attachments: [
      {
        color: "#2A3A7D", // color of the attachments sidebar.
        image_url: JSON.stringify(result["Item"].imageUrl.S),
        fields: [
          {
            title: "Congratulations to:", // Custom field
            value: JSON.stringify(result["Item"].fullname.S), // Custom value
            short: false, // long fields will be full width
          },
          {
            title: "Hired by:",
            value: JSON.stringify(result["Item"].company.S),
            short: false,
          },
          {
            title: "Position:",
            value: JSON.stringify(result["Item"].position.S),
            short: false,
          },
          {
            title: "From class nr:",
            value: JSON.stringify(result["Item"].classNr.S),
            short: false,
          },
          {
            title: "How many rounds of intereview:",
            value: JSON.stringify(result["Item"].interviewRounds.S),
            short: false,
          },
          {
            title: "Code assignment:",
            value: JSON.stringify(result["Item"].assignment.S),
            short: false,
          },
        ],
      },
    ],
  };

  const slackURL = process.env.slackURL
  await fetch(slackURL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
