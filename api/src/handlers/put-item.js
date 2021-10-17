const dynamodb = require('aws-sdk/clients/dynamodb');
const docClient = new dynamodb.DocumentClient();

const tableName = process.env.personsTable;

exports.putPersonsHandler = async (event) => {
    if (event.httpMethod !== 'POST') {
        throw new Error(`postMethod only accepts POST method, you tried: ${event.httpMethod} method.`);
    }
    console.info('received:', event);

    const body = JSON.parse(event.body)

    var params = {
        TableName : tableName,
        Item: {
            id: body.id,
            fullname: body.fullname,
            classNr: body.classNr,
            position: body.position,
            company: body.company,
            aboutJob: body.aboutJob,
            interviewRounds: body.interviewRounds,
            assignment: body.assignment,
            imageUrl: "?"
        }
    };

    const result = await docClient.put(params).promise();

    const response = {
        statusCode: 200,
        body: JSON.stringify(body)
    };

    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
}
