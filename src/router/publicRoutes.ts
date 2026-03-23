import { About, Contact, Home } from '@/pages/public'

export default [
    {
        path: '/',
        children: [
            {
                path: '',
                name: 'home',
                component: Home,
            },
            {
                path: 'about',
                name: 'about',
                component: About,
            },
            {
                path: 'contact',
                name: 'contact',
                component: Contact,
            },
        ],
    },
]
