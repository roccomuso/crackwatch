const fetch = require('node-fetch')
const https = require('https')
const agent = new https.Agent({
  rejectUnauthorized: false
})

const queryGen = require("./utils/queryGenerator");

const GAMES_ENDPOINT = `https://api.crackwatch.com/api/games`

function getGames () {

  let parameters = arguments[0] || {};

  return fetch(GAMES_ENDPOINT+queryGen(parameters), {agent})
          .then(res => res.json())
          .then(res => Promise.resolve(res))
}

module.exports = getGames
