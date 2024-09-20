const resources = () => {
    return gulp.src(path.src.resources)
        .pipe(gulp.dest(path.build.resources))
}

export { resources };