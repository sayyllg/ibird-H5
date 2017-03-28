'use strict';
let gulp = require('gulp');//引入gulp
let del = require('del');//引入删除文件
let imagemin = require('gulp-imagemin');
let pngquant = require('imagemin-pngquant');
let htmlmin = require('gulp-htmlmin');
let $ = require('gulp-load-plugins')();
gulp.task('styles:sass', ()=>{
  var sass = require('gulp-ruby-sass');
  var concat = require('gulp-concat');
   sass(['src/scss/*.scss'],{
        style: 'expanded',
        precision: 10
        })
    .on('error', console.error.bind(console))
    .pipe(gulp.dest('build/styles'))
    .pipe(gulp.dest('src/styles'))
    .pipe($.size({title:'build/styles'}));
});
gulp.task('styles', ['styles:sass']);
gulp.task('html', function() {
  return gulp.src('src/public/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build/'));
});
gulp.task('mini',function(){
	return gulp.src('src/images/**/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('build/images'));
})
gulp.task('default',["styles"],function(){
  gulp.watch(['src/scss/*.scss'],['styles:sass']);
});






