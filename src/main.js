import Vue from 'vue'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlay,
  faPause,
  faStepForward,
  faStepBackward,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vuetify from './plugins/vuetify'

library.add(faPlay, faPause, faStepForward, faStepBackward, faTimes, faGithub);

Vue.config.productionTip = false
Vue.component("font-awesome-icon", FontAwesomeIcon);

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
