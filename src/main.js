import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'

// Import the Auth0 configuration

const app = createApp(App)
app.use(router)
app.use(Vuex)
app.mount('#app')