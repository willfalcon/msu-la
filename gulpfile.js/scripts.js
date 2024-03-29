const { src, dest } = require('gulp');
const named = require('vinyl-named');
const compiler = require('webpack');
const webpack = require('webpack-stream');
const livereload = require('gulp-livereload');
const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');

const scriptSrces = [
  'src/scripts/index.js',
  'src/scripts/editor.js',
  // 'src/scripts/contact-block/contact-block-editor.js',
  // 'src/scripts/contact-block/contact-block-options-page.js',
];

exports.devMainScript = function devMainScript() {
  return src(scriptSrces)
    .pipe(named())
    .pipe(
      webpack(
        {
          devtool: 'eval-cheap-module-source-map',
          mode: 'development',
          output: {
            filename: '[name].js',
          },
          module: {
            rules: [
              {
                test: /\.js$/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                  },
                },
                exclude: /node_modules/,
              },
            ],
          },
          plugins: [new DependencyExtractionWebpackPlugin()],
        },
        compiler
      )
    )
    .pipe(dest('dist/'))
    .pipe(livereload());
};

exports.prodMainScript = function prodMainScript() {
  return src(scriptSrces)
    .pipe(named())
    .pipe(
      webpack(
        {
          devtool: 'source-map',
          mode: 'production',
          output: {
            filename: '[name].min.js',
          },
          module: {
            rules: [
              {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
              },
            ],
          },
          plugins: [new DependencyExtractionWebpackPlugin()],
        },
        compiler
      )
    )
    .pipe(dest('dist/'));
};

const jsScript = (sources, dev = false) => {
  const srcArray = sources.constructor === Array ? sources : [sources];
  return dev
    ? src(srcArray)
        .pipe(named())
        .pipe(
          webpack(
            {
              devtool: 'eval-cheap-module-source-map',
              mode: 'development',
              output: {
                filename: '[name]/[name].js',
              },
              module: {
                rules: [
                  {
                    test: /\.js$/,
                    use: 'babel-loader',
                    exclude: /node_modules/,
                  },
                ],
              },
            },
            compiler
          )
        )
        .pipe(dest('dist/'))
        .pipe(livereload())
    : src(srcArray)
        .pipe(named())
        .pipe(
          webpack(
            {
              devtool: 'source-map',
              mode: 'production',
              output: {
                filename: '[name]/[name].min.js',
              },
              module: {
                rules: [
                  {
                    test: /\.js$/,
                    use: 'babel-loader',
                    exclude: /node_modules/,
                  },
                ],
              },
            },
            compiler
          )
        )
        .pipe(dest('dist/'));
};

exports.jsScript = jsScript;
