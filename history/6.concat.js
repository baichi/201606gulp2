//导入gulp模块
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
gulp.task('concat',function(){
   //读取所有的JS文件，然后合并成一个all.js文件
   gulp.src('./src/js/*.js')
       .pipe($.concat('all.js'))
       .pipe(gulp.dest('./dist/js'))
       //然后进行压缩
       .pipe($.uglify())
       .pipe($.rename('all.min.js'))
       .pipe(gulp.dest('./dist/js'));
});