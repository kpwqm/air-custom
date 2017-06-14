var version = "1.0.0"
var gulp = require('gulp');
var spriter = require('gulp-css-spriter');
var concat = require('gulp-concat');

var runSequence = require('gulp-run-sequence');
const jsPath = './static/js/';
const cssPath = './static/css/';
const imgPath = './static/images/';
const distPath = './dist/'

gulp.task("css", function(){
  return gulp.src(cssPath + "*.css")
    .pipe(spriter({
      'spriteSheet': distPath + 'images/sprite-' + version + '.png',
      'pathToSpriteSheetFromCSS': '../images/sprite-' + version + '.png'
    }))
    .pipe(gulp.dest(distPath + 'css/'))
})
gulp.task("js", function(){
  return gulp.src(jsPath + "module/*.js")
    .pipe(concat("app.js"))
    .pipe(gulp.dest(distPath + 'js/'))
})
gulp.task("gulpCommonImg", function(){
  return gulp.src('./static/images/**/*.*')
    .pipe(gulp.dest(distPath + '/images/'))
});
gulp.task("cpJs", function(){
  return gulp.src('./static/js/*.*')
    .pipe(gulp.dest(distPath + '/js/'))
})


gulp.task('air-custom', function (cb){
  runSequence(['css','gulpCommonImg'], 'js', 'cpJs', cb)
})
gulp.task('air-custom-watch',function(cb){
  var watcher = gulp.watch('./static/**/*.*', ['air-custom']);
  watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
});