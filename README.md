# crackwatch [![NPM Version](https://img.shields.io/npm/v/crackwatch.svg)](https://www.npmjs.com/package/crackwatch)  [![Dependency Status](https://david-dm.org/roccomuso/crackwatch.png)](https://david-dm.org/roccomuso/crackwatch) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Node.js unofficial client to Crackwatch.com API

[Crackwatch.com](https://crackwatch.com) is keeps you updated with the crack status of the games you follow.

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

```

### Methods

More info on the available API on [crackwatch API page](https://crackwatch.com/api).

- `getCracks()`: Get latest cracks list.
- `getGames()`: Get latest games list.

Requests should be limited to a rate of 1 per second.

# Author

Rocco Musolino ([@roccomuso](https://twitter.com/roccomuso))

# License

MIT
