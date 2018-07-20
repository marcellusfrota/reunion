import Index from '../components/Index';
import Login from '../components/Login';
import Logout from '../components/Logout';
import Register from '../components/Register';

export const routes = [
    {
        path: '/',
        name: 'index',
        component: Index
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
        path: '/logout',
        name: 'logout',
        component: Logout
    },
    {
        path: '*',
        component: Index
    }
]