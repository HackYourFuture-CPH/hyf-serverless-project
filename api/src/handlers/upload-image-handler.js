// import * as multipart from "parse-multipart"
// import Buffer from 'parse-multipart';
// const multipart = require('parse-multipart');
const multipart = require('parse-multipart');

const Buffer = require('buffer').Buffer;
const AWS = require('aws-sdk');
const s3 = new AWS.S3();
exports.uploadImageHandler = async (event) => {

    // console.info('received:', event);

    // const body = JSON.parse(event.body)
    const body = event.body;
    const bodyBuffer = Buffer.from(event.body);
    const boundary = multipart.getBoundary(event.headers["content-type"]);
    const parts = multipart.Parse(bodyBuffer, boundary);

    if (parts[0]?.filename) console.log(`Original filename = ${parts[0]?.filename}`);
    if (parts[0]?.type) console.log(`Content type = ${parts[0]?.type}`);
    if (parts[0]?.data?.length) console.log(`Size = ${parts[0]?.data?.length}`);

    const params = {
        Bucket: record.s3.bucket.hyf-imageupload-bucket,
        Key: record.s3.object.key
      };

    const response = {
        statusCode: 200,
        // body: JSON.stringify(body)
    };

//     return s3.putObject({
//     Bucket: 'your-bucket',
//     Key: 'file-renamed.png',
//     Body: event.body,
//     Metadata: { 'type': 'png', 'user': 'Priyanka Pandey' }
//   }).catch(err => {
//         console.error("Error calling S3 getObject:", err);
//         return (err);
//       })

//     console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
}
