const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
// Imagemin old version npm install --save-dev gulp-imagemin@7.1.0
const imagemin = require('gulp-imagemin');

const cssPath = 'src/scss/main.scss'
const jsPath = 'src/js/index.js'
const imgPath = 'src/img/*'

function cssTask(){
    return gulp.src(cssPath)
    .pipe(sass())
    .pipe(autoprefixer({
        overrideBrowserslist:['last 2 versions','> 1%',
        'ie >= 11'],
        cascade: false,
    }))
    .pipe(cleanCSS({debug: true}, (details) => {
        console.log(`${details.name}: ${details.stats.originalSize}`);
        console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
    .pipe(gulp.dest('dist/css'))
}

function jsTask(){
    return gulp.src(jsPath)
    .pipe(minify())
    .pipe(gulp.dest('dist/js'))
}

function imgTask(){
    return gulp.src(imgPath)
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
}

// function watchTask(){
//     gulp.watch(cssPath,cssTask)
//     gulp.watch(jsPath,jsTask)
//     gulp.watch([cssPath, jsPath], gulp.parallel(cssTask, jsTask))
// }

exports.default = gulp.parallel(cssTask,jsTask,imgTask)

