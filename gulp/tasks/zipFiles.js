const zipFiles = (done) => {
    del.sync([`${path.buildFolder}/*.zip`]);
    return gulp.src(`${path.buildFolder}/**/*.*`, {})
        .pipe(plumber(
            notify.onError({
                title: "ZIP",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(zip(`${gulpPath.basename(gulpPath.resolve())}.zip`))
        .pipe(gulp.dest(path.buildFolder));
}

export { zipFiles };