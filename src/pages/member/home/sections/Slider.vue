<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Card, CardContent } from '@/components'

import { Calendar, Ticket, Sparkles } from 'lucide-vue-next'

const slides = [
    {
        icon: Calendar,
        title: 'Cérémonie officielle',
        image: '/img/image-1.jpg',
    },
    {
        icon: Ticket,
        title: 'Accès Gala',
        image: '/img/image-2.jpg',
    },
    {
        icon: Sparkles,
        title: 'Moments inoubliables',
        image: '/img/image-2.jpg',
    },
]

const index = ref(0)

let interval: ReturnType<typeof setInterval>

function nextSlide() {
    index.value = (index.value + 1) % slides.length
}

function startSlider() {
    interval = setInterval(nextSlide, 4000)
}

function stopSlider() {
    clearInterval(interval)
}

onMounted(() => {
    startSlider()
})

onBeforeUnmount(() => {
    stopSlider()
})
</script>

<template>
    <section class="space-y-4">
        <div class="relative h-64 md:h-80 rounded-2xl overflow-hidden">
            <div
                v-for="(slide, i) in slides"
                :key="i"
                class="absolute inset-0 transition-all duration-1000 ease-in-out"
                :class="i === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'"
            >
                <img :src="slide.image" class="w-full h-full object-cover" />

                <div
                    class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                />

                <div
                    class="absolute bottom-4 left-4 flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl text-white text-sm font-medium"
                >
                    <component :is="slide.icon" class="w-5 h-5 text-primary" />

                    {{ slide.title }}
                </div>
            </div>

            <div class="absolute bottom-4 right-4 flex gap-2">
                <div
                    v-for="(_, i) in slides"
                    :key="i"
                    class="h-2 rounded-full transition-all duration-300"
                    :class="i === index ? 'bg-white w-6' : 'bg-white/40 w-2'"
                />
            </div>
        </div>
    </section>
</template>
