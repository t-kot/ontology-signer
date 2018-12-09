const functions = require('firebase-functions');
const axios = require('axios')

exports.getOntid = functions.https.onRequest(async(request, response) => {
  try {
    const url = 'https://app.ont.io/S1/api/v1/ontpass/thirdparty/ontid'
    const res = await axios.get(url)
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Headers', 'Content-Type')
    response.header('Content-Type','application/json')
    response.send(res.data)
  } catch (e) {
    console.error(e)
  }
})
