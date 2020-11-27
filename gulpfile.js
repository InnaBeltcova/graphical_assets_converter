var gulp = require('gulp');
var svg2png = require('gulp-svg2png');

gulp.task('svg2png', function () {
  var w = process.argv[3] == undefined ? 16 : process.argv[3].replace('--', '');
  var h = process.argv[4] == undefined ? 16 : process.argv[4].replace('--', '');
  console.log("w" + w + "h" + h);
  gulp.src('./icons/**/*.svg')
    .pipe(svg2png({width: w, height: h}))
    .pipe(gulp.dest('./build'));
});
