let mix = require('laravel-mix');
mix.webpackConfig({
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        'scss@': path.resolve('resources/assets/frontend/sass'),
        '@': path.resolve('resources/assets/frontend/js'),
        'scss*': path.resolve('resources/assets/admin/sass'),
        '*': path.resolve('resources/assets/admin/js'),
        'public' : path.resolve('public'),
      },
    },
})

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/frontend/js/app.js', 'public/frontend/js')
  .js('resources/assets/admin/js/app.js', 'public/admin/js')
  .sass('resources/assets/frontend/sass/app.scss', 'public/frontend/css')
  .sass('resources/assets/admin/sass/app.scss', 'public/admin/css')
  .copyDirectory('resources/assets/admin/dist/img', 'public/dist/img')
  .styles([
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'node_modules/admin-lte/dist/css/AdminLTE.css',
    'node_modules/admin-lte/dist/css/skins/_all-skins.min.css',
  ], 'public/admin/lte/css/library.min.css')

  .scripts([
    'node_modules/admin-lte/dist/js/demo.js'
  ], 'public/admin/lte/js/library.min.js');


