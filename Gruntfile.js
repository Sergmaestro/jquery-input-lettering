module.exports = function( grunt ) {

	grunt.initConfig( {

		// Import package manifest
		pkg: grunt.file.readJSON( "package.json" ),

		// Banner definitions
		meta: {
			banner: "/*\n" +
				" *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
				" *  <%= pkg.description %>\n" +
				" *  <%= pkg.homepage %>\n" +
				" *\n" +
				" *  Made by <%= pkg.author.name %>\n" +
				" *  Under <%= pkg.license %> License\n" +
				" */\n"
		},

		// Concat definitions
		concat: {
			options: {
				banner: "<%= meta.banner %>"
			},
			dist: {
				src: [ "src/jquery.inputLettering.js" ],
				dest: "dist/jquery.inputLettering.js"
			}
		},

		// Lint definitions
		eslint: {
			target: [ "src/**/*.js" ]
		},

		// Minify definitions
		uglify: {
			dist: {
				src: [ "dist/jquery.inputLettering.js" ],
				dest: "dist/jquery.inputLettering.min.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},

	} );

	grunt.loadNpmTasks( "grunt-contrib-concat" );
	grunt.loadNpmTasks( "grunt-contrib-uglify" );
	grunt.loadNpmTasks( "grunt-eslint" );

grunt.registerTask( "lint", [ "eslint" ] );
grunt.registerTask( "build", [ "concat", "uglify" ] );
grunt.registerTask( "default", [ "eslint", "concat", "uglify" ] );
};
