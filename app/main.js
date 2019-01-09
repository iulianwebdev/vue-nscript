import Vue from 'nativescript-vue'
// import App from './components/App'
import TaskCategories from './components/TaskCategories'
import VueDevtools from 'nativescript-vue-devtools'
import store from './store'

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

import {TNSFontIcon, fonticon} from 'nativescript-fonticon';

TNSFontIcon.debug = true;
TNSFontIcon.paths = {
  'fa': './assets/font-awesome.css'
};
TNSFontIcon.loadCss();

Vue.filter('fonticon', fonticon);

new Vue({
    store,
    render: h => h('frame', [h(TaskCategories)])
}).$start()
