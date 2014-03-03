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

		'gh-pages': {
			options: {
				base: 'build'
			},
			src: ['**']
		}

	});

	grunt.loadNpmTasks('grunt-wintersmith');
	grunt.loadNpmTasks('grunt-gh-pages');

	grunt.registerTask('default', ['wintersmith:build', 'wintersmith:preview']);
	grunt.registerTask('deploy', ['wintersmith:build', 'gh-pages']);

};