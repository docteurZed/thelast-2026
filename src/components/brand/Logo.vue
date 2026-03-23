<script setup lang="ts">
import { GalleryVerticalEnd } from 'lucide-vue-next'

const name = import.meta.env.VITE_APP_NAME

defineProps({
    routeName: {
        type: String,
        default: 'home',
    },
})
</script>

<template>
    <RouterLink :to="{ name: routeName }" class="flex items-center gap-2 font-bold">
        <span
            class="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md"
        >
            <GalleryVerticalEnd class="size-4" />
        </span>
        <span class="text-primary text-lg">
            {{ name }}
        </span>
    </RouterLink>
</template>
