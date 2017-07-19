#



## Installation

### 1 create and initalize (3) accounts
  1. [github.com](github.com)
      1. create new account
      1. fork [technomad_spike_datocms](www.github.com/wommy/technomad_spike_datocms)
  1. [netlify.com](netlify.com)
      1. create account using github account
      1. create new site from `wommy/technomad_spike_datocms` repo
          1. build command: `spike clean && spike compile`
            1. output directory: `public`
  1. [datoCMS.com](datoCMS.com)
      1. create account
      1. create first site
          1. `name:` whatever you want
              1. `static site generator: other`
              1. `project name:` whatever you want

### 2 link datoCMS & netlify
  1. api token
      1. netlify `edit` build environment variables
          1. `key: dato`
            1. `value:` paste from `datoCMS / API tokens / Read-only API token`
  1. build hook
      1. datocms / deployment settings / production
          1. netlify
          1. authorize
          1. select site
          1. save settings

### 3 create dato models & fields
  1. create (2) models
      1. `model: page` <= needs to be exact
      1. `model: post` <= needs to be exact
  1. give `each` model (2) fields:
      1. `model: post`
          1. `text` => `single line entry`
              1. `field: title` <= needs to be exact
              1. `validations` == `required`, `unique field`
          1. `text` => `multiple paragraph text`
              1. `field: content` <= needs to be exact
              1. `validations` == `required`
      1. `model: page`
          1. `text` => `single line entry`
              1. `field: title` <= needs to be exact
              1. `validations` => `required`, `unique field`
          1. `text` => `multiple paragraph text`
              1. `field: content` <= needs to be exact
              1. `validations` => `required`

### 4 populate & publish
  1. populate (2)`page`s & (1)`post`
      1. `page:`
          1. `title: about` <= needs to be exact
          1. `content:` whatever you want on your 'about' page
      1. `page:`
          1. `title: contact` <= needs to be exact
          1. `content: `whatever you want on your 'contact' page
      1. `post:`
          1. `title:` whatever you want as the title of your first blog post, use `-` or `_` instead of spaces
          1. `content:` whatever you want as your first blog post content
  1. publish content
