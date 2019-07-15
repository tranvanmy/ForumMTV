<template>
    <div>
         <!-- start preloader -->
        <div class="preloader">
            <div class="inner">
                <span class="icon"><i class="fi flaticon-two"></i></span>
            </div>
        </div>
        <!-- end preloader -->

        <!-- strat music-box -->
        <div class="music-box">
            <button class="music-box-toggle-btn" @click="handleMusic">
                <i class="fa fa-music"></i>
            </button>

            <div class="music-holder">
                <iframe src="/frontend/dist/wedding/video/BeautifulInWhite-ShaneFilan-524801.mp3" loop="true" style="display:none" id="iframeAudio"></iframe>
            </div>
        </div>
        <!-- end music box -->
        
        <!-- start of hero -->
        <section class="hero">
            <div class="hero-slider hero-slider-s1">
                <div class="slide-item">
                    <img src="/frontend/dist/wedding/images/slider/slide-1.jpg" alt class="slider-bg">
                </div>

                <div class="slide-item">
                    <img src="/frontend/dist/wedding/images/slider/slide-2.jpg" alt class="slider-bg">
                </div>
            </div>
            <div class="wedding-announcement">
                <div class="couple-name-merried-text">
                    <h2 class="wow slideInUp" data-wow-duration="1s">Văn Mỹ &amp; Phương Dung</h2>
                    <div class="married-text wow fadeIn" data-wow-delay="1s">
                        <h4 class="">
                        <span class=" wow fadeInUp" data-wow-delay="1.05s">W</span>
                        <span class=" wow fadeInUp" data-wow-delay="1.10s">e</span>
                        <span class=" wow fadeInUp" data-wow-delay="1.15s">'</span>
                        <span class=" wow fadeInUp" data-wow-delay="1.20s">r</span>
                        <span class=" wow fadeInUp" data-wow-delay="1.25s">e</span>
                        <span>&nbsp;</span>
                        <span class=" wow fadeInUp" data-wow-delay="1.30s">g</span>
                        <span class=" wow fadeInUp" data-wow-delay="1.35s">e</span>
                        <span class=" wow fadeInUp" data-wow-delay="1.40s">t</span>
                        <span class=" wow fadeInUp" data-wow-delay="1.45s">t</span>
                        <span class=" wow fadeInUp" data-wow-delay="1.50s">i</span>
                        <span class=" wow fadeInUp" data-wow-delay="1.55s">n</span>
                        <span class=" wow fadeInUp" data-wow-delay="1.60s">g</span>
                        <span>&nbsp;</span>
                        <span class=" wow fadeInUp" data-wow-delay="1.65s">m</span>
                        <span class=" wow fadeInUp" data-wow-delay="1.70s">a</span>
                        <span class=" wow fadeInUp" data-wow-delay="1.75s">r</span>
                        <span class=" wow fadeInUp" data-wow-delay="1.80s">r</span>
                        <span class=" wow fadeInUp" data-wow-delay="1.85s">i</span>
                        <span class=" wow fadeInUp" data-wow-delay="1.90s">e</span>
                        <span class=" wow fadeInUp" data-wow-delay="1.95s">d</span>

                        </h4>
                    </div>
                    <!-- <i class="fa fa-heart"></i> -->
                </div>

                <div class="save-the-date">
                    <h4>Save the date</h4>
                    <span class="date">25 OCT 2019</span>
                </div>
            </div>
        </section>
        <!-- end of hero slider -->
    </div>

</template>

<script>
export default {
  name: "AppSlide",
    data() {
        return {
            autoMusic: true
        };
    },
    computed: {

    },

    created() {
        // console.log(this.$route)
    },
    methods: {
        handleMusic() {
            this.autoMusic = !this.autoMusic;
        }
    },
};
</script>
