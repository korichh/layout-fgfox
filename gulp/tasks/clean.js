const clean = () => {
    return del(path.buildFolder);
}

export { clean };