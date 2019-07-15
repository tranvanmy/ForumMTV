<template>
   <!-- Start header -->
    <header id="header" class="site-header header-style-1">
        <nav class="navigation navbar navbar-default">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="open-btn">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <div class="couple-logo">
                        <h1><a href="/">M <i class="fi flaticon-shape-1"></i> D</a></h1>
                    </div>
                </div>
                <div id="navbar" class="navbar-collapse collapse navbar-right navigation-holder">
                    <button class="close-navbar"><i class="fa fa-close"></i></button>
                    <ul class="nav navbar-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="#couple">Couple</a></li>
                        <li><a href="#story">Story</a></li>
                        <li><a href="#events">Events</a></li>
                        <li><a href="#people">People</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#rsvp">RSVP</a></li>
                        <li><router-link :to="{ path: '/blog' }">Blog </router-link></li>
                    </ul>
                </div><!-- end of nav-collapse -->
            </div><!-- end of container -->
        </nav>
    </header>
    <!-- end of header -->
</template>

<script>
export default {
  name: "AppHeader",
    data() {
        return {
            a: 1
        };
    },

    computed: {
        checkRouteBlog() {
            if (this.$route.name.path != '/') {
                return false;
            }

            return true;
        }
    },

    created() {
        // debugger
        console.log(this.$route)
        // this.getListSchedule();
    },
    methods: {
    },
};
</script>
