import Vue from 'vue';
import Router from 'vue-router';

import Home from '*/components/Home';
import NotFound from '*/components/not_found/NotFound';
import PostList from '*/modules/post/views/PostList';
import UserList from '*/modules/user/views/UserList';
import ModalDetailPost from '*/modules/post/views/ModalDetailPost';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/admin/index', name: 'home', component: Home },
        {   path: '/admin/post',
            name: 'post.list',
            component: PostList,
            children: [
                { path: ':id',  name: 'admin.post.detail', component: ModalDetailPost }
            ]
        },
        { path: '/admin/user', name: 'user.list', component: UserList },
        { path: '*', component: NotFound }
    ],
    mode: 'history'
});
