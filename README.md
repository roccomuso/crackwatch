# crackwatch [![NPM Version](https://img.shields.io/npm/v/crackwatch.svg)](https://www.npmjs.com/package/crackwatch)  [![Dependency Status](https://david-dm.org/roccomuso/crackwatch.png)](https://david-dm.org/roccomuso/crackwatch) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Node.js unofficial client to Crackwatch.com API

[Crackwatch.com](https://crackwatch.com) keeps you updated with the crack status of the games you follow.

## Install

    npm install --save crackwatch

## Usage

```javascript
const {getCracks, getGames} = require('crackwatch')

getCracks()
  .then(console.log)
  .catch(console.error)

/*
[ { title: 'Ys VIII Lacrimosa of Dana',
    sceneGroup: 'CODEX',
    date: 'Fri, 27 Apr 2018 11:11:00 +0000',
    image: 'https://cdn.crackwatch.com/18a28da6-3f6f-4093-a06b-d33028ddcff3/Ys.VIII.Lacrimosa.of.Dana.Update.v20180426-CODEX.png',
    version: 'v20180426' },
  { title: 'Dynasty Warriors 9',
    sceneGroup: 'CODEX',
    date: 'Fri, 27 Apr 2018 11:11:00 +0000',
    image: 'https://cdn.crackwatch.com/c0b2992f-0c53-4072-9946-6a87b214218b/Dynasty.Warriors.9.Update.v1.07-CODEX.png',
    version: 'v1.07' },

...
]
*/

getCracks({page: 2})
  .then(console.log)
  .catch(console.error)

/*
[ { groupName: 'PLAZA',
    date: '2020-02-08T11:14:38+01:00',
    title: 'Brass Brigade Battle of Arnhem',
    size: '653 MB',
    image: 'https://b2.crackwatch.com/file/crackwatch-temp/kvyw14wge.jpg',
    version: undefined
  },
    ...
*/

getGames()
  .then(console.log)
  .catch(console.error)

/*
[ { title: 'Basingstoke',
    link: 'https://crackwatch.com/game/basingstoke',
    pubDate: 'Fri, 27 Apr 2018 23:08:00 +0000',
    image: 'https://cdn.crackwatch.com/42a7157b-656c-4dcb-b906-ea172a7b9da4/-/crop/382x215/39,0/-/resize/552x310/',
    imageCover: 'https://b2.crackwatch.com/file/crackwatch/Cover.jpeg',
    imagePoster: 'https://cdn.crackwatch.com/bc48469c-3846-4625-a576-d886c98657b6/-/crop/400x533/0,0/-/resize/356x474/',
    releaseDate: 'Fri, 27 Apr 2018 23:08:00 +0000',
    crackDate: 'Fri, 27 Apr 2018 23:08:00 +0000',
    isAAA: 'undefined',
    isHot: 'undefined',
    NFOsCount: '4',
    commentsCount: 'undefined',
    ratings: '-1',
    followersCount: 'undefined',
    OriginalPrice: '25.49',
    BestPrice1: 'undefined',
    OriginalPlatform: 'steam',
    BestPlatform1: 'undefined',
    DRM1: 'steam',
    DRM2: 'undefined',
    SceneGroup1: 'DEFA',
    SceneGroup2: 'undefined',
    Steam: 'https://store.steampowered.com/app/336940/Basingstoke/?cc=us',
    Origin: 'undefined',
    IMDB: 'undefined',
    updatedAt: 'Sat, 28 Apr 2018 23:30:37 +0000' },
    ...
]
*/

getGames({page: 1, is_aaa: true})
  .then(console.log)
  .catch(console.error)

/*
[ { _id: 'LvoDf7zbFnxEE4cKX',
    title: 'Darkborn',
    slug: 'darkborn',
    releaseDate: '2020-12-31T10:00:00-05:00',
    protections: [ 'steam' ],
    versions: [],
    image: 'https://b2.crackwatch.com/file/crackwatch-temp/ebdettti5.jpg',
    imagePoster: 'https://b2.crackwatch.com/file/crackwatch-temp/xc42h5338.jpg',
    isAAA: true,
    NFOsCount: 0,
    commentsCount: 63,
    followersCount: 1845,
    groups: [],
    updatedAt: '2020-02-14T00:09:03.629Z',
    url: 'https://crackwatch.com/game/darkborn'
  },
  {
    _id: 'Yxdw56pLsp9APhy2M',
    isAAA: true,
    NFOsCount: 0,
    commentsCount: 41,
    followersCount: 1569,
    protections: [ 'steam' ],
    versions: [],
    groups: [],
    updatedAt: '2020-02-14T00:09:47.672Z',
    title: 'Witchfire',
    slug: 'witchfire',
    releaseDate: '2020-12-31T02:00:00+02:00',
    imagePoster: 'https://b2.crackwatch.com/file/crackwatch/posters/witchfire-poster-crack.jpeg',
    image: 'https://b2.crackwatch.com/file/crackwatch/games/witchfire-crack.jpeg',
    url: 'https://crackwatch.com/game/witchfire'
  },
    ...
]
*/



```

### Methods

More info on the available API on [crackwatch API page](https://crackwatch.com/api).

- `getCracks()`: Get latest cracks list. It's equivalent a `getCracks({page: 0})`.
- `getGames()`: Get latest games list. It's equivalent a `getGames({page: 0})`.

Requests should be limited to a rate of 1 per second.

### Options

The default values are shown after each option key.

```javascript

{
    page: 0,                   //The API sends you 30 games per page. Use page=0 for the first 30 games, page=1 for the nest 30 games, and so on...
    sort_by: "release_date",   // Use sort_by=release_date to get games ordered by release date or sort_by=crack_date to get games ordered by crack date.
    is_sort_inverted: (none),  // Use is_sort_inverted=true to invert the order of the list of games.
    is_aaa: (none),            // Use is_aaa=true to only display popular AAA games. Use is_aaa=false to only display indie games.
    is_released: (none),       // Use is_released=true to only display released games. Use is_released=false to only display upcoming games.
    is_cracked: (none),         // Use is_cracked=true to only display cracked games. Use is_cracked=false to only display uncracked games.
}


```

# Author

Rocco Musolino ([@roccomuso](https://twitter.com/roccomuso))

# License

MIT
