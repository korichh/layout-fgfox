const css = () => {
    return gulp.src(path.src.scss, { sourcemaps: !isProd })
        .pipe(plumber(
            notify.onError({
                title: "SCSS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(mainSass())
        .pipe(autoprefixer({
            cascade: false,
            grid: true,
            overrideBrowserslist: ["last 5 versions"]
        }))
        .pipe(groupMedia())
        .pipe(gulpif(isProd, cleanCSS({
            level: 2
        })))
        .pipe(gulp.dest(path.build.css, { sourcemaps: '.' }))
        .pipe(browserSync.stream());
};

const cssBackend = () => {
    return gulp.src(path.src.scss)
        .pipe(plumber(
            notify.onError({
                title: "SCSS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(mainSass())
        .pipe(autoprefixer({
            cascade: false,
            grid: true,
            overrideBrowserslist: ["last 5 versions"]
        }))
        .pipe(groupMedia())
        .pipe(gulp.dest(path.build.css))
        .pipe(browserSync.stream());
};

export { css, cssBackend };