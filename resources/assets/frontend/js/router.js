import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import WdRegister from './components/Register';
import NotFound from './components/NotFound';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/blog', name: 'home', component: Blog },
        { path: '/blog/detail', name: 'home', component: BlogDetail },
        { path: '/register', name: 'register', component: WdRegister },
        { path: '*', component: NotFound }
    ],
    mode: 'history'
});
