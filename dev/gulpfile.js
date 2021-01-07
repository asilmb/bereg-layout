var gulp             = require('gulp'),
    browserSync      = require('browser-sync').create(),
    nunjucksRender   = require('gulp-nunjucks-render'),
    htmlclean        = require('gulp-htmlclean'),
    stylus           = require('gulp-stylus'),
    postcss          = require('gulp-postcss'),
    postcssPresetEnv = require('postcss-preset-env'),
    mqpacker         = require('css-mqpacker'),
    sortCSSmq        = require('sort-css-media-queries'),
    debug            = require('gulp-debug'),
    plumber          = require('gulp-plumber'),
    sourcemaps       = require('gulp-sourcemaps'),
    changed          = require('gulp-changed'),
    gulpCopy         = require('gulp-copy'),
    cache            = require('gulp-cache'),
    autoprefixer     = require('gulp-autoprefixer'),
    image            = require('gulp-image'),
    iconfont         = require('gulp-iconfont'),
    iconfontCss      = require('gulp-iconfont-css'),
    del              = require('del'),
    beautify         = require('gulp-jsbeautifier');


// ----- Clearing cache --------------------------------------------------------
gulp.task('clear', function(done) {
  cache.clearAll();
  console.log('Cache cleared');
  done();
});

// ----- Copying Index ./dev/index.html => ./dist/index.html -------------------
gulp.task('index', function() {
  return gulp
    .src('index.html')
    .pipe(gulpCopy('../dist'))
    .on('end', function() {
      browserSync.reload();
    });
});

// ----- Rendering HTML pages --------------------------------------------------
gulp.task('html', function() {
  return gulp
    .src('pages/**/*.html')
    .pipe(plumber(function(error) {
      console.log('');
      console.log('************** NUNJUCKS ERROR **************');
      console.log(error.fileName);
      console.log(error.message);
      console.log('********************************************');
      console.log('');
      this.emit('end');
    }))
    .pipe(nunjucksRender({
      path: ['blocks']
    }))
    .pipe(htmlclean({
      protect: /<!--[^]*?-->/g,
      edit: function(html) { return html.replace(/\begg(s?)\b/ig, 'omelet$1'); }
    }))
    .pipe(plumber.stop())
    .pipe(beautify({
      "indent_char": " ",
      "indent_size": 2,
      "extra_liners": ["!--"]
    }))
    .pipe(gulp.dest('../dist/pages'))
    .on('end', function() {
      browserSync.reload();
    });
});



// ------ Compiling Stylus into CSS --------------------------------------------
gulp.task('stylus', function() {
  var processors = [
    postcssPresetEnv(),
    mqpacker({
      sort: sortCSSmq
    })
  ];

  return gulp
    .src(['stylus/init.styl'])
    .pipe(autoprefixer({
      grid: true
    }))
    .pipe(plumber(function(error) {
      console.log('');
      console.log('*************** STYLUS ERROR ***************');
      console.log('stylus:', error.message);
      console.log('********************************************');
      console.log('');
      this.emit('end');
    }))
    .pipe(sourcemaps.init())
    .pipe(stylus({
      errLogToConsole: true,
      compress: false
    }))
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('../maps'))
    .pipe(plumber.stop())
    .pipe(gulp.dest('../dist/css/'))
    .pipe(browserSync.stream());
});



// ----- Copy JS files from /venders without changes ---------------------------
gulp.task('js-vendor', function() {
  function swallowError(error) {
    console.log(error.toString());
    this.emit('end');
  }
  return gulp
    .src(['js/vendor/*.js', '!js/main.js'])
    .pipe(plumber(function(error) {
      console.log('uglify:', error.message);
      this.emit('end');
    }))
    .pipe(debug({
      title: 'vendor:'
    }))
    .on('error', swallowError)
    .pipe(plumber.stop())
    .pipe(gulp.dest('../dist/js/vendor/'))
    .on('end', function() {
      browserSync.reload();
    });
});



// ----- Bundling main JS file -------------------------------------------------
gulp.task('js-main', function() {
  function swallowError(error) {
    console.log(error.toString());
    this.emit('end');
  }

  return gulp
    .src(['js/*.js', '!js/vendor/*.js'])
    .pipe(plumber(function(error) {
      console.log('uglify:', error.message);
      this.emit('end');
    }))
    .pipe(debug({
      title: 'main-js:'
    }))
    .pipe(sourcemaps.init())
    .on('error', swallowError)
    .pipe(sourcemaps.write('../maps'))
    .pipe(plumber.stop())
    .pipe(gulp.dest('../dist/js/'))
    .on('end', function() {
      browserSync.reload();
    });
});



// ----- Copy & Optimizing images ----------------------------------------------
gulp.task('img', function() {
  return gulp
    .src(['img/**/*.{jpg,png,svg,gif}'])
    .pipe(image({
      pngquant: true,
      optipng: false,
      zopflipng: true,
      jpegRecompress: false,
      mozjpeg: true,
      guetzli: false,
      gifsicle: true,
      svgo: true,
      concurrent: 10,
      quiet: true
    }))
    .pipe(changed('./../dist/img'))
    .pipe(gulp.dest(['./../dist/img']))
});



// ----- Generating iconfont from /dev/icons -----------------------------------
gulp.task('iconfont', function() {
  const runTimestamp = Math.round(Date.now() / 1000);
  const fontName = 'iconfont';
  del.sync(['./../dist/fonts/'], {
    force: true
  });
  return gulp
    .src(['icons/**/*.svg'])
    .pipe(iconfontCss({
      fontName: fontName,
      path: './stylus/base/_' + fontName + '-template.styl',
      targetPath: './../../../dev/stylus/base/' + fontName + '.styl',
      fontPath: '../../fonts/' + fontName + '/',
      cssClass: 'icon',
      centerHorizontally: true
    }))
    .pipe(iconfont({
      fontName: fontName,
      fontWeight: 400,
      fontHeight: 1000,
      normalize: true,
      formats: ['ttf', 'eot', 'woff', 'woff2'],
      timestamp: runTimestamp,
    }))
    .pipe(gulp.dest('./../dist/fonts/' + fontName + '/'))
    .on('end', function() {
      browserSync.reload();
    });
});



// ----- Fonts -----------------------------------------------------------------
gulp.task('fonts', function() {
  return gulp
    .src(['fonts/**/*'])
    .pipe(gulp.dest('./../dist/fonts/'))
    .on('end', function() {
      browserSync.reload();
    });
});



// ----- Watching files --------------------------------------------------------
gulp.task('watch', function() {
  gulp.watch(['blocks/**/*.html', 'pages/**/*.html'], gulp.series(['html', 'clear']));
  gulp.watch(['index.html'], gulp.series(['index', 'clear']));
  gulp.watch(['js/**/*.js'], gulp.series(['js-vendor', 'js-main', 'clear']));
  gulp.watch(['fonts/*.*', '!fonts/iconfont'], gulp.series(['fonts', 'clear']));
  gulp.watch(['img/**/*.{jpg,png,svg,gif}', 'blocks/**/*.{jpg,png,svg,gif}'], gulp.series(['img', 'clear']));
  gulp.watch(['icons/**/*'], gulp.series(['iconfont', 'fonts', 'clear']));
  gulp.watch(['**/*.styl'], gulp.series(['stylus', 'clear']));
  browserSync.init({
    server: {
      baseDir: '../dist'
    }
  });
});




// ----- Combining tasks into Default task -------------------------------------
gulp.task('default', gulp.series(gulp.parallel('index', 'html', 'stylus', 'js-vendor', 'js-main', 'img', 'iconfont', 'fonts'), 'stylus', 'watch'));



//------------------------------------------------------------------------------
