import Index from '../components/Index';
import Login from '../components/Login';
import Register from '../components/Register';

export const routes = [
    {
        path: '/',
        name: 'index',
        components: Index
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '*',
        component: Index
    }
]