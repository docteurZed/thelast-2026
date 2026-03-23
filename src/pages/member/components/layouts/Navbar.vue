<script setup lang="ts">
import { Logo, ThemeSwitcher } from '@/components'
import { Bell } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
    <Logo route-name="member.home" />

    <div class="flex items-center gap-4">
        <ThemeSwitcher />

        <button
            class="p-2 hover:bg-card/40 rounded-full cursor-pointer"
            @click="router.push({ name: 'member.notification' })"
        >
            <Bell class="w-5 h-5" />
        </button>
    </div>
</template>
