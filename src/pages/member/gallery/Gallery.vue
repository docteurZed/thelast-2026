<script setup lang="ts">
import {
    Card,
    CardContent,
    Input,
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    Button,
} from '@/components'

import { Search, X } from 'lucide-vue-next'
import { ref, computed } from 'vue'
import { MemberWrapper } from '../components'

interface GalleryImage {
    id: number
    url: string
    title: string
    description?: string
}

const images = ref<GalleryImage[]>([
    {
        id: 1,
        url: 'https://picsum.photos/600/400?1',
        title: 'Conférence nationale',
        description: "Moment clé lors de la session d'ouverture.",
    },
    {
        id: 2,
        url: 'https://picsum.photos/600/400?2',
        title: 'Atelier leadership',
    },
    {
        id: 3,
        url: 'https://picsum.photos/600/400?3',
        title: 'Team building',
        description: 'Renforcement de la cohésion d’équipe.',
    },
    {
        id: 4,
        url: 'https://picsum.photos/600/400?4',
        title: 'Session innovation',
        description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium cupiditate at non.',
    },
])

const search = ref('')
const selectedImage = ref<GalleryImage | null>(null)
const openPreview = ref(false)

const filteredImages = computed(() =>
    images.value.filter((img) => img.title.toLowerCase().includes(search.value.toLowerCase())),
)

function openImage(image: GalleryImage) {
    selectedImage.value = image
    openPreview.value = true
}
</script>

<template>
    <MemberWrapper title="Galerie">
        <div class="space-y-6">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div class="relative max-w-md w-full">
                    <Search class="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

                    <Input v-model="search" placeholder="Rechercher une image..." class="pl-9" />
                </div>
            </div>

            <div class="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div
                    v-for="image in filteredImages"
                    :key="image.id"
                    class="group overflow-hidden cursor-pointer hover:shadow-xl transition"
                    @click="openImage(image)"
                >
                    <div class="relative">
                        <img
                            :src="image.url"
                            class="w-full h-56 rounded-xl object-cover group-hover:scale-102 transition duration-300"
                        />
                        <div
                            class="absolute inset-x-0 bottom-0 bg-background/40 backdrop-blur-md p-4 translate-y-0 group-hover:translate-y-0 transition rounded-b-xl"
                        >
                            <p class="text-sm font-semibold leading-tight">
                                {{ image.title }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Sheet v-model:open="openPreview">
                <SheetContent side="bottom" class="h-screen max-w-none p-6 md:p-12 flex flex-col">
                    <div class="flex justify-between items-center mb-4">
                        <SheetHeader>
                            <SheetTitle>
                                {{ selectedImage?.title }}
                            </SheetTitle>
                        </SheetHeader>
                    </div>

                    <div
                        class="flex-1 flex flex-col items-center justify-center gap-4 overflow-y-auto"
                    >
                        <img :src="selectedImage?.url" class="max-h-[80vh] rounded-xl shadow-lg" />

                        <p
                            v-if="selectedImage?.description"
                            class="text-muted-foreground max-w-xl text-center"
                        >
                            {{ selectedImage.description }}
                        </p>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    </MemberWrapper>
</template>
