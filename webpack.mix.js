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
            'public': path.resolve('public'),
        },
    },
});

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
    .copyDirectory('resources/assets/admin/dist/video', 'public/dist')
    .copyDirectory('resources/assets/frontend/dist/wedding/images/', 'public/frontend/dist/wedding/images')
    .copyDirectory('resources/assets/frontend/dist/wedding/fonts/', 'public/frontend/dist/wedding/fonts')
    .styles([
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/admin-lte/dist/css/AdminLTE.css',
        'node_modules/admin-lte/dist/css/skins/_all-skins.min.css',
    ], 'public/admin/lte/css/library.min.css')
    .styles([
        'resources/assets/frontend/dist/wedding/css/font-awesome.min.css',
        'resources/assets/frontend/dist/wedding/css/flaticon.css',
        'resources/assets/frontend/dist/wedding/css/bootstrap.min.css',
        'resources/assets/frontend/dist/wedding/css/animate.css',
        'resources/assets/frontend/dist/wedding/css/owl.carousel.css',
        'resources/assets/frontend/dist/wedding/css/owl.theme.css',
        'resources/assets/frontend/dist/wedding/css/slick.css',
        'resources/assets/frontend/dist/wedding/css/slick-theme.css',
        'resources/assets/frontend/dist/wedding/css/owl.transitions.css',
        'resources/assets/frontend/dist/wedding/css/jquery.fancybox.css',
        'resources/assets/frontend/dist/wedding/css/magnific-popup.css',
        'resources/assets/frontend/dist/wedding/css/style.css'
    ], 'public/frontend/dist/wedding/css/wedding.min.css')
    .scripts([
        'resources/assets/frontend/dist/wedding/js/jquery.min.js',
        'resources/assets/frontend/dist/wedding/js/bootstrap.min.js',
        'resources/assets/frontend/dist/wedding/js/jquery-plugin-collection.js',
        'resources/assets/frontend/dist/wedding/js/script.js',
        'resources/assets/frontend/dist/wedding/js/jquery.flurry.js'
    ], 'public/frontend/dist/wedding/js/wedding.min.js')
    .scripts([
        'node_modules/admin-lte/dist/js/demo.js'
    ], 'public/admin/lte/js/library.min.js');