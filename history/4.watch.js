//导入gulp模块
var gulp = require('gulp');

/**
 * watch 监控文件的变化，当文件发生变化之后执行对应的任务
 * 监控src/index.html变化 ，当它发生变化 之后把它拷贝到dist目录下
 */

gulp.task('copy',function(){
    gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch',function(){
    //当源文件发生变化后，执行对应的任务
    gulp.watch('./src/index.html',['copy']);
});
