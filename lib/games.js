const fetch = require('node-fetch')
const https = require('https')
const agent = new https.Agent({
  rejectUnauthorized: false
})

const GAMES_ENDPOINT = `https://api.crackwatch.com/api/games`

function getGames () {
  return fetch(GAMES_ENDPOINT, {agent})
          .then(res => res.json())
          .then(res => Promise.resolve(res))
}

module.exports = getGames
