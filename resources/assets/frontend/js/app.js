
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import Modal from '@/plugins/modal.js';

var SocialSharing = require('vue-social-sharing');

Vue.use(SocialSharing);
Vue.use(Modal)

const app = new Vue({
    el: '#home',
    router,
    render: h => h(App)
});

