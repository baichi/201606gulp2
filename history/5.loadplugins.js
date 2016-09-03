//导入gulp模块
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
gulp.task('less',function(){
    gulp.src('./src/less/index.less')
        .pipe($.less())
        .pipe(gulp.dest('./dist/css'));
});