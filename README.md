# INIT Phantomas

A plugin for [INIT](http://use-init.com/) using [grunt-phantomas](https://github.com/stefanjudis/grunt-phantomas/) to minimize your HTML.

[![devDependency Status](https://david-dm.org/init/init-htmlmin/dev-status.png)](https://david-dm.org/use-init/init-phantomas#info=devDependencies)

## Installation
You can add this plugin to INIT by copying over the file `config/phantomas.js` to `tasks/options` and run

	npm install --save-dev grunt-phantomas

in your main project's root directory.

You need to add an object in your `config.js` file called `htmlmin` to describe the files to be minimized:

	phantomas: {
		reports: 'reports/phantomas/'
	}

Also you might want to set up a dedicated task for it in your `Gruntfile.js`:

	// Performance measurement task
	grunt.registerTask('performance', ['phantomas:test']);


## Contribute
Please help making this project better and [contribute](CONTRIBUTING.md) with your knowledge.

## Development
This package is developed as part of the [INIT project](https://github.com/use-init).

## License
Please be aware of the licenses of each component we use in this project. Everything else that has been developed by the contributions to this project is under [MIT License](LICENSE.md).
