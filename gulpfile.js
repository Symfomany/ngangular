"use strict";

/**
 *  In this example og Gulp, there are:
 *  Uses the built-in BrowserSync server for HTML files
 *  Watches & compiles JS and Angular files
 *  Watches & compiles SASS files
 *  Watches & injects CSS files
 */
let browserSync = require('browser-sync');
let gulp = require('gulp');
let sass = require('gulp-sass');
let size = require('gulp-size');
let uncss = require('gulp-uncss');
let filter = require('gulp-filter');
let concat = require('gulp-concat');
let notify = require("gulp-notify");
let minifyCss = require('gulp-minify-css');
let autoprefixer = require('gulp-autoprefixer');
let rename = require('gulp-rename');
let clean = require('gulp-clean');
let cache = require('gulp-cache');
let imagemin = require('gulp-imagemin');
let sourcemaps = require('gulp-sourcemaps');
let plumber = require('gulp-plumber');
let ngmin = require('gulp-ngmin');

//add
let gutil = require("gulp-util");
let path = require('path');
let jshint = require('gulp-jshint');
let stylish = require('jshint-stylish');
let templateCache = require('gulp-angular-templatecache');


//init and reload brower
let reload = browserSync.reload;
let validator = require('is-my-json-valid/require')
let protractor = require("gulp-protractor").protractor;

/**
 * Some configuration
 */
let config = {
    appDir: './app/',
    dataDir: './data/',
    assetDir: './assets/',
    distDir: './dist/',
    imgDir: this.assetDir + 'images/',
    rootIndex: './index.html',
    sassFiles: [ //not order because it's oriented components
        "app/pages/**/*.scss",
        "app/directives/**/*.scss",
        "app/components/**/*.scss",
    ],
    jsFiles: [
        "app/app.js",
        "app/app.config.js",
        "app/app.constants.js",
        "app/app.routes.js",
        "app/components/**/*.component.js", //all components
        "app/directives/**/*.directive.js", //all factories
        "app/pages/**/*.controller.js", //all controllers
        "app/pages/**/*.factory.js", //all factories
        "app/pages/**/*.filter.js", //all controllers

    ]
}


/********************************************************************************************************************************************
 * Handler Errors
 *******************************************************************************************************************************/
function handleError(err) {
    console.log("************************************************** ERRORS*******************************************************");
    gutil.log('error', 'An error to compile/transpile', gutil.colors.bold.dim.white.bgRed(err.toString()));
    console.log(err.toString());
    console.log("************************************************** ERRORS*******************************************************");
    notifier.notify({
        title: ' Erreur de Compilation ',
        message: err.toString(),
        icon: path.join(__dirname, 'js.jpg'),
        sound: true,
        wait: true
    });
    this.emit('end');
}


// Browser-sync task, only cares about compiled CSS
gulp.task('browser-sync', function () {
    browserSync({
        port: 9000,
        server: {
            baseDir: "./", //base
            index: "index.html" //fichier a chargé
        }
    });
});

// Clean log, comments, remove old files
gulp.task('clean', function () {
    return gulp.src(['dist/css', 'dist/js', 'dist/images'], { read: false })
        .pipe(clean());
});

/**
 * Protractor Test
 */
gulp.task('tests', function () {
    gulp.src(["./tests/e2e/**/*.spec.js"])
        .pipe(protractor({
            configFile: "./protractor.conf.js",
            args: ['--baseUrl', 'http://localhost:4000']
        }))

        .on('error', function (e) { throw e })
        .pipe(notify({ message: 'Tests lancées' }));
});



// Sass task, will run when any SCSS files change.
gulp.task('css', function () {
    return gulp.src(config.sassFiles)
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(sourcemaps.init())
        .pipe(sass({ style: 'expanded', }))
        .pipe(concat('main.css'))
        //.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(rename({ suffix: '.min' }))
        //.pipe(minifyCss())
        // .pipe(uncss({
        //         html: ['*.html']
        //     }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css/'))
        .pipe(notify("Style Modifié"));
});


//For js
gulp.task('js', function () {

    let validate = validator('./data/personnages.json')
    if (!validate.errors) {
        notify("Aucune erreur JSON")
    } else {
        notify(JSON.stringify(validate.errors))
    }

    return gulp.src(config.jsFiles).on('error', handleError)

        .pipe(jshint()).on('error', handleError)
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        })) // débogage de mes pipes
        .pipe(jshint.reporter(stylish))
        .pipe(sourcemaps.init())
        .pipe(concat('app.min.js'))
        .pipe(sourcemaps.write('.'))
        //.pipe(ngmin({ dynamic: true }))
        //.pipe(templateCache()) //template cache for layout
        .pipe(gulp.dest('dist/js')) // repertoire distant
        .pipe(notify("Js Modifié")); // notification
});



// Images
gulp.task('images', function () {
    return gulp.src('assets/images/**/*')
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(reload({ stream: true }))
        .pipe(gulp.dest('dist/images'))
        .pipe(notify({ message: 'Images compressées' }));
});


// Default task to be run with `gulp`
gulp.task('default', ['clean', 'browser-sync', 'css', 'js'], function () {
    //gulp.watch("sass/**/*.scss", ['css']); // watch permet de regarder les changements de fichier et lancer les tâches que l'on souhaite
    gulp.watch(["app/**/**/*.js"], ['js']);
    gulp.watch(["app/**/**/*.scss"], ['css']);
    gulp.watch(["tests/**/**/*.js"], ['tests']);
    gulp.watch(["*.html", "app/**/*.html"]).on('change', browserSync.reload); //reload on HTML
});
