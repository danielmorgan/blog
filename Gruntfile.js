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
	grunt.loadNpmTasks('grunt-git');

	grunt.registerTask('test', ['wintersmith:build', 'wintersmith:preview']);
	grunt.registerTask('build', ['wintersmith:build']);
	grunt.registerTask('deploy', ['wintersmith:build', 'gh-pages']);

};