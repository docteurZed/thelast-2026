import {
    createRouter,
    createWebHistory,
    type RouteLocationNormalized,
    type Router,
    type NavigationGuardNext,
} from 'vue-router'
import authRoutes from './authRoutes'
import publicRoutes from './publicRoutes'
import adminRoutes from './adminRoutes'
import errorRoutes from './errorRoutes'
import { useAuthStore } from '@/stores'
import memberRoutes from './memberRoutes'

const routes = [...adminRoutes, ...authRoutes, ...errorRoutes, ...publicRoutes, ...memberRoutes]

const name = import.meta.env.VITE_APP_NAME

interface RouteMeta {
    title?: string
    requiresAuth?: boolean
    role?: string[]
    internalOnly?: boolean
}

export function setupRouterTitle(router: Router) {
    router.afterEach((to: RouteLocationNormalized) => {
        const meta = to.meta as RouteMeta
        if (meta?.title) {
            document.title = `${name} | ${meta.title}`
        }
    })
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

router.beforeEach(async (to, from, next) => {
    const auth = useAuthStore()

    if (auth.loadingUser) {
        await auth.loadUser()
    }

    const isAuthenticated = auth.isLogged()
    const meta = to.meta as RouteMeta

    if (meta.requiresAuth && !isAuthenticated) {
        return next({ name: 'login' })
    }

    if (isAuthenticated && to.name && ['login', 'forgot-password'].includes(to.name as string)) {
        return next({ name: 'admin.dashboard' })
    }

    if (meta.role && meta.role.length > 0) {
        const userRoleName = auth.user?.role ?? ''
        const hasAccess = meta.role.includes(userRoleName)
        if (!hasAccess) {
            return next({ name: 'forbidden' })
        }
    }

    if (meta.internalOnly && !from.name) {
        return next({ name: 'not-found' })
    }

    return next()
})

setupRouterTitle(router)

export default router
