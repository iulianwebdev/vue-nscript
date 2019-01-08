const state = {
    lists: []
}

const getters = {}
const mutations = {}
const actions = {
    init(context){
        console.log('lists action');
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}