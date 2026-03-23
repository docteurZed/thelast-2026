<script setup lang="ts">
const colors = ['#AF9A23', '#2338AF']

const generateDots = () => {
    const dots = []
    for (let i = 0; i < 20; i++) {
        dots.push({
            cx: Math.random() * 100 + '%',
            cy: 100 + Math.random() * 50 + '%',
            r: Math.random() * 3 + 1,
            fill: colors[Math.floor(Math.random() * colors.length)],
            opacity: Math.random() * 0.6 + 0.4,
            dur: Math.random() * 15 + 15,
        })
    }
    return dots
}

const dots = generateDots()
</script>

<template>
    <svg class="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" />
            </filter>
        </defs>

        <circle
            v-for="(dot, i) in dots"
            :key="i"
            :cx="dot.cx"
            :cy="dot.cy"
            :r="dot.r"
            :fill="dot.fill"
            :opacity="dot.opacity"
            filter="url(#blur)"
        >
            <animate
                attributeName="cy"
                :values="`${dot.cy};-10%`"
                :dur="dot.dur + 's'"
                repeatCount="indefinite"
            />
            <animate
                attributeName="opacity"
                :values="`${dot.opacity};0.1;${dot.opacity}`"
                :dur="dot.dur + 's'"
                repeatCount="indefinite"
            />
        </circle>
    </svg>
</template>
