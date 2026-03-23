<script setup lang="ts">
import {
    Avatar,
    AvatarFallback,
    Badge,
    Input,
    Button,
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components'

import { Timer, Plus, Search } from 'lucide-vue-next'

import { MemberWrapper } from '../components'
import { RouterLink } from 'vue-router'
import { ref, computed } from 'vue'

/*
|--------------------------------------------------------------------------
| Conversations existantes
|--------------------------------------------------------------------------
*/

const searchConversation = ref('')

const notifications = ref([
    {
        title: 'Jean Dupont',
        description: 'Votre pass pour la soirée Gala a été validé.',
        date: '20 Mar 2026',
        url: 'member.message-detail',
        unread: true,
        id: 1,
    },
    {
        title: 'Marie Lawson',
        description: 'Rappel : la cérémonie officielle commence bientôt.',
        date: '18 Mar 2026',
        url: 'member.message-detail',
        unread: false,
        id: 2,
    },
    {
        title: 'Samuel Kossi',
        description: 'Programme Gala mis à jour.',
        date: '15 Mar 2026',
        url: 'member.message-detail',
        unread: true,
        id: 3,
    },
])

const filteredConversations = computed(() =>
    notifications.value.filter((n) =>
        n.title.toLowerCase().includes(searchConversation.value.toLowerCase()),
    ),
)

/*
|--------------------------------------------------------------------------
| Liste des membres (sheet)
|--------------------------------------------------------------------------
*/

const searchMembers = ref('')

const members = ref([
    { id: 1, name: 'Jean Dupont' },
    { id: 2, name: 'Marie Lawson' },
    { id: 3, name: 'Samuel Kossi' },
    { id: 4, name: 'Clarisse Agbo' },
])

const filteredMembers = computed(() =>
    members.value.filter((m) => m.name.toLowerCase().includes(searchMembers.value.toLowerCase())),
)
</script>

<template>
    <MemberWrapper no-padding title="Messages">
        <div class="flex gap-2 p-4 border-b border-border">
            <div class="relative flex-1">
                <Search
                    class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                />
                <Input
                    v-model="searchConversation"
                    placeholder="Rechercher une conversation..."
                    class="pl-9"
                />
            </div>

            <Sheet>
                <SheetTrigger as-child>
                    <Button size="icon" variant="outline">
                        <Plus class="w-4 h-4" />
                    </Button>
                </SheetTrigger>

                <SheetContent side="right">
                    <SheetHeader>
                        <SheetTitle> Nouveau message </SheetTitle>
                    </SheetHeader>

                    <div class="relative m-4">
                        <Search
                            class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                        />
                        <Input
                            v-model="searchMembers"
                            placeholder="Rechercher un membre..."
                            class="pl-9"
                        />
                    </div>

                    <div class="flex flex-col divide-y divide-border">
                        <RouterLink
                            v-for="member in filteredMembers"
                            :key="member.id"
                            :to="{ name: 'member.message-detail', params: { id: member.id } }"
                            class="flex items-center gap-3 p-3 hover:bg-card transition"
                        >
                            <Avatar class="w-10 h-10">
                                <AvatarFallback>
                                    {{ member.name.slice(0, 2).toUpperCase() }}
                                </AvatarFallback>
                            </Avatar>

                            <span class="font-medium">
                                {{ member.name }}
                            </span>
                        </RouterLink>
                    </div>
                </SheetContent>
            </Sheet>
        </div>

        <section class="flex flex-col divide-y divide-border">
            <RouterLink
                v-for="note in filteredConversations"
                :key="note.id"
                :to="{ name: note.url, params: { id: note.id } }"
                class="flex gap-4 md:gap-6 items-center p-4 md:p-6 transition hover:bg-card/60"
                :class="note.unread ? 'bg-card' : ''"
            >
                <Avatar class="w-12 h-12">
                    <AvatarFallback class="font-semibold">
                        {{ note.title.slice(0, 2).toUpperCase() }}
                    </AvatarFallback>
                </Avatar>

                <div class="flex-1 flex justify-between gap-2 md:gap-4">
                    <div class="flex-1">
                        <h3 class="font-semibold md:text-lg">
                            {{ note.title }}
                        </h3>

                        <p class="text-sm md:text-base text-muted-foreground line-clamp-1">
                            {{ note.description }}
                        </p>
                    </div>

                    <div class="flex flex-col items-end justify-between gap-2">
                        <span
                            class="text-xs sm:text-sm flex items-center gap-1"
                            :class="note.unread ? 'text-primary' : 'text-muted-foreground'"
                        >
                            <Timer class="w-4 h-4" />
                            {{ note.date }}
                        </span>

                        <Badge
                            v-if="note.unread"
                            variant="outline"
                            class="text-primary border-primary"
                        >
                            2
                        </Badge>
                    </div>
                </div>
            </RouterLink>
        </section>
    </MemberWrapper>
</template>
