<script setup lang="ts">
import { Badge } from '@/components'
import { BellDot, Timer } from 'lucide-vue-next'
import { MemberWrapper } from '../components'

const notifications = [
    {
        title: 'Pass Gala confirmé Pass Gala confirmé',
        description: 'Votre pass pour la soirée Gala a été validé avec succès.',
        date: '20 Mar 2026',
        url: 'member.notification-detail',
        unread: true,
        id: 1,
    },
    {
        title: 'Cérémonie The Last',
        description: 'Rappel : la cérémonie officielle commence dans 3 jours.',
        date: '18 Mar 2026',
        url: 'member.notification-detail',
        unread: false,
        id: 2,
    },
    {
        title: 'Mise à jour du programme',
        description: 'Le programme de la soirée Gala a été mis à jour. Consultez les détails.',
        date: '15 Mar 2026',
        url: 'member.notification-detail',
        unread: true,
        id: 3,
    },
]
</script>

<template>
    <MemberWrapper no-padding title="Notifications">
        <section class="divide-y divide-border">
            <RouterLink
                :to="{ name: note.url, params: { id: note.id } }"
                v-for="(note, i) in notifications"
                class="p-4 md:p-6 flex gap-2 md:gap-4 items-center"
                :class="[note.unread ? 'bg-card' : '']"
            >
                <div class="rounded-full bg-primary flex items-center justify-center p-2">
                    <BellDot class="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div class="flex-1 flex justify-between">
                    <div class="mb-2 flex-1">
                        <h3
                            class="md:text-xl font-semibold mb-2"
                            :class="note.unread ? 'text-primary' : ''"
                        >
                            {{ note.title }}
                        </h3>
                        <p class="line-clamp-1 text-sm sm:text-base text-muted-foreground">
                            {{ note.description }}
                        </p>
                    </div>

                    <div class="flex flex-col items-center justify-between">
                        <span
                            class="text-xs sm:text-sm flex gap-1 items-center text-muted-foreground"
                        >
                            <Timer class="w-4 h-4" />
                            {{ note.date }}
                        </span>
                        <Badge
                            v-if="note.unread"
                            variant="outline"
                            class="border-destructive text-destructive"
                            >New
                        </Badge>
                    </div>
                </div>
            </RouterLink>
        </section>
    </MemberWrapper>
</template>
