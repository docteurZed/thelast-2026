<script setup lang="ts">
import { Card, CardContent, Button, Avatar, AvatarFallback } from '@/components'

import { Trophy, Images, CalendarDays, Megaphone } from 'lucide-vue-next'

import { MemberWrapper } from '../components'
import { Greeting, Slider } from './sections'
import { useRouter } from 'vue-router'

interface Winner {
    id: number
    category: string
    name: string
    avatar?: string
}

const router = useRouter()

const winners: Winner[] = [
    {
        id: 1,
        category: 'Meilleur leader',
        name: 'Jean Dupont',
    },
    {
        id: 2,
        category: 'Innovation',
        name: 'Samuel Kossi',
    },
    {
        id: 3,
        category: 'Impact social',
        name: 'Marie Lawson',
    },
]

const importantInfos = [
    {
        title: 'Assemblée Générale',
        description: 'Samedi 12 Avril à 10h',
        icon: CalendarDays,
    },
    {
        title: 'Vote annuel ouvert',
        description: 'Clôture dans 3 jours',
        icon: Trophy,
    },
    {
        title: 'Nouvelle annonce disponible',
        description: 'Consultez les dernières actualités',
        icon: Megaphone,
    },
]
</script>

<template>
    <MemberWrapper>
        <div class="space-y-12">
            <Greeting />

            <Slider />

            <section class="space-y-5">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2 text-lg font-semibold">
                        <Trophy class="text-primary" />
                        Résultats provisoires des votes
                    </div>

                    <Button variant="ghost" size="sm" @click="router.push({ name: 'member.vote' })">
                        Voir tout
                    </Button>
                </div>

                <div class="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory">
                    <Card
                        v-for="winner in winners"
                        :key="winner.id"
                        class="min-w-[196px] snap-start hover:shadow-lg transition cursor-pointer"
                    >
                        <CardContent class="flex flex-col items-center text-center gap-3">
                            <Avatar class="h-16 w-16">
                                <AvatarFallback>
                                    {{ winner.name.slice(0, 2) }}
                                </AvatarFallback>
                            </Avatar>

                            <div class="font-semibold">
                                {{ winner.name }}
                            </div>

                            <div class="text-xs text-primary font-medium">
                                {{ winner.category }}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section>
                <Card
                    class="cursor-pointer hover:shadow-xl transition flex flex-col md:flex-row items-center justify-between gap-4 p-6"
                >
                    <div class="flex items-center gap-4">
                        <div class="p-3 rounded-xl bg-primary/10 text-primary">
                            <Images />
                        </div>

                        <div>
                            <div class="font-semibold">Galerie des événements</div>

                            <p class="text-sm text-muted-foreground">
                                Découvrez les meilleurs moments récents
                            </p>
                        </div>
                    </div>

                    <Button variant="secondary" @click="router.push({ name: 'member.gallery' })">
                        Voir la galerie
                    </Button>
                </Card>
            </section>

            <section class="space-y-5">
                <div class="flex items-center gap-2 text-lg font-semibold">
                    <Megaphone class="text-primary" />
                    Informations importantes
                </div>

                <div class="grid md:grid-cols-3 gap-4">
                    <Card
                        v-for="info in importantInfos"
                        :key="info.title"
                        class="hover:shadow-md transition"
                    >
                        <CardContent class="flex items-start gap-4">
                            <div class="p-2 rounded-lg bg-primary/10 text-primary">
                                <component :is="info.icon" />
                            </div>

                            <div>
                                <div class="font-semibold">
                                    {{ info.title }}
                                </div>

                                <p class="text-sm text-muted-foreground">
                                    {{ info.description }}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    </MemberWrapper>
</template>
