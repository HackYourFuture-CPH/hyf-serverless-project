const tableName = 'HYFAlumnis-PersonsTable-ADUBDS3KB7RW';
const dynamodb = require('aws-sdk/clients/dynamodb');
const docClient = new dynamodb.DocumentClient();

exports.getByIdHandler = async (event) => {
  if (event.httpMethod !== 'GET') {
    throw new Error(`getMethod only accept GET method, you tried: ${event.httpMethod}`);
  }
  console.info('received:', event);
  const id = event.pathParameters.id;
  var params = {
    TableName : tableName,
    Key: { id: id },
  };
  const data = await docClient.get(params).promise();
  const item = data.Item;
 
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers":
      "Content-Type,X-Amz-Date,Authorization,X-Api-Key,x-requested-with",
      "Access-Control-Allow-Origin": "*", // Allow from anywhere
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT,DELETE,PATCH",
    },
    body: JSON.stringify(item)
  };
  console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
  return response;
}