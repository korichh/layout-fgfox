// Import modules and set global variables
import * as modules from "./gulp/config/modules.js";

for (const module in modules) {
    global[module] = modules[module];
}

// Import tasks
import { clean } from "./gulp/tasks/clean.js";
import { html } from "./gulp/tasks/html.js";
import { css, cssBackend } from "./gulp/tasks/css.js";
import { js } from "./gulp/tasks/js.js";
import { resources } from "./gulp/tasks/resources.js";
import { img, svgImg } from "./gulp/tasks/img.js";
import { zipFiles } from "./gulp/tasks/zipFiles.js";
import { toProd } from "./gulp/tasks/toProd.js";

// Set functionality
browserSync.create();

const watcher = () => {
    browserSync.init({
        server: {
            baseDir: `${path.buildFolder}`
        },
        notify: false,
    });

    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, css);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.resources, resources);
    gulp.watch(`${path.watch.img}/**/*.{jpg,jpeg,png}`, img);
    gulp.watch(`${path.watch.img}/**/*.svg`, svgImg);
}

gulp.task('default', gulp.series(clean, html, css, js, resources, img, svgImg, watcher));
gulp.task('backend', gulp.series(clean, html, cssBackend, js, resources, img, svgImg));
gulp.task('prod', gulp.series(toProd, clean, html, css, js, resources, img, svgImg));
gulp.task('zip', zipFiles);
