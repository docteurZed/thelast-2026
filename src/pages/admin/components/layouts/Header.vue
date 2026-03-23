<script setup lang="ts">
import {
    Avatar,
    Separator,
    SidebarTrigger,
    ThemeSwitcher,
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from '@/components'
import { useAuthStore } from '@/stores'

import { LogOut } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import { toast } from 'vue-sonner'

const router = useRouter()
const auth = useAuthStore()

const props = defineProps<{
    title: string
}>()

async function logout() {
    try {
        await auth.logout()
        router.push({ name: 'login' })
        toast.success('Déconnexion réussie')
    } catch (error) {
        console.error(error)
        toast.error('Erreur lors de la déconnexion')
    }
}
</script>

<template>
    <header class="flex items-center justify-between h-16 border-b px-4">
        <div class="flex shrink-0 items-center gap-2">
            <SidebarTrigger class="-ml-1 md:hidden" />
            <Separator
                orientation="vertical"
                class="mr-2 data-[orientation=vertical]:h-4 md:hidden"
            />
            <span class="font-semibold">
                {{ title }}
            </span>
        </div>

        <div class="flex items-center gap-4">
            <ThemeSwitcher />

            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar class="cursor-pointer">
                        <span class="font-semibold">JD</span>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem class="text-destructive" @click="logout">
                        <LogOut />
                        Déconnexion
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </header>
</template>
