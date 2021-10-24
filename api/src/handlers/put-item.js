const dynamodb = require("aws-sdk/clients/dynamodb");
const docClient = new dynamodb.DocumentClient();
const aws = require("aws-sdk"); 

const tableName = process.env.personsTable;
exports.putPersonsHandler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    throw new Error(
      `postMethod only accepts POST method, you tried: ${event.httpMethod} method.`
    );
  }
  console.info("received:", event);

  const body = JSON.parse(event.body);
  const params = {
    TableName: tableName,
    Item: {
      id: body.id,
      fullname: body.fullname,
      classNr: body.classNr,
      position: body.position,
      company: body.company,
      aboutJob: body.aboutJob,
      interviewRounds: body.interviewRounds,
      assignment: body.assignment,
      linkedIn: body.linkedIn,
      github: body.github,
      comment: body.comment,
      imageUrl: "?",
    },
  };

  

  const result = await docClient.put(params).promise();

  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers":
      "Content-Type,X-Amz-Date,Authorization,X-Api-Key,x-requested-with",
      "Access-Control-Allow-Origin": "*", // Allow from anywhere
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT,DELETE,PATCH",
    },
    body: JSON.stringify(body),
  };

  // after results in put
  const sns = new aws.SNS();
  const paramsSNS = {
    Message: `ID: ${body.id}, Name: ${body.fullname} got placed in ${body.company}`,
    Subject: "New job position received",
    TopicArn: "arn:aws:sns:us-east-1:699804860351:Alumni_Got_Employed", //topic arn goes here
  };
  sns.publish(paramsSNS, context.done);

  console.info(
    `response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`
  );
  return response;
};
