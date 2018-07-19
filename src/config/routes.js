import Index from '../index/Index';

export const routes = [
    {
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '*',
        component: Index
    }
]