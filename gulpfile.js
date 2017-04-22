var gulp=require('gulp'),
 sass=require('gulp-sass')
 browserSync = require('browser-sync').create()
 cssnano = require('gulp-cssnano')
 useref = require('gulp-useref');
 var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var wiredep = require('wiredep').stream;



//test gulp
gulp.task('hello', function() {
  console.log('Hello Zell');
});

//copy images
gulp.task('imgcopy',function(){
    return gulp.src(['app/img/*.*','app/img/**/*.*'])
    
    .pipe(gulp.dest('dist/img/'))
    
})

//copy fonts
gulp.task('fontcopy',function(){
    return gulp.src(['app/fonts/*.*'])
    
    .pipe(gulp.dest('dist/fonts/'))
    
})

//sass task
gulp.task('sass',function(){
    return gulp.src('app/css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

//broweser sync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

//uglify and minify
gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    //.pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

//watch task
gulp.task('watch', ['browserSync','sass'],function(){
    gulp.watch('app/css/*.scss',['sass']);
    gulp.watch('app/*.html',browserSync.reload)
    gulp.watch('app/js/*.js',browserSync.reload)
})
