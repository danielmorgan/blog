
# DanielMorgan.co.uk


## Blog

### Mockup
![danielmorgan.co.uk mockup](http://dl.dropboxusercontent.com/u/2536480/blogmockup.jpg)

### Currently running on:
The default [wintersmith](https://github.com/jnordberg/wintersmith) template


## How to (a personal reminder)

### Test new version locally
Build from source then run a local server.

	grunt test

### Commit changes
Build from source, commit, then push to GitHub.

	grunt build
	git add .
	git commit -am "[COMMIT MESSAGE]"
	git push origin master

### Deploy to live site
Build from source, then commit to gh-pages branch.

	grunt deploy