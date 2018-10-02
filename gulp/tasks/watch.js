const gulp = require("gulp");
const browserSync = require("browser-sync").create();

const dirs = {
    pug: "./src/**/*.pug",
    sass: "./src/sass/**/*.scss",
    js: "./src/js/**/*.js"
}

gulp.task("watch", function() {
    
    browserSync.init({
        server:{
            baseDir: "dist"
        }
    });

    // pug
    gulp.watch(dirs.pug, ["pugChanged"]);

    // css
    gulp.watch(dirs.sass, ["cssInject"]);

    // js
    gulp.watch(dirs.js, ["jsChanged"]);

});


// html
gulp.task("pugChanged", ["pugRender"], () => {
    browserSync.reload();
});

// styles
gulp.task("cssInject", ["styles"], () => {
    gulp.src("./dist/styles.css")
        .pipe(browserSync.stream());
});

// js
gulp.task("jsChanged", ["scripts"], () => {
    browserSync.reload();
});