
# DanielMorgan.co.uk


## Blog

### Mockup
![danielmorgan.co.uk mockup](http://dl.dropboxusercontent.com/u/2536480/blogmockup.jpg)

### Currently running on:
The default [wintersmith](https://github.com/jnordberg/wintersmith) template


## How to (a personal reminder)

### Test new version locally
Clean `build/`, build from source then run a local server.

	grunt test

### Work on the website live
Watch for changes to source files then clean `build/` and build from source.

	grunt watch

### Commit changes
Clean `build/`, build from source, commit, then push to GitHub.

	grunt build
	git add .
	git commit -am "[COMMIT MESSAGE]"
	git push origin master

### Deploy to live site
Clean `build/`, build from source, then commit to gh-pages branch.

	grunt deploy