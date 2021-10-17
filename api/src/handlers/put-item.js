const dynamodb = require("aws-sdk/clients/dynamodb");

exports.putItemHandler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    throw new Error(
      `postMethod only accepts POST method, you tried: ${event.httpMethod} method.`
    );
  }
  console.info("received:", event);

  const body = JSON.parse(event.body);
  const id = body.id;
  const name = body.name;
  const companyName = body.companyName;

  const response = {
    statusCode: 200,
    body: JSON.stringify(body),
  };

  const aws = require("aws-sdk"); // at the beginning of the files

  // after results in put
  const sns = new aws.SNS();
  const paramsSNS = {
    Message: `id: ${id} Name: ${name} got placed in ${companyName}`,
    Subject: "New subscription received",
    TopicArn: "arn:aws:sns:us-east-1:699804860351:Alumni_Got_Employed", //topic arn goes here
  };
  sns.publish(paramsSNS, context.done);

  console.info(
    `response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`
  );
  return response;
};
