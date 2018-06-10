import gulp from 'gulp';
import zip from 'gulp-zip';
import install from 'gulp-install';
import path from 'path';
import parseArgs from 'minimist';

const argv = parseArgs(process.argv.slice(2))

gulp.task('install', () => {
    const target = path.resolve(__dirname, argv.target);

    return gulp.src(`${target}/package.json`)
        .pipe(gulp.dest(`${target}/dist`))
        .pipe(install({ production: true }));
});
