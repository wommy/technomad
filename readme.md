#



## Setup

note:
`$` denotes a variable that differs for every individual, ex: `$site` is the site name of your choice,
ie: whenever you see a `$` you can use whatever you want

- create `Github` account <https://github.com/>
  - fork [technomad_spike_datocms](https://github.com/wommy/technomad_spike_datocms) (top right corner)
- create `Netlify` account <https://app.netlify.com/signup>; `Github`; `Authorize Netlify`
  - `New site from Git`; `Continuous Deployment`: `Github`; `Authorize Netlify`; `technomad_spike_datocms`
    - build command: `spike clean && spike compile`
    - publish direction: `public`
    - `deploy site`
- create `datoCMS` account <https://www.datocms.com/>
  - `create first site`:
    - static site generator: `other`
    - project name: `$name` <= whatever name you want here
- link `datoCMS & netlify`
  - copy paste `datoCMS` `API token` to `netlify`
    - `datoCMS/Settings/API tokens/Read-only API token` <= copy this
    - `Netlify/$site`
      - `build environment variables`: `edit variables` ( scroll down )
        - key: `dato`
        - value: `'$Read-only API token'` <= paste here
        - `save`
  - create build hook
    - `datoCMS/Settings/Deployment_Settings/Production`
      - `Netlify`
      - `authorize`
      - select `$site`
      - `save settings`
- create `DatoCMS`: `models` and `fields`
  - `DatoCMS/Settings/Models`
    - `add new model` (+ button bottom middle): name: `page`; `save model`
      - `add field` (right middle of page) - `text` - `single line string`
        - Name*: `title`
        - validations: required, unique field
        - `save field`
      - `add field` (right top middle) - `text` - `multiple paragraph text`
        - Name*: `content`
        - validations: required
        - `save field`
    - `add another model`: name: `post`; `save model`
      - `add field`: `text`; `single line string`
        - name*: `title`
        - validations: required, unique field
        - `save field`
      - `add field`: `text`; `multiple-paragraph text`
        - name* `content`
        - validations: required
        - `save field`
- add content to `datoCMS`
  - `content tab` ( bottom right )
    - `pages`
      - `add page`
        - title: `about`
        - content: `$edit me aboots` <= whatever you want goes here
        - `save record`
    - `pages`
      - `add page`
        - title: `contact`
        - content: `$contact page herr`  <= whatever you want goes here
        - `save record`
    - `posts`
      - `add post`
        - title: `my-first-blog-post` <= `-`s and `_` instead of ` ` (spaces)
        - content: `it works!`  <= whatever you want goes here
        - `save record`
- `publish changes` ( top right corner )
