import {createApp,h} from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router';


import PaginaInicio from './components/PaginaInicio.vue';
import PaginaCanciones from './components/PaginaCanciones.vue';

const routes = [
    {
        path: '/',
        name: 'PaginaInicio',
        component: PaginaInicio,
    },
    {
        path: '/PaginaCanciones',
        name: 'PaginaCanciones',
        component: PaginaCanciones,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp({
    render: () => h(App)
})
app.use(router)
app.mount('#app')

export default router;
