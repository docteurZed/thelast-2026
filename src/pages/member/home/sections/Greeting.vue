<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const nameRef = ref<HTMLElement | null>(null)
const emojiRef = ref<HTMLElement | null>(null)

const originalName = 'Amos'
const scrambleChars = 'abcdefghijklmnopqrstuvwxyz'

function scrambleText(el: HTMLElement, text: string, frames = 50, speed = 40) {
    let frame = 0

    function update() {
        let output = ''
        for (let i = 0; i < text.length; i++) {
            if (i < frame / (frames / text.length)) {
                output += text[i]
            } else {
                output += scrambleChars[Math.floor(Math.random() * scrambleChars.length)]
            }
        }

        el.innerText = output
        frame++
        if (frame <= frames) setTimeout(update, speed)
    }

    update()
}

onMounted(() => {
    if (!nameRef.value || !emojiRef.value) return

    gsap.to(nameRef.value, {
        opacity: 0.85,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
    })

    gsap.to(emojiRef.value, {
        y: -6,
        rotate: 8,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
    })

    function loopScramble() {
        scrambleText(nameRef.value!, originalName, 50, 50)
        gsap.delayedCall(6, loopScramble)
    }

    loopScramble()
})
</script>

<template>
    <section class="space-y-2">
        <h1 class="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <span ref="emojiRef">👋</span>
            Bonjour
            <span ref="nameRef" class="text-primary">Amos</span>
        </h1>

        <p class="text-muted-foreground">Votre espace personnel pour suivre votre participation.</p>
    </section>
</template>
