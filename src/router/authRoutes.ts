import { ForgotPassword, Login } from '@/pages/auth'
import type { RouteLocationNormalized } from 'vue-router'

export default [
    {
        path: '/',
        children: [
            {
                path: 'login',
                name: 'login',
                component: Login,
                meta: {
                    title: 'Connexion',
                },
            },
            {
                path: 'forgot-password',
                name: 'forgot-password',
                component: ForgotPassword,
                meta: {
                    title: 'Mot de passe oublié',
                },
            },
            {
                path: 'password-reset/:token',
                name: 'reset-password',
                component: ForgotPassword,
                props: (route: RouteLocationNormalized) => ({
                    token: route.params.token as string,
                    email: route.query.email as string,
                }),
                meta: {
                    title: 'Réinitialisation du mot de passe',
                },
            },
        ],
    },
]
