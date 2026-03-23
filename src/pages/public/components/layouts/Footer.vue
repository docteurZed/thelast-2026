<script setup lang="ts">
const name = import.meta.env.VITE_APP_NAME
</script>

<template>
    <footer class="px-6 md:px-12 lg:px-16 py-12 border-t border-border">
        <div class="mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <span>
                © {{ new Date().getFullYear() }}
                <RouterLink :to="{ name: 'home' }" class="text-primary cursor-pointer font-medium">
                    {{ name }}
                </RouterLink>
                — Tous droits réservés
            </span>

            <div class="flex gap-4">
                <RouterLink to="/" class="hover:underline cursor-pointer transition">
                    Confidentialité
                </RouterLink>

                <RouterLink to="/" class="hover:underline cursor-pointer transition">
                    Contact
                </RouterLink>
            </div>
        </div>
    </footer>
</template>
