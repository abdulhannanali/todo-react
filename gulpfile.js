var gulp = require('gulp')
var browserify = require('browserify')
var watchify = require('watchify')
var babelify = require('babelify')
var buffer = require("vinyl-buffer")
var source = require("vinyl-source-stream")
var sourcemaps = require("gulp-sourcemaps")

var someConfigOptions = {
  MAIN_FILE : "src/index.js"
}

gulp.task("browserify", function () {
  var bundler = browserify({
    entries: ["./src/index.js"],
    debug:true,
    cache: {}, packageCache: {}, fullPaths: true
  })
  .transform(babelify, {})

  function bundle() {
    console.log("bundling <<<<<<")
    bundler.bundle()
      .pipe(source("bundle.js"))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps:true}))
      .pipe(sourcemaps.write("./"))
      .pipe(gulp.dest("./build/"))

    bundler.on("error", function (error) {
      console.log(error)
    })
  }

  bundle()
})

gulp.task('default', [
  'browserify'
])
