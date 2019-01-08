import Vue from 'vue';
import Vuex from 'vuex';
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
        lists: listsModule,
        tasks: tasksModule
    },
});