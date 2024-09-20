const js = () => {
    return gulp.src(path.src.js)
        .pipe(plumber(
            notify.onError({
                title: "JS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(gulpif(isProd, babel({
            presets: ['@babel/preset-env']
        })))
        .on('error', function (err) {
            console.error('BABEL ERROR', err);
            this.emit('end');
        })
        .pipe(gulpif(isProd, minify({ ext: { min: '.js' }, noSource: true })))
        .pipe(gulp.dest(path.build.js))
        .pipe(browserSync.stream());
}

export { js };