import Vue from 'vue';
import Router from 'vue-router';

import Home from '*/components/Home';
import NotFound from '*/components/not_found/NotFound';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/index', name: 'home', component: Home },
        // { path: '*', component: NotFound }
    ],
    mode: 'history'
});
