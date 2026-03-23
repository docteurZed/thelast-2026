import { Dashboard } from '@/pages/admin'

const admin = (route: string) => `admin.${route}`

export default [
    {
        path: '/admin',
        meta: { requiresAuth: true, role: ['admin'] },
        children: [
            {
                path: 'dashboard',
                name: admin('dashboard'),
                component: Dashboard,
                meta: { title: 'Tableau de bord' },
            },
        ],
    },
]
