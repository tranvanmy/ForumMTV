<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
        <meta name="csrf-token" value="{{ csrf_token() }}">
        <title>Admin</title>
        <link href="{{ asset('admin/css/app.css') }}" rel="stylesheet">
    </head>
    <body class="hold-transition skin-blue sidebar-mini">
        <div id="app"></div>

        <script src="{{ mix('admin/js/app.js') }}"></script>
    </body>
</html>