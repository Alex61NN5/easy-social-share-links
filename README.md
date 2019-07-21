# 🚀 Easy Social Share Links

![npm version](https://img.shields.io/npm/v/easy-social-share-links.svg)
![bundlephobia](https://img.shields.io/bundlephobia/min/easy-social-share-links.svg)
![twitter](https://img.shields.io/twitter/follow/alexginns.svg?style=social)

> Easily generate share links for Facebook, Twitter, LinkedIn and Email!

## Demo 🏄‍♂️

https://easysocialsharelinks.netlify.com/

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

The method takes 2 arguments with an optional third and fourth.

First argument is the provider, the options are `'fb', 'tw', 'li', 'em'`.

```
fb = facebook
tw = twitter
li = linkedIn
em = email
```

Second argument is the link you wish to share eg. `'https://github.com/Alex61NN5/easy-social-share-links'`

Third Argument is optional and will only work when using `'tw'` and `'em'` which is `text` this is some text you can write before your tweet with the share link when using `'em'` text becomes the subject of the email.

Fourth Argument is optional and will only work when using `'em'` which is `emailBody`, this is some text you can write before the link is shared in the email.

### Output

Examples:

```
// Facebook share
shareLink('fb', 'https://github.com');
'https://www.facebook.com/sharer/sharer.php?u=https://github.com'

// Twitter share no text
shareLink('tw', 'https://github.com');
'https://twitter.com/intent/tweet?url=https://github.com'

// Twitter share with text
shareLink('tw', 'https://github.com', 'Check out this awesome site!');
'https://twitter.com/intent/tweet?url=https://github.com&text=Check out this awesome site!'

// LinkedIn share
shareLink('li', 'https://github.com')
'https://www.linkedin.com/shareArticle?mini=true&url=https://github.com'

// email share no subject or body
shareLink('em', 'https://github.com')
'mailto:&body=https://github.com'

// email share with subject
shareLink('em', 'https://github.com', 'Check out this website')
'mailto:?subject=Check out this website&body=https://github.com'

// email share with subject and body
shareLink('em', 'https://github.com', 'Check out this website', 'no really check it out heres the link')
'mailto:?subject=Check out this website&body=no really check it out heres the link https://github.com'
```

## Support 💬

- 🐞 For Bug Reports and Enhancements please use the [issues section](https://github.com/Alex61NN5/easy-social-share-links/issues)

- 🕊️ To contact me directly you can find me via my [twitter](https://twitter.com/alexginns)
