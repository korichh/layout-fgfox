const html = () => {
    return gulp.src(path.src.html)
        .pipe(fileInclude({
            prefix: '@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(path.build.html))
        .pipe(browserSync.stream());
}

export { html };