import Vue from 'vue'
import Vuex from 'vuex'

import storeAdminPost from '*/modules/post/store'

Vue.use(Vuex)

const storeMain = {
    state: {
        languages: [
            {
                key: 'vi',
                title: 'Version Vietnam',
            },
            {
                key: 'en',
                title: 'Version English',
            }
        ],
        settings: {
            API_POST: '/api/v1/gets-post'
        }
    }
}

export default new Vuex.Store({
    modules: {
        storeAdminPost,
        storeMain
    }
})