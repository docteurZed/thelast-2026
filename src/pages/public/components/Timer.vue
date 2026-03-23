<script setup lang="ts">
import { Card, CardContent } from '@/components'
import { ref, onMounted, onUnmounted } from 'vue'

const targetDate = new Date('2026-06-19T21:00:00')

const timeLeft = ref({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
})

let timer: number

const updateCountdown = () => {
    const now = new Date().getTime()
    const diff = targetDate.getTime() - now

    if (diff <= 0) return

    timeLeft.value = {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    }
}

onMounted(() => {
    updateCountdown()
    timer = window.setInterval(updateCountdown, 1000)
})

onUnmounted(() => clearInterval(timer))
</script>

<template>
    <div class="grid grid-cols-4 gap-2">
        <Card class="bg-card/70 backdrop-blur-md p-2">
            <div class="flex flex-col items-center">
                <span class="md:text-lg font-bold text-primary">
                    {{ timeLeft.days }}
                </span>
                <span class="text-sm uppercase tracking-wide text-muted-foreground"> Jours </span>
            </div>
        </Card>

        <Card class="bg-card/70 backdrop-blur-md p-2">
            <div class="flex flex-col items-center">
                <span class="md:text-lg font-bold text-primary">
                    {{ timeLeft.hours }}
                </span>
                <span class="text-sm uppercase tracking-wide text-muted-foreground"> Heures </span>
            </div>
        </Card>

        <Card class="bg-card/70 backdrop-blur-md p-2">
            <div class="flex flex-col items-center">
                <span class="md:text-lg font-bold text-primary">
                    {{ timeLeft.minutes }}
                </span>
                <span class="text-sm uppercase tracking-wide text-muted-foreground"> Minutes </span>
            </div>
        </Card>

        <Card class="bg-card/70 backdrop-blur-md p-2">
            <div class="flex flex-col items-center">
                <span class="md:text-lg font-bold text-primary">
                    {{ timeLeft.seconds }}
                </span>
                <span class="text-sm uppercase tracking-wide text-muted-foreground">
                    Secondes
                </span>
            </div>
        </Card>
    </div>
</template>
