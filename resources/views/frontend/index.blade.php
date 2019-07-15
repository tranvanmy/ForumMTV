<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta name="csrf-token" value="{{ csrf_token() }}">
        {{-- {{ --<linkhref="asset('frontend/css/app.css')"rel="stylesheet"> }} --}}

        <title> M <3 D </title>

        <!-- Favicon and Touch Icons -->
        <link href="/frontend/dist/wedding/images/favicon/favicon.png" rel="shortcut icon" type="image/png">
        <link href="/frontend/dist/wedding/images/favicon/apple-touch-icon.png" rel="apple-touch-icon">
        <link href="/frontend/dist/wedding/images/favicon/apple-touch-icon-72x72.png" rel="apple-touch-icon" sizes="72x72">
        <link href="/frontend/dist/wedding/images/favicon/apple-touch-icon-114x114.png" rel="apple-touch-icon" sizes="114x114">
        <link href="/frontend/dist/wedding/images/favicon/apple-touch-icon-144x144.png" rel="apple-touch-icon" sizes="144x144">

        <link href="{{ asset('frontend/dist/wedding/css/wedding.min.css') }}" rel="stylesheet">
    </head>
    <body>
        <div id="home"></div>

        <script src="{{ asset('frontend/js/app.js') }}"></script>
        <script src="{{ asset('frontend/dist/wedding/js/wedding.min.js') }}"></script>
    </body>
</html>
