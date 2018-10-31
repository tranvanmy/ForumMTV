import PostApiService from '../api'

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
        try {
            let response = await PostApiService.callApiListPost();
            if (response.status == 200)  {
                return commit(POST_LIST, { listPost: response.data });
            }
            console.log(response.responseJSON);
        } catch (e) {

        }
    }
}

const storeAdminPost = {
    state,
    actions,
    mutations,
    getters
}

export default storeAdminPost;