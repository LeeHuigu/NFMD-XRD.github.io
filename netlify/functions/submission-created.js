
exports.handler = async (event) => {
  console.log('폼 제출 데이터:', JSON.parse(event.body).payload.data);
  return { statusCode: 200, body: 'OK' };
}
