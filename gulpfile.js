var gulp = require("gulp");
var sass = require("gulp-sass");
var clean = require("gulp-clean-css");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var server = require("gulp-webserver");
//在gulp中创建scss任务，进行scss文件编译
gulp.task("devSass", function() {
        return gulp.src("./src/scss/*.scss")
            .pipe(sass())
            .pipe(gulp.dest("./src/css/"))
    })
    //在gulp中新建js任务编译js文件，合并所有js，并且压缩
gulp.task("devJs", function() {
    return gulp.src("./src/js/*.js")
        .pipe(concat("all.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./src/js/"))
})

//在gulp中创建watch任务，进行js，css文件监听，自动执行对应的任务
gulp.task("watch", function() {
        gulp.watch(["./src/css/*.css", "./src/js/*.js"], gulp.series("devSass", "devJs"))
    })
    //在gulp中使用browserSync启动服务，并且提供自动刷新功能
gulp.task("browserSync", function() {
    return gulp.src("./src")
        .pipe(server({
            port: 8090,
            open: true,
            livereload: true
        }))
})

//压缩css
gulp.task("minCss", function() {
        return gulp.src("./src/css/index.css")
            .pipe(clean())
            .pipe(gulp.dest("./src/minCss/"))
    })
    //在gulp中创建default任务，默认执行browserSync服务，js，css，watch任务
gulp.task("default", gulp.series("devSass", "browserSync", "devJs", "minCss", "watch"));