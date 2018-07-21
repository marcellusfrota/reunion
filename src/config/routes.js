import Index from '../components/pages/Index';
import Login from '../components/pages/Login';
import Logout from '../components/pages/Logout';
import Register from '../components/pages/Register';

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