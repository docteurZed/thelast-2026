<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Timer } from '../../components'

gsap.registerPlugin(ScrollTrigger)

const images = [
    '/img/image-1.jpg',
    '/img/image-2.jpg',
    '/img/image-1.jpg',
    '/img/image-2.jpg',
    '/img/image-1.jpg',
    '/img/image-2.jpg',
]

const sectionRef = ref<HTMLElement | null>(null)
const pinWrapRef = ref<HTMLElement | null>(null)
const imageRefs = ref<(HTMLElement | null)[]>([])
const stickyTextRef = ref<HTMLElement | null>(null)

const setImageRef = (el: HTMLElement | null, index: number) => {
    imageRefs.value[index] = el
}

let ctx: gsap.Context | null = null

onMounted(() => {
    const imgs = imageRefs.value.filter((el): el is HTMLElement => el !== null)
    if (!sectionRef.value || !pinWrapRef.value || imgs.length === 0) return

    ctx = gsap.context(() => {
        imgs.forEach((img, i) => {
            gsap.set(img, {
                opacity: i === 0 ? 1 : 0,
                scale: i === 0 ? 1 : 1.04,
                zIndex: i === 0 ? 1 : 0,
                willChange: 'transform, opacity',
                transformOrigin: 'center center',
                backfaceVisibility: 'hidden',
            })
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.value,
                start: 'top top',
                end: `+=${(imgs.length - 1) * 120}%`,
                scrub: 1.2,
                pin: pinWrapRef.value,
                pinSpacing: true,
                anticipatePin: 1,
            },
        })

        imgs.forEach((img, i) => {
            if (i === imgs.length - 1) return

            const next = imgs[i + 1]
            if (!next) return

            const seg = 1 / (imgs.length - 1)
            const pos = i * seg

            tl.to(
                img,
                {
                    opacity: 0,
                    scale: 0.97,
                    zIndex: 0,
                    duration: seg,
                    ease: 'power2.inOut',
                },
                pos,
            )

            tl.to(
                next,
                {
                    opacity: 1,
                    scale: 1,
                    zIndex: i + 2,
                    duration: seg,
                    ease: 'power2.inOut',
                },
                pos,
            )
        })

        if (stickyTextRef.value) {
            gsap.to(stickyTextRef.value, {
                y: -30,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.value,
                    start: 'top top',
                    end: `+=${(imgs.length - 1) * 120}%`,
                    scrub: 2.5,
                },
            })
        }
    }, sectionRef.value)
})

onBeforeUnmount(() => {
    ctx?.revert()
})
</script>

<template>
    <section ref="sectionRef" class="relative w-full" aria-label="Storytelling hero section">
        <div
            ref="pinWrapRef"
            class="relative w-full h-svh grid grid-cols-1 md:grid-cols-2 gap-4 overflow-hidden"
        >
            <div class="relative z-10 flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24">
                <div ref="stickyTextRef" class="space-y-4 max-w-sm">
                    <span
                        class="block text-xs font-semibold tracking-[0.25em] text-muted-foreground uppercase"
                    >
                        theLast
                    </span>

                    <h2
                        class="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight"
                    >
                        Une dernière
                        <span class="text-primary">festivité</span>
                        ensemble
                    </h2>

                    <p class="text-sm md:text-base text-muted-foreground leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eligendi,
                        doloremque amet ipsa exercitationem beatae nesciunt, similique aliquam fugit
                        velit architecto nobis.
                    </p>

                    <Timer />
                </div>
            </div>

            <div class="relative h-[56vw] max-h-[55vh] md:h-full md:max-h-none overflow-hidden">
                <img
                    v-for="(src, i) in images"
                    :key="src + i"
                    :src="src"
                    :alt="`Image storytelling ${i + 1}`"
                    loading="lazy"
                    draggable="false"
                    class="absolute inset-0 w-full h-full object-cover shadow pointer-events-none select-none"
                    :ref="(el) => setImageRef(el as HTMLElement | null, i)"
                />

                <div
                    class="absolute inset-y-0 left-0 w-16 lg:w-24 bg-gradient-to-r from-background to-transparent hidden md:block pointer-events-none z-10"
                    aria-hidden="true"
                />

                <div
                    class="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:hidden pointer-events-none z-10"
                    aria-hidden="true"
                />

                <div
                    class="absolute bottom-4 right-4 flex items-center gap-1.5 pointer-events-none z-10"
                    aria-hidden="true"
                >
                    <span
                        v-for="(_, i) in images"
                        :key="i"
                        class="block w-1 h-1 rounded-full bg-white/50"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
img {
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    transform: translateZ(0);
}
</style>
