<script setup lang="ts">
import { useRoute } from 'vue-router'
import { Sidebar, Navbar, Footer, Header } from './layouts'

defineProps({
    noPadding: {
        type: Boolean,
        default: false,
    },
    title: {
        type: String,
        default: '',
    },
})

const route = useRoute()
</script>

<template>
    <div class="min-h-screen flex flex-col bg-background">
        <header
            class="sticky top-0 z-40 border-b border-border bg-card/60 backdrop-blur-md p-4 flex justify-between items-center h-16"
        >
            <Navbar v-if="route.name === 'member.home'" />

            <Header :title="title" v-else />
        </header>

        <div class="relative md:ml-20">
            <Sidebar />

            <main class="flex-1 md:pb-6" :class="noPadding ? 'pb-16' : 'p-6 pb-20'">
                <slot />
            </main>
        </div>

        <Footer />
    </div>
</template>
