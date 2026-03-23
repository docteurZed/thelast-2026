import { Forbidden, NotFound } from '@/pages/error'

export default [
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFound,
        meta: {
            title: 'Erreur - 404',
        },
    },
    {
        path: '/forbidden',
        name: 'forbidden',
        component: () => Forbidden,
        meta: {
            title: 'Erreur - 403',
            internalOnly: true,
        },
    },
]
