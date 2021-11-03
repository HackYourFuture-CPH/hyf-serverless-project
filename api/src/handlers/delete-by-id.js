const tableName = "HYFAlumnis-PersonsTable-ADUBDS3KB7RW";

const dynamodb = require("aws-sdk/clients/dynamodb");
const docClient = new dynamodb.DocumentClient();

exports.deleteByIdHandler = async (event) => {
    if (event.httpMethod !== 'DELETE') {
        throw new Error(`deleteMethod only accept DELETE method, you tried: ${event.httpMethod}`);
    }
    console.info('received:', event);
    const id = event.pathParameters.id;
    var params = {
        TableName: tableName,
        Key: { id: id },
    };
    const data = await docClient.delete(params).promise();
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
