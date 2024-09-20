const img = () => {
    return gulp.src(`${path.src.img}/**/*.{jpg,jpeg,png}`)
        .pipe(gulpif(isProd, imagemin([
            imagemin.mozjpeg({
                quality: 80,
                progressive: true
            }),
            imagemin.optipng({
                optimizationLevel: 2
            }),
        ])))
        .pipe(gulp.dest(path.build.img))
};

const svgImg = () => {
    return gulp.src(`${path.src.img}/**/*.svg`)
        .pipe(
            svgmin({
                js2svg: {
                    pretty: true,
                },
            })
        )
        .pipe(replace('&gt;', '>'))
        .pipe(gulp.dest(path.build.img));
}

export { img, svgImg };