/**
 * @type {import('aws-lambda').APIGatewayProxyHandler}
 */
module.exports.hello = async function (event, _context, callback) {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Go Serverless v1.0! Your function executed successfully!",
          input: event,
        },
        null,
        2
      ),
    };
  } catch (/** @type {any} */ error) {
    return callback(error);
  } finally {
    // close handlers
  }
};
