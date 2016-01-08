var gulp = require('gulp')
var browserify = require('browserify')
var watchify = require('watchify')
var babelify = require('babelify')
var plumber = require('gulp-plumber')
var buffer = require("vinyl-buffer")
var source = require("vinyl-source-stream")
var sourcemaps = require("gulp-sourcemaps")
var uglify = require("gulp-uglify")

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
      .pipe(plumber())
      .pipe(source("bundle.js"))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps:true}))
      // .pipe(uglify())
      .pipe(sourcemaps.write("./"))
      .pipe(gulp.dest("./build/"))


    bundler.on("error", function (error) {
      console.log(error)
    })
  }

  bundle()
})

gulp.task("watch", function () {
  console.log("Gulp is now watching for changes in ./src/")
  gulp.watch([
    "./src/**/*.js",
    "./src/*.js"
  ], ["browserify"])
})


gulp.task('default', [
  'browserify',
  "watch"
])
