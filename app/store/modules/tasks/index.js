const state = {
    tasks: []
}

const getters = {}
const mutations = {
    // No need for batch insert
    // load(state, { data }) {
    //     state.tasks.splice(0).push(...Array.from(new Set(state.tasks, ...data)));
    // },
    save(state, { data }) {
        state.tasks.push(data);
    }
}
const actions = {
    init(context) {
        console.log('tasks action');
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}