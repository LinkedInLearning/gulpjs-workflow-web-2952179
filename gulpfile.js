const {src, dest} = require('gulp');
const origin = 'src';
const destination = 'build';

function html(cb) {
  src(`${origin}/**/*.html`).pipe(dest(destination));
  cb();
}

exports.default = html;
