<script setup lang="ts">
import { BackAnimation, Footer, Header } from './layouts'
</script>

<template>
    <div class="relative min-h-screen bg-background overflow-hidden">
        <BackAnimation />

        <Header />

        <div class="relative z-10 flex flex-1 flex-col justify-center lg:px-0 pt-24 lg:py-0">
            <slot />
        </div>

        <Footer />
    </div>
</template>
