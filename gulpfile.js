import gulp from 'gulp';
import { Config } from './gulp/config/config.js';
import { js_run } from './gulp/task/js_run.js';
import { style_dev, style_build } from './gulp/task/css_run.js';

// Задача слежения за измененными файлами
// dev
// export const watching = () => {
//     gulp.watch( Config.Path.SRC.JS+'***/*.js', js_run );
//     gulp.watch( Config.Path.SRC.SCSS_DID+'**/*.scss', style_dev );
// };
// build
export const watching = () => {
    gulp.watch( Config.Path.SRC.JS+'***/*.js', js_run );
    gulp.watch( Config.Path.SRC.SCSS_DID+'**/*.scss', style_build );
};
 
export const dev = gulp.parallel( watching );
// gulp.task("default", watch );
gulp.task('default', dev);