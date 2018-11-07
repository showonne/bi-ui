import Vue from 'vue'

import App from './App'
import router from './router'
import BIUI from '../packages/index.js'
import '../themes/index.css'

Vue.use(BIUI)

import DemoBlock from 'components/demo-block'

Vue.component('demo-block', DemoBlock)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})