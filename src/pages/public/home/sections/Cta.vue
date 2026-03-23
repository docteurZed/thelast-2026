<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Button } from '@/components/ui/button'

gsap.registerPlugin(ScrollTrigger)

const ctaRef = ref<HTMLElement | null>(null)
const bgRef = ref<HTMLDivElement | null>(null)
const contentRef = ref<HTMLDivElement | null>(null)
let ctx: gsap.Context | null = null

onMounted(() => {
    if (!ctaRef.value || !bgRef.value || !contentRef.value) return

    ctx = gsap.context(() => {
        gsap.to(bgRef.value, {
            y: '20%',
            ease: 'none',
            scrollTrigger: {
                trigger: ctaRef.value,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            },
        })

        gsap.to(contentRef.value, {
            y: '-10%',
            ease: 'none',
            scrollTrigger: {
                trigger: ctaRef.value,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            },
        })
    }, ctaRef.value)
})

onBeforeUnmount(() => {
    ctx?.revert()
})
</script>

<template>
    <section
        ref="ctaRef"
        class="relative fade-section px-8 md:px-16 lg:px-24 py-16 md:py-24 overflow-hidden"
    >
        <div ref="bgRef" class="absolute inset-0">
            <img src="/img/auth.jpg" class="w-full h-full object-cover" />
        </div>

        <div
            class="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/95"
        ></div>

        <div ref="contentRef" class="relative max-w-4xl mx-auto text-center space-y-8">
            <span class="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Inscrivez-vous
            </span>

            <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Vivez pleinement l’expérience
                <span class="text-primary">theLast</span>
            </h2>

            <p class="text-muted-foreground max-w-xl mx-auto">
                Ne manquez pas cette célébration unique marquant la fin d’un parcours exceptionnel
                et l’ouverture vers une nouvelle saison.
            </p>

            <div class="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg">Réserver mon pass</Button>
            </div>
        </div>
    </section>
</template>
