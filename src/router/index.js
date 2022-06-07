import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GestionA from '../views/GestionA.vue'
import GestionF from '../views/GestionF.vue'
import GestionS from '../views/GestionS.vue'
import LoginView from '../views/LoginView.vue'
import AddView from '../views/AddView.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/Login',
        name: 'home',
        component: LoginView
    },
    {
        path: '/SignUp',
        name: 'home',
        component: AddView
    },

    {
        path: '/GestionA',
        name: 'GestionA',
        component: GestionA,
    },
    {
        path: '/GestionF',
        name: 'GestionF',
        component: GestionF,
    },    {
        path: '/GestionS',
        name: 'GestionS',
        component: GestionS,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router