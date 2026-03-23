import {
    Gallery,
    Home,
    Message,
    MessageDetail,
    Notification,
    NotificationDetail,
    Post,
    Profil,
    Vote,
} from '@/pages/member'

const member = (route: string) => `member.${route}`

export default [
    {
        path: '/member',
        // meta: { requiresAuth: true },
        children: [
            {
                path: 'home',
                name: member('home'),
                component: Home,
                meta: { title: 'Accueil' },
            },
            {
                path: 'profil',
                name: member('profil'),
                component: Profil,
                meta: { title: 'Profil' },
            },
            {
                path: 'notifications',
                name: member('notification'),
                component: Notification,
                meta: { title: 'Notifications' },
            },
            {
                path: 'notifications/:id',
                name: member('notification-detail'),
                component: NotificationDetail,
                meta: { title: 'Notifications' },
            },
            {
                path: 'messages',
                name: member('message'),
                component: Message,
                meta: { title: 'Messages' },
            },
            {
                path: 'messages/:id',
                name: member('message-detail'),
                component: MessageDetail,
                meta: { title: 'Messages' },
            },
            {
                path: 'posts',
                name: member('post'),
                component: Post,
                meta: { title: 'Publications' },
            },
            {
                path: 'votes',
                name: member('vote'),
                component: Vote,
                meta: { title: 'Votes' },
            },
            {
                path: 'gallery',
                name: member('gallery'),
                component: Gallery,
                meta: { title: 'Galerie' },
            },
        ],
    },
]
