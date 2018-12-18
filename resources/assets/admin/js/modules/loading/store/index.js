const ADMIN_MAIN_LOADING = 'ADMIN_MAIN_LOADING';

const state = {
    mainLoading: {
        show: false
    },
};

const mutations = {
    [ADMIN_MAIN_LOADING](state, { mainLoading }) {
        state.mainLoading = mainLoading;
    },
};

const actions = {
    setAdminMainLoading({ commit }, mainLoading) {
        commit(ADMIN_MAIN_LOADING, { mainLoading });
    },
};

const storeLoading = {
    state,
    actions,
    mutations
};

export default storeLoading;
