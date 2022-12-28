const postcss = require("gulp-postcss");
const autoprefixer = require('autoprefixer');
const { series, watch } = require('gulp');
const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require("gulp-sourcemaps");

function clean(cb) {
    // body omitted
    cb();
}

const buildStyles = (cb) => {
    // body omitted
    cb();
    return src('./scss/index.scss', { sourcemaps: true })
      .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
      .pipe(postcss([autoprefixer()]))
      .pipe(sourcemaps.write("."))
      .pipe(dest('./style', { sourcemaps: true }));
}

const watchStyles = (cb) => {
  // body omitted
  cb();
  return watch('./scss/**/*.scss', buildStyles);
}


exports.default = exports.watch = series(buildStyles, watchStyles);