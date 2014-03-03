module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		wintersmith: {
			build: {
				options: {
					action: 'build',
					config: './config.json'
				}
			},
			preview: {
				options: {
					action: 'preview',
					config: './config.json'
				}
			}
		},

		buildGhPages: {
			production: {
				options: {
					dist: "build"
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-build-gh-pages');
	grunt.loadNpmTasks('grunt-wintersmith');

	grunt.registerTask('default', ['wintersmith:build', 'buildGhPages']);

};