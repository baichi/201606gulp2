//导入gulp模块
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
gulp.task('copy',function(){
    gulp.src('./src/**/*')
        .pipe(gulp.dest('./dist')).pipe($.connect.reload());
});

gulp.task('watch',function(){
    gulp.watch('./src/index.html',['copy']);
});

gulp.task('server',function(){
    $.connect.server({
        root:'./dist',
        port:8080,
        livereload:true
    })
});
gulp.task('default',['server','watch']);