<script setup lang="ts">
import {
    Card,
    CardHeader,
    CardContent,
    Avatar,
    AvatarFallback,
    Input,
    Button,
    Badge,
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from '@/components'

import { Check, Crown, Users, Sparkles, HeartHandshake, Search } from 'lucide-vue-next'

import { ref, computed } from 'vue'
import { MemberWrapper } from '../components'

interface Member {
    id: number
    name: string
}

interface Category {
    id: number
    name: string
    icon: any
}

const members: Member[] = [
    { id: 1, name: 'Jean Dupont' },
    { id: 2, name: 'Marie Lawson' },
    { id: 3, name: 'Samuel Kossi' },
    { id: 4, name: 'Clarisse Mensah' },
    { id: 5, name: 'David Lawson' },
]

const categories: Category[] = [
    { id: 1, name: 'Meilleur leader', icon: Crown },
    { id: 2, name: 'Esprit d’équipe', icon: Users },
    { id: 3, name: 'Innovation', icon: Sparkles },
    { id: 4, name: 'Impact social', icon: HeartHandshake },
]

const openVoteSheet = ref(false)
const activeCategory = ref<Category | null>(null)

const searchMember = ref('')
const searchCategory = ref('')

const myVotes = ref<Record<number, number>>({})

const filteredMembers = computed(() =>
    members.filter((member) =>
        member.name.toLowerCase().includes(searchMember.value.toLowerCase()),
    ),
)

const filteredCategories = computed(() =>
    categories.filter((category) =>
        category.name.toLowerCase().includes(searchCategory.value.toLowerCase()),
    ),
)

function openCategoryVote(category: Category) {
    activeCategory.value = category
    openVoteSheet.value = true
}

function selectVote(memberId: number) {
    if (!activeCategory.value) return

    myVotes.value[activeCategory.value.id] = memberId
}

function confirmVote() {
    openVoteSheet.value = false
}
</script>

<template>
    <MemberWrapper title="Vote">
        <div class="space-y-6">
            <div class="relative max-w-md">
                <Search class="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

                <Input
                    v-model="searchCategory"
                    placeholder="Rechercher une catégorie..."
                    class="pl-9"
                />
            </div>

            <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                <Card
                    v-for="category in filteredCategories"
                    :key="category.id"
                    class="group cursor-pointer transition hover:-translate-y-1 hover:shadow-xl border-muted/40"
                    @click="openCategoryVote(category)"
                >
                    <CardHeader class="flex flex-row justify-between items-start">
                        <div class="flex gap-3 items-center">
                            <div
                                class="p-2 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition"
                            >
                                <component :is="category.icon" />
                            </div>

                            <div class="font-semibold text-base">
                                {{ category.name }}
                            </div>
                        </div>

                        <Badge
                            v-if="myVotes[category.id]"
                            variant="secondary"
                            class="animate-in fade-in zoom-in"
                        >
                            voté
                        </Badge>
                    </CardHeader>

                    <CardContent>
                        <div class="flex -space-x-2">
                            <Avatar
                                v-for="member in members.slice(0, 3)"
                                :key="member.id"
                                class="border border-border"
                            >
                                <AvatarFallback>
                                    {{ member.name.slice(0, 2) }}
                                </AvatarFallback>
                            </Avatar>
                        </div>

                        <p class="text-xs text-muted-foreground mt-3">
                            Cliquez pour voter dans cette catégorie
                        </p>
                    </CardContent>
                </Card>
            </div>

            <Sheet v-model:open="openVoteSheet">
                <SheetContent side="bottom" class="h-screen max-w-none p-6 md:p-12">
                    <div class="flex flex-col h-full">
                        <SheetHeader>
                            <SheetTitle class="flex gap-2 items-center">
                                <component :is="activeCategory?.icon" />
                                {{ activeCategory?.name }}
                            </SheetTitle>
                        </SheetHeader>

                        <Input
                            v-model="searchMember"
                            placeholder="Rechercher un membre..."
                            class="mt-4"
                        />

                        <div class="flex-1 overflow-y-auto mt-6 space-y-2">
                            <div
                                v-for="member in filteredMembers"
                                :key="member.id"
                                class="p-2 rounded-lg hover:bg-muted transition cursor-pointer flex justify-between items-center"
                                @click="selectVote(member.id)"
                            >
                                <div class="flex items-center gap-3">
                                    <Avatar>
                                        <AvatarFallback>
                                            {{ member.name.slice(0, 2) }}
                                        </AvatarFallback>
                                    </Avatar>
                                    {{ member.name }}
                                </div>

                                <Check
                                    v-if="myVotes[activeCategory?.id!] === member.id"
                                    class="text-primary"
                                />
                            </div>
                        </div>

                        <div class="border-t pt-4">
                            <Button class="w-full text-base py-6" @click="confirmVote">
                                Confirmer mon vote
                            </Button>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    </MemberWrapper>
</template>
