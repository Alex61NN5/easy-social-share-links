# 🚀 Easy Social Share Links
![npm version](https://img.shields.io/npm/v/easy-social-share-links.svg)
![bundlephobia](https://img.shields.io/bundlephobia/min/easy-social-share-links.svg)
![npm downloads](https://badgen.net/npm/dt/easy-social-share-links)
![twitter](https://img.shields.io/twitter/follow/alexginns.svg?style=social)

> Easily generate share links for Facebook, Twitter, LinkedIn

## Features 🔥

- Less than 2kb! (under 1kb minified)
- Zero Dependencies
- Easy to use! 💪

## Install 🔮

```
$ npm install easy-social-share-links
```

or

```
$ yarn add easy-social-share-links
```

## Usage 💻

```
import shareLink from "easy-social-share-links"

shareLink('fb', 'https://github.com/Alex61NN5/easy-social-share-links');
```

### Input 

The method takes 2 arguments and an optional third.

First argument is the provider the options are `'fb', 'tw', 'li'`

```
fb = facebook
tw = twitter
li = linkedIn
```

Second argument is the link you wish to share eg. `'https://github.com/Alex61NN5/easy-social-share-links'`

Third Argument is optional and will only work when using `'tw'` which is `text` this is some text you can write before your tweet with the share link

### Output

Examples:

```
shareLink('fb', 'https://github.com') => 'https://www.facebook.com/sharer/sharer.php?u=https://github.com'

shareLink('tw', 'https://github.com') => 'https://twitter.com/intent/tweet?url=https://github.com'

shareLink('tw', 'https://github.com', 'Check out this awesome site!') => 'https://twitter.com/intent/tweet?url=https://github.com&text=Check out this awesome site!'

shareLink('li', 'https://github.com') => 'https://www.linkedin.com/shareArticle?mini=true&url=https://github.com'
```

## Support 💬
- 🐞 For Bug Reports and Enhancements please use the [issues section](https://github.com/Alex61NN5/easy-social-share-links/issues)

- 🕊️ To contact me directly you can find me via my [twitter](https://twitter.com/alexginns) 
