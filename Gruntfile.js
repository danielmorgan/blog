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

		ghpages: {
			options: {
				base: 'build'
			},
			src: ['**']
		}


	});


	require('load-grunt-tasks')(grunt);

	grunt.registerTask('test', ['wintersmith:build', 'wintersmith:preview']);
	grunt.registerTask('build', ['wintersmith:build']);
	grunt.registerTask('deploy', ['wintersmith:build', 'ghpages']);

};