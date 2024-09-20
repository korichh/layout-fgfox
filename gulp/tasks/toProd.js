const toProd = (done) => {
    isProd = true;
    done();
};

export { toProd };