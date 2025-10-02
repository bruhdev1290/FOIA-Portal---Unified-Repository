# Development

## Prerequisites (ddev)

* [DDEV](https://ddev.readthedocs.io/en/stable/)


## Prerequisites (local)

* [Ruby](https://www.ruby-lang.org/en/) 2.3.4
* [Bundler](https://bundler.io/)

You can use [rvm](https://rvm.io/) or [rbenv](https://github.com/rbenv/rbenv) to manage
multiple Ruby versions.

Once you've got Ruby installed, install bundler.

    $ gem install bundler


## Setup (ddev)

Build/start the containers. This will run the dev-server.js and webpack in watch mode in two PM2 services. You can view the site: https://foia.gov.ddev.site/

    $ ddev start

View webpack/jekyll logs, or status:

    $ ddev pm2 logs
    $ ddev pm2 ls

Run tests (everything but cucumber tests are working):

    $ ddev make test

To preview a production build, stop the dev webpack service and do a prod build. This will update https://foia.gov.ddev.site/

    $ ddev pm2 stop webpack
    $ ddev make build

To return to development:

    $ ddev pm2 start webpack

**Tip:** With this setup, do not use `make` outside the container, as this will lead to permissions problems inside.

## Setup (local)

Install the dependencies.

    $ bundle install
    $ npm install

Build the site.

    $ make build

Run the tests.

    $ make test

Run the site locally.

    $ make serve

And open your browser to http://localhost:4000/.

See more in the [README.md](www.foia.gov/README.md).

To build for production, set the `NODE_ENV` and `APP_ENV` environment variables.

    $ NODE_ENV=production APP_ENV=production make build


## Dev Environment

The `make serve` command will spin up a dev environment using port `4000` by running Webpack and node in parallel. 

Webpack will then run with the watch flag enabled using the `webpack.config.dev.js` config file.

### Webpack Watch

Webpack detects changes in the `js` directory and uses the new command `build.reload` to quickly rebuild the site using Jekyll.

Webpack cannot automatically detect changes in the `www.foia.gov/_sass` folder since SASS components are never imported from `js` files.

This is why `WebpackWatchPlugin` is used to add the SASS folders to Webpack watch.

The `WatchRun` hook then runs the `make build.reload` command every time a change is detected in the SCSS files.  The site is still recompiled using Jekyll instead of Webpack.

### Jekkyl Details 

Jekyll has an Auto-regeneration feature, but it does not watch and recompile the `js` folder.  If you're only working on SCSS files then the `make build.dev` command can be used to start Jekyll with the `--watch --incremental` flags.

However, adding the `--incremental` flag to the `make build.reload` script interfered with the compiler hook and caused Jekyll to crash.

There is no need for sass loaders in the webpack config file since Jekyll is rebuilding the JS and SCSS.

### Improvements

`MiniCssExtractPlugin` could be used in the future to extract CSS into separate files with source maps.

The entry point for the SCSS should be placed in `www.foia.gov/_sass/main.scss` if the [Mini Css Extract Plugin](https://webpack.js.org/plugins/mini-css-extract-plugin/) is ever used.

Instead of the current location in `www.foia.gov/foia-style.scss`.  This will allow Webpack to process the SCSS instead of Jekyll.

Webpack's `sass-loader` has many options such as advanced source maps and compression which can further speed up development.

Webpack can also detect changes to and recompile other assets such as images, fonts and SVG files.

### Type-check the Wizard app

```
npx tsc --watch --project js/wizard.tsconfig.json
```
