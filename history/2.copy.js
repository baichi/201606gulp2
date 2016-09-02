//导入gulp模块
var gulp = require('gulp');
/**
 * 生成的文件的路径=
 *  dest指定的目录 +  src里面通配符开始出现的路径
 */
gulp.task('copy',function(){
   //src指定要输入的文件
   // src/js/1.js
   gulp.src('./src/**/*.js')
       //pipe以管道的方式流向哪里
       .pipe(gulp.dest('./dist'));//指定要保存的路径
});