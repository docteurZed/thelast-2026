<script setup lang="ts">
import { menu } from '../menu'

const menus = menu
</script>

<template>
    <footer
        class="fixed bottom-0 left-0 right-0 h-16 md:hidden border-t border-border bg-background/90 backdrop-blur-md flex items-center justify-center"
    >
        <div class="grid grid-cols-5 py-2 text-xs font-medium flex-1">
            <RouterLink
                v-for="menu in menus"
                :to="{ name: menu.routeName }"
                class="footer-icon w-full"
                active-class="text-primary"
            >
                <component :is="menu.icon" class="w-5 h-5" />
                <span class="line-clamp-1">{{ menu.name }}</span>
            </RouterLink>
        </div>
    </footer>
</template>

<style scoped>
.footer-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    opacity: 0.6;
    transition: 0.2s ease;
}

.footer-icon:hover {
    opacity: 1;
}
</style>
