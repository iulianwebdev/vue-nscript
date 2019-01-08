const state = {
    categories: []
}

const getters = {}
const mutations = {
    load(state, { data }) {
        state.categories.splice(0).push(...Array.from(new Set(state.categories)));
    },
    save(state { data }) {
        state.categories.push(data);
    }
}
const actions = {
    init(context) {
        console.log('categories action');
    },
    new(context, {data}){
        let payload = {data};
        payload.table = 'categories';
        context.dispatch('insert', payload);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}