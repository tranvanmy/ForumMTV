<template>
    <div>
      <!-- start blog-main -->
        <section class="blog-main section-padding">
            <div class="container">
                <div class="row">
                    <div class="blog-content col col-md-8">
                        <div class="post">
                            <div class="entry-header">
                                <div class="entry-date-media">
                                    <div class="entry-date">25 <span>july</span></div>
                                    <div class="entry-media">
                                        <img src="/frontend/dist/wedding/images/blog/img-1.jpg" class="img img-responsive" alt>
                                    </div>
                                </div>

                                <div class="entry-formet">
                                    <div class="entry-meta">
                                        <div class="cat">
                                            <i class="fa fa-tags"></i> <a href="#">Uncategorize</a>, <a href="#">Photography</a>
                                        </div>
                                        <div class="cat">
                                            <i class="fa fa-comments"></i> <a href="#">Comments: 5</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="entry-title">
                                    <h3><router-link :to="{ path: '/blog/detail' }">Wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper quis nostrud exerci tation ullamcorper</router-link></h3>
                                </div>
                            </div> <!-- end of entry-header -->

                            <div class="entry-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
                                <router-link class="read-more" :to="{ path: '/blog/detail' }">Read more</router-link>
                            </div> <!-- end of entry-content -->
                        </div> <!-- end of post -->

                        <div class="post">
                            <div class="entry-header">
                                <div class="entry-date-media">
                                    <div class="entry-date">03 <span>Aug</span></div>
                                    <div class="entry-media media-carousel">
                                        <div class="item">
                                            <img src="/frontend/dist/wedding/images/blog/img-2.jpg" class="img img-responsive" alt>
                                        </div>
                                        <div class="item">
                                            <img src="/frontend/dist/wedding/images/blog/img-3.jpg" class="img img-responsive" alt>
                                        </div>
                                    </div>
                                </div>

                                <div class="entry-formet">
                                    <div class="entry-meta">
                                        <div class="cat">
                                            <i class="fa fa-tags"></i> <a href="#">Uncategorize</a>, <a href="#">Photography</a>
                                        </div>
                                        <div class="cat">
                                            <i class="fa fa-comments"></i> <a href="#">Comments: 5</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="entry-title">
                                    <h3><router-link :to="{ path: '/blog/detail' }">Wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper quis nostrud exerci tation ullamcorper</router-link></h3>
                                </div>
                            </div> <!-- end of entry-header -->

                            <div class="entry-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae enim, quo excepturi tempora ea deleniti nihil odio, reiciendis similique totam, dolore deserunt amet.</p>
                                <router-link class="read-more" :to="{ path: '/blog/detail' }">Read more</router-link>
                            </div> <!-- end of entry-content -->
                        </div> <!-- end of post -->

                        <div class="page-pagination">
                            <ul class="pagination">
                                <li>
                                    <a href="#" aria-label="Previous">
                                        <span class="fa fa-arrow-left"></span>
                                    </a>
                                </li>
                                <li><a href="#">1</a></li>
                                <li class="current"><a href="#">2</a></li>
                                <li><a href="#">4</a></li>
                                <li>
                                    <a href="#" aria-label="Next">
                                        <span class="fa fa-arrow-right"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div> <!-- end of blog-content -->

                    <div class="blog-sidebar col col-md-4">
                        <div class="widget search-widget">
                            <h3>Search</h3>
                            <form>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Search your keyword">
                                </div>
                                <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
                            </form>
                        </div>

                        <div class="widget categories-widget">
                            <h3>Categories</h3>
                            <ul>
                                <li><a href="#">Our story</a></li>
                                <li><a href="#">Wedding ceremony</a></li>
                                <li><a href="#">Wedding events</a></li>
                                <li><a href="#">Gift</a></li>
                                <li><a href="#">Party</a></li>
                                <li><a href="#">Receiption ceremony</a></li>
                            </ul>
                        </div>

                        <div class="widget popular-posts-widget">
                            <h3>Popular postes</h3>
                            <ul>
                                <li>
                                    <div>
                                        <span class="date">01 Aug 2016</span>
                                        <h6><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a></h6>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span class="date">01 Aug 2016</span>
                                        <h6><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a></h6>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span class="date">01 Aug 2016</span>
                                        <h6><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a></h6>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="widget populer-tags-widget">
                            <h3>Popular tags</h3>
                            <ul>
                                <li><a href="#">Wedding ceremony</a></li>
                                <li><a href="#">Love</a></li>
                                <li><a href="#">Story</a></li>
                                <li><a href="#">Events</a></li>
                                <li><a href="#">Love</a></li>
                                <li><a href="#">First Metting</a></li>
                                <li><a href="#">Couple</a></li>
                                <li><a href="#">Gift</a></li>
                            </ul>
                        </div>
                    </div> <!-- end of sidebar -->
                </div> <!-- end of row -->
            </div> <!-- end of container -->
        </section>
        <!-- end of blog-main -->
    </div>
</template>

<script>
export default {
  name: "AppBlog",
      data() {
        return {
        };
    },

    computed: {
        // checkRouteBlog() {
        //     if (this.$route.name.path != '/') {
        //         return false;
        //     }

        //     return true;
        // }
    },

    created() {
        // console.log(this.$route)
    },
    methods: {
    },
};
</script>
