<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta name="csrf-token" value="{{ csrf_token() }}">

        {{-- {{ --<linkhref="asset('frontend/css/app.css')"rel="stylesheet"> }} --}}

        <title> Lovly Wedding - Responsive Wedding Template </title>

        <!-- Favicon and Touch Icons -->
        <link href="asset{{ '/frontend/dist/wedding/images/favicon/favicon.png' }}" rel="shortcut icon" type="image/png">
        <link href="/frontend/dist/wedding/images/favicon/apple-touch-icon.png" rel="apple-touch-icon">
        <link href="/frontend/dist/wedding/images/favicon/apple-touch-icon-72x72.png" rel="apple-touch-icon" sizes="72x72">
        <link href="/frontend/dist/wedding/images/favicon/apple-touch-icon-114x114.png" rel="apple-touch-icon" sizes="114x114">
        <link href="/frontend/dist/wedding/images/favicon/apple-touch-icon-144x144.png" rel="apple-touch-icon" sizes="144x144">

        <!-- Icon fonts -->
        <link href="/frontend/dist/wedding/css/font-awesome.min.css" rel="stylesheet">
        <link href="/frontend/dist/wedding/css/flaticon.css" rel="stylesheet">

        <!-- Bootstrap core CSS -->
        <link href="/frontend/dist/wedding/css/bootstrap.min.css" rel="stylesheet">

        <!-- Plugins for this template -->
        <link href="/frontend/dist/wedding/css/animate.css" rel="stylesheet">
        <link href="/frontend/dist/wedding/css/owl.carousel.css" rel="stylesheet">
        <link href="/frontend/dist/wedding/css/owl.theme.css" rel="stylesheet">
        <link href="/frontend/dist/wedding/css/slick.css" rel="stylesheet">
        <link href="/frontend/dist/wedding/css/slick-theme.css" rel="stylesheet">
        <link href="/frontend/dist/wedding/css/owl.transitions.css" rel="stylesheet">
        <link href="/frontend/dist/wedding/css/jquery.fancybox.css" rel="stylesheet">
        <link href="/frontend/dist/wedding/css/magnific-popup.css" rel="stylesheet">

        <!-- Custom styles for this template -->
        <link href="/frontend/dist/wedding/css/style.css" rel="stylesheet">

    </head>
    <body>
        <div id="app"></div>

        <script src="{{ asset('frontend/js/app.js') }}"></script>
    </body>
</html>