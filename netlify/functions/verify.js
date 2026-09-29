# netlify-functions-verify.js
exports.handler = async (event) => {
  const key = event.queryStringParameters?.key;

  if (!key) {
    return {
      statusCode: 400,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        success: false,
        message: "Thiếu key"
      })
    };
  }

  const valid = /^KEY-[A-F0-9]{16}$/i.test(key);

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({
      success: valid,
      message: valid
        ? "Key hợp lệ"
        : "Key không hợp lệ"
    })
  };
};
