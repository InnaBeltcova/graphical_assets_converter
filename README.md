Useful for UX Designers, Graphic Designers, Developers, and anyone working with graphical assets.

This script converts graphical assets such as icons from SVG to PNG format, to any size that you specify.

How to use:

Check if you have npm installed. If you don't have it you will need to install it.
To check run
```
npm -v
```
npm is distributed with Node.js, which means that when you download Node.js you automatically get npm: https://nodejs.org/en/
Restart your computer after the installation.

To convert SVG to PNG of any size:
```
npm install --save-dev gulp

npm install --save-dev gulp-cli

npm install --save-dev gulp-svg2png

npm install --save-dev svg2png

 ./node_modules/gulp/bin/gulp.js svg2png --36 --36
 ```
(the last two numbers - dimensions of your new PNG icon)
