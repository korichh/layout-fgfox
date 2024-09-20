const srcFolder = './src';
const buildFolder = './docs';

const path = {
    src: {
        html: `${srcFolder}/html/*.html`,
        scss: `${srcFolder}/scss/*.scss`,
        js: `${srcFolder}/js/*.js`,
        img: `${srcFolder}/img`,
        resources: `${srcFolder}/resources/**/*`,
    },
    build: {
        html: `${buildFolder}/`,
        css: `${buildFolder}/css/`,
        js: `${buildFolder}/js/`,
        img: `${buildFolder}/img/`,
        resources: `${buildFolder}/`,
    },
    watch: {
        html: `${srcFolder}/html/**/*.html`,
        scss: `${srcFolder}/scss/**/*.scss`,
        js: `${srcFolder}/js/**/*.js`,
        img: `${srcFolder}/img`,
        resources: `${srcFolder}/resources/**/*`,
    },
    srcFolder: srcFolder,
    buildFolder: buildFolder,
};

export default path;