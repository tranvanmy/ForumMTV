import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home';
import WdRegister from './components/Register';
import NotFound from './components/NotFound';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/register', name: 'register', component: WdRegister },
        { path: '*', component: NotFound }
    ],
    mode: 'history'
});
