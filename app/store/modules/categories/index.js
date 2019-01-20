const CATEGORIES_TABLE = 'categories';
const state = {
    categories: [{
        id:1,
        name:'Test',
        description:'Description',
        _order:0,
        created_at: 1111111


    }]
};

const getters = {
    all(state) {
        return state.categories;
    }

};
const mutations = {
    // load(state, { data }) {
    //     state.categories.splice(0).push(...Array.from(new Set(state.categories)));
    // },
    save(state, { data }) {
        state.categories.push(data);
    },
    delete(state, {id}) {
        let indexToDelete = state.categories.findIndex(cat => cat.id === id);
        state.categories.splice(indexToDelete, 1);
    }
};
const actions = {
    init(context) {
        console.log('categories action');
    },
    new(context, {data}){

        let payload = {data};
        let catCount = context.state.categories.length;
        payload.data._order = catCount ? context.state.categories[catCount - 1]._order : 0;
        
        payload.table = CATEGORIES_TABLE;

        context.dispatch('insert', payload, {root: true}).then(id => {
            data.id = id;
            context.commit('save', { data });
            return true;
        }, error => {
            console.log('cat_err',error);
            return false;
        });
    },
    delete(context, {id}){
        let payload = {
            id,
            table: CATEGORIES_TABLE
        };
        // TODO: do logic check if category can be delete here

        context.dispatch('delete', payload, {root: true}).then(id => {
            context.commit('delete', {id});
        }, error => {
            console.log('cat_error', error);
        });
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};