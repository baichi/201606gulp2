//导入gulp模块
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
gulp.task('less',function(){
   gulp.src('./src/less/*.less')
       .pipe($.less())
       .pipe($.concat('all.css'))
       .pipe(gulp.dest('./dist/css'))
       .pipe($.minifyCss())
       .pipe($.rename('all.min.css'))
       .pipe(gulp.dest('./dist/css'))
});