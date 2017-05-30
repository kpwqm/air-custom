var gulp = require('gulp');
var spriter = require('gulp-css-spriter');

gulp.task("css", function(){
  var timestamp = +new Date();

  return gulp.src("./static/css/*.css")
    .pipe(spriter({
      'spriteSheet': './dist/images/sprite' + timestamp + '.png',
      'pathToSpriteSheetFromCSS': '../images/sprite' + timestamp + '.png'
    }))
    .pipe(gulp.dest('./dist/'))
})

gulp.task('css-watch',function(cb){
  var watcher = gulp.watch('./static/css/`*.*', ['css']);
  watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
});