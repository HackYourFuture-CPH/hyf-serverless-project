/**
 * A Lambda function that logs the payload received from SNS.
 */
exports.snsPayloadLoggerHandler = async (event, context) => {
  // All log statements are written to CloudWatch by default. For more information, see
  // https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-logging.html
  const postData = async (ItemsToPost) => {
    const payload = {
      attachments: [
        {
          title: "inventory-price-analyzer.js",
          author_name: "Keerthi",
          text: "Keerthi is testing",
          color: "#22FF55",
        },
      ],
    };
    /*  console.log(Payload); */
    await axios.post(
      "https://hooks.slack.com/services/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",
      payload
    );
  };
  postData();
  console.info(event);
};
