import { GamepadDirectional, Home, List, MessageCircleMore, User } from 'lucide-vue-next'

export const menu = [
    {
        name: 'Accueil',
        routeName: 'member.home',
        icon: Home,
    },
    {
        name: 'Vote',
        routeName: 'member.vote',
        icon: GamepadDirectional,
    },
    {
        name: 'Publications',
        routeName: 'member.post',
        icon: List,
    },
    {
        name: 'Messages',
        routeName: 'member.message',
        icon: MessageCircleMore,
    },
    {
        name: 'Profil',
        routeName: 'member.profil',
        icon: User,
    },
]
