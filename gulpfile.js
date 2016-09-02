//导入gulp模块
var gulp = require('gulp');
//桔子
gulp.task('orange',function(){
   console.log('桔子');
});

//锅
gulp.task('pan',function(cb){
  setTimeout(function(){
     console.log('锅');
     cb();
  },3000);
});

//锅
gulp.task('炒',['orange','pan'],function(){
   console.log('炒')
});
