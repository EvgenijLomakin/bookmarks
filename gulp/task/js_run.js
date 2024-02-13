import gulp from 'gulp';
import concat from 'gulp-concat';
import sourcemaps from "gulp-sourcemaps";
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import { Config } from './../config/config.js';

export const js_files = [
    Config.Path.SRC.JS+'data_const.js',
    Config.Path.SRC.JS+'DataBase.js',
    Config.Path.SRC.JS+'component/companent_bm__wrapper.js',
    Config.Path.SRC.JS+'component/component_bm_link.js',
    Config.Path.SRC.JS+'render.js',
    Config.Path.SRC.JS+'font-size.js',
    Config.Path.SRC.JS+'bookmark.js',
    Config.Path.SRC.JS+'theme.js',
    Config.Path.SRC.JS+'main.js',
];

export const js_run = () => {
    // console.log('js_run');
    // console.log(js_file_arr);

    return gulp.src(js_files)
    
    //.pipe(concat(Config.Path.Dist.JsMiniFileName))
    .pipe(concat(Config.Path.Dist.JsFileName))
    
    .pipe(gulp.dest(Config.Path.Dist.Js))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    // .pipe(sourcemaps.init())
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest(Config.Path.Dist.Js));
    

}