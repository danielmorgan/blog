module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		clean: {
			build: ['build']
		},

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
		},

		'file-creator': {
			'CNAME': {
				'build/CNAME': function(fs, fd, done) {
					fs.writeSync(fd, 'danielmorgan.co.uk');
					done();
				}
			}
		},

		watch: {
			options: {
				livereload: true
			},
			livereload: {
				files: ['index.html']
			},
			wintersmith: {
				files: ['config.json', './templates/**', './contents/**'],
				tasks: ['clean', 'wintersmith:build']
			}
		}

	});


	require('load-grunt-tasks')(grunt);

	grunt.registerTask('test', ['clean', 'wintersmith:build', 'wintersmith:preview']);
	grunt.registerTask('build', ['clean', 'wintersmith:build']);
	grunt.registerTask('deploy', ['clean', 'wintersmith:build', 'file-creator', 'gh-pages']);

};