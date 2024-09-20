import browserSync from "browser-sync";
import del from "del";
import gulp from "gulp";
import autoprefixer from "gulp-autoprefixer";
import babel from "gulp-babel";
import cleanCSS from "gulp-clean-css";
import fileInclude from "gulp-file-include";
import groupMedia from "gulp-group-css-media-queries";
import gulpif from "gulp-if";
import imagemin from "gulp-imagemin";
import minify from "gulp-minify";
import notify from "gulp-notify";
import plumber from "gulp-plumber";
import replace from "gulp-replace";
import gulpSass from "gulp-sass";
import svgSprite from "gulp-svg-sprite";
import svgmin from "gulp-svgmin";
import zip from "gulp-zip";
import sass from "sass";
import readFileSync from "fs";
import gulpPath from "path";
import path from "./path.js";
const mainSass = gulpSass(sass);
let isProd = false;

export {
    browserSync,
    del,
    gulp,
    autoprefixer,
    babel,
    cleanCSS,
    fileInclude,
    groupMedia,
    gulpif,
    imagemin,
    minify,
    notify,
    plumber,
    replace,
    svgSprite,
    svgmin,
    zip,
    readFileSync,
    gulpPath,
    path,
    mainSass,
    isProd
};
