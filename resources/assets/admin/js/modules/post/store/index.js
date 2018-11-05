import PostApiService from '../api'
import Helper from '*/library/Helper'

const POST_LIST = 'admin_post/list'

const state = {
    listPost: {},
}
const mutations = {
    [POST_LIST](state, { listPost}) {
        return state.listPost = listPost;
    }
}

const getters = {
    formatListPost: state => {
        // return state.listPost = 1;
    }
}

const actions = {
    async actionListPost({ commit }, {vue, params}) {
        let mainLoading = vue.$store.state.storeLoading.mainLoading
        vue.$store.dispatch('setAdminMainLoading', { ...mainLoading, show: true })
        let response = await PostApiService.callApiListPost();
        vue.$store.dispatch('setAdminMainLoading', { ...mainLoading, show: false })

        if (response.status == 200)  {
            return commit(POST_LIST, { listPost: response.data });
        }

        return vue.$toasted.error(Helper.getFirstError(response, 'Error'));
    }
}

const storeAdminPost = {
    state,
    actions,
    mutations,
    getters
}

export default storeAdminPost;