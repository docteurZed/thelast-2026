<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components'
import { menu } from '../menu'

const menus = menu
</script>

<template>
    <aside
        class="hidden md:flex flex-col w-20 min-h-[calc(100vh-64px)] border-r border-border bg-card/40 backdrop-blur-md fixed left-0 overflow-y-auto"
    >
        <TooltipProvider>
            <nav class="flex flex-col items-center gap-12 pt-8">
                <Tooltip v-for="menu in menus">
                    <TooltipTrigger as-child>
                        <RouterLink
                            :to="{ name: menu.routeName }"
                            class="sidebar-icon"
                            active-class="text-primary"
                        >
                            <component :is="menu.icon" class="w-5 h-5" />
                        </RouterLink>
                    </TooltipTrigger>

                    <TooltipContent side="right">
                        {{ menu.name }}
                    </TooltipContent>
                </Tooltip>
            </nav>
        </TooltipProvider>
    </aside>
</template>

<style scoped>
.sidebar-icon {
    opacity: 0.6;
    transition: 0.2s ease;
}

.sidebar-icon:hover {
    opacity: 1;
}
</style>
