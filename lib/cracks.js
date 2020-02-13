const ptt = require('parse-torrent-title')
const fetch = require('node-fetch')
const https = require('https')
const agent = new https.Agent({
  rejectUnauthorized: false
})

const queryGen = require("./utils/queryGenerator");

const CRACKS_ENDPOINT = `https://api.crackwatch.com/api/cracks`

ptt.addHandler(({ title, result }) => {
  const match = title.match(/v(\d+\.)?(\d+\.)?(\*|\d+)/i)
  if (match) {
    result.version = match[0]
  }
})

function getCracks () {

  let parameters = arguments[0] || {};

  console.log(queryGen(parameters));

  return fetch(CRACKS_ENDPOINT+queryGen(parameters), {agent})
          .then(res => res.json())
          .then(cracks => {
            return cracks.map((crack) => {
              let {title, version} = ptt.parse(crack.title)
              return {
                ...crack,
                title,
                version
              }
            })
          })
          .then(intermediateRes => parseCracks(intermediateRes))
          .then(res => Promise.resolve(res))
}

let parseCracks = (cracksMap) => {
  return cracksMap.map((crack) => {
    let title = crack.title
    let type = title.toLowerCase().indexOf('update')
    title = title.slice(0, type > -1 ? type : undefined).trim()
    let v = title.search(/v\d/)
    title = title.slice(0, v > -1 ? v : undefined).trim()
    crack.title = title
    return crack
  })
}

module.exports = getCracks
