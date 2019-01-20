import Vue from 'vue';
import Vuex from 'vuex';
import categoriesModule from './modules/categories';
import listsModule from './modules/lists';
import tasksModule from './modules/tasks';
import database from './database'

Vue.use(Vuex);

export default new Vuex.Store({
    state:database.state,
    getters:database.getters,
    mutations:database.mutations,
    actions:database.actions,

    modules: {
        categories: categoriesModule,
        lists: listsModule,
        tasks: tasksModule
    },
});