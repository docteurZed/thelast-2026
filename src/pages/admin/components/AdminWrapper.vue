<script setup lang="ts">
import { SidebarInset, SidebarProvider } from '@/components'

import { Header, Sidebar } from './layouts'
import { LayoutDashboard } from 'lucide-vue-next'

import type { SidebarGroupData } from '@/types'

const props = defineProps<{
    title: string
}>()

const data: SidebarGroupData[] = [
    {
        items: [
            {
                title: 'Tableau de bord',
                icon: LayoutDashboard,
                routeName: 'admin.dashboard',
            },
        ],
    },
]
</script>

<template>
    <div class="flex sm:hidden items-center justify-center h-screen w-full px-6">
        <div class="flex flex-col items-center text-center space-y-3">
            <h2 class="text-xl font-semibold">Accès limité sur petit écran</h2>

            <p class="text-muted-foreground max-w-sm">
                Cette application est optimisée pour les écrans d’ordinateur ou tablette. Pour
                garantir une navigation fluide et l’accès complet aux fonctionnalités, veuillez
                utiliser un appareil avec un écran plus large.
            </p>
        </div>
    </div>

    <div class="hidden sm:block">
        <SidebarProvider>
            <Sidebar :data="data" />

            <SidebarInset>
                <Header :title="title" />

                <div class="p-4">
                    <slot />
                </div>
            </SidebarInset>
        </SidebarProvider>
    </div>
</template>
