exports.uploadImageHandler = async (event) => {

    console.info('received:', event);

    const body = JSON.parse(event.body)


    const response = {
        statusCode: 200,
        body: JSON.stringify(body)
    };

    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
}
