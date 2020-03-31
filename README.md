# jQuery Input Lettering

## Usage

1. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="dist/jquery.inputLettering.min.js"></script>
	```

3. Call the plugin:

	```javascript
	$("#element").letteringInput({ inputClass: 'letter' });
	```

## Structure

The basic structure of the project is given in the following way:

```
├── demo/
│   ├── index.html
│   └── index_hidden_input.html
├── dist/
│   ├── jquery.inputLettering.js
│   └── jquery.inputLettering.min.js
├── src/
│   └── jquery.inputLettering.js
├── .editorconfig
├── .gitignore
├── .jscsrc
├── .jshintrc
├── Gruntfile.js
└── package.json
```

#### [demo/](https://github.com/jquery-boilerplate/boilerplate/tree/master/demo)

Contains simple demo HTML files.

#### [dist/](https://github.com/jquery-boilerplate/boilerplate/tree/master/dist)

This is where the generated files are stored once Grunt runs.

#### [.editorconfig](https://github.com/jquery-boilerplate/boilerplate/tree/master/.editorconfig)

This file is for unifying the coding style for different editors and IDEs.

> Check [editorconfig.org](http://editorconfig.org) if you haven't heard about this project yet.

#### [.jshintrc](https://github.com/jquery-boilerplate/boilerplate/tree/master/.jshintrc)

List of rules used by JSHint to detect errors and potential problems in JavaScript.

> Check [jshint.com](http://jshint.com/about/) if you haven't heard about this project yet.

#### [Gruntfile.js](https://github.com/jquery-boilerplate/boilerplate/tree/master/Gruntfile.js)

Contains all automated tasks using Grunt.

> Check [gruntjs.com](http://gruntjs.com) if you haven't heard about this project yet.

## Contributing

Check [CONTRIBUTING.md](https://github.com/jquery-boilerplate/boilerplate/blob/master/CONTRIBUTING.md) for more information.

## License

[MIT License](http://mit-license.org/) © Sergei Kuznetsov
