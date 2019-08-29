# technomad_ejs, a static site generator

technomad_ejs is a simple, straightforward static site generator that uses ejs to allow powerful html templating.

### Installation

```sh
npm i technomad_ejs -S
```

Then inside your `package.json` file, add the following script:

```
"scripts": {
  "build": "technomad_ejs build
}
```

### Usage

technomad_ejs expects that you have a folder called `views` in your project directory, which contains all your view files. Each of these files should use the `.ejs` extension. For each file inside your `views` folder, technomad_ejs will output a compiled version of it to an `out` folder in the root of your project. Any file that begins with an underscore, technomad_ejs will not compile. All folders other than `views` and `out` will be copied into the `out` folder when technomad_ejs builds your site.

You can take full advantage of all of [the features of ejs](https://github.com/mde/ejs) when using technomad_ejs.

For example, if you have the following folder structure:

```
myproject
  - assets/
  - views
    - index.ejs
    - about.ejs
    - _header.ejs
```

technomad_ejs will compile it to the `out` folder as such:

```
myproject
  - assets/
  - views/
  - out
    - assets/
    - index.html
    - about.html
```

### Loading Custom Data

In the future, you will be able to load data from any source into technomad_ejs, and it will be available in all of your templates. We will update this readme when this feature is supported.
