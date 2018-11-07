import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from 'pages/home'
import ComponentPage from 'pages/comp-preview'

import navInfo from 'nav.config.js'

Vue.use(VueRouter)

const loadComponent = name => () => import(`docs/${name}.md`)

let children = []

for(let i = 0, len = navInfo.length; i < len; i++){
    const nav = navInfo[i];
    const groups = nav.groups;
    
    groups.forEach(group => {
        group.children.forEach(child => {
            children.push({path: child.name, component: loadComponent(child.name)})
        })
    })
}

const routes = [
    {path: '/', component: HomePage},
    {
        path: '/components',
        redirect: '/components/intro',
        component: ComponentPage,
        children
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router