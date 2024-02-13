import gulp from "gulp";
import browserSync from "browser-sync";
import autoprefixer from "gulp-autoprefixer";
import cleanCSS from "gulp-clean-css";
import sourcemaps from "gulp-sourcemaps";
import rename from "gulp-rename";
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import { Config } from './../config/config.js';
export {style_dev, style_build };

function style_dev() {
        return gulp.src(Config.Path.SRC.SCSS_FILE)
            .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(gulp.dest(Config.Path.Dist.CSS))
            .pipe(rename({ suffix: '.dev' }))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(Config.Path.Dist.CSS))
            .pipe(browserSync.stream());
}

function style_build() {
    return gulp.src(Config.Path.SRC.SCSS_FILE)
        .pipe(sass())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(Config.Path.Dist.CSS))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cleanCSS())
        .pipe(gulp.dest(Config.Path.Dist.CSS))
        .pipe(browserSync.stream());
}