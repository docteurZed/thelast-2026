<script setup lang="ts">
import { ThemeSwitcher } from '@/components'
import { ArrowLeft, Bell } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps({
    title: String,
})
</script>

<template>
    <button class="p-2 hover:bg-card/40 rounded-full cursor-pointer" @click="router.back">
        <ArrowLeft class="w-5 h-5" />
    </button>

    <h3 class="text-lg font-semibold">{{ title }}</h3>

    <button
        class="p-2 hover:bg-card/40 rounded-full cursor-pointer"
        @click="router.push({ name: 'member.notification' })"
    >
        <Bell class="w-5 h-5" />
    </button>

    <div class="hidden">
        <ThemeSwitcher />
    </div>
</template>
