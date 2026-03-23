<script setup lang="ts">
import {
    Logo,
    ThemeSwitcher,
    Button,
    Sheet,
    SheetContent,
    SheetTrigger,
    Separator,
} from '@/components'
import { Menu, Home, Info, Mail } from 'lucide-vue-next'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
</script>

<template>
    <nav
        class="fixed top-4 left-1/2 z-50 w-[90%] max-w-4xl -translate-x-1/2 flex items-center justify-between rounded-xl border border-primary bg-background/90 px-6 py-3 backdrop-blur-md shadow-md"
    >
        <div class="flex items-center space-x-4">
            <Logo class="h-8 w-auto" />
        </div>

        <div class="hidden md:flex items-center space-x-4">
            <Button
                variant="ghost"
                size="sm"
                :class="route.name === 'home' ? 'text-primary' : ''"
                @click="router.push({ name: 'home' })"
                >Accueil</Button
            >
            <Button
                variant="ghost"
                size="sm"
                :class="route.name === 'about' ? 'text-primary' : ''"
                @click="router.push({ name: 'about' })"
                >À propos</Button
            >
            <Button
                variant="ghost"
                size="sm"
                :class="route.name === 'contact' ? 'text-primary' : ''"
                @click="router.push({ name: 'contact' })"
                >Contact</Button
            >
        </div>

        <div class="flex items-center gap-1">
            <ThemeSwitcher />

            <div class="hidden md:block ml-1">
                <Button size="sm" @click="router.push({ name: 'login' })">Connexion</Button>
            </div>

            <div class="md:hidden">
                <Sheet>
                    <SheetTrigger as-child>
                        <Button variant="ghost" size="sm">
                            <Menu class="w-5 h-5" />
                        </Button>
                    </SheetTrigger>

                    <SheetContent
                        side="right"
                        class="w-64 p-4 bg-card/95 border-primary backdrop-blur-md shadow-lg"
                    >
                        <div class="flex flex-col space-y-8 mt-4">
                            <Logo />

                            <div class="flex flex-col space-y-3">
                                <Button
                                    variant="ghost"
                                    @click="router.push({ name: 'home' })"
                                    class="w-full text-left justify-start flex items-center gap-2 px-4 py-3 transition-colors"
                                >
                                    <Home class="w-4 h-4" /> Accueil
                                </Button>
                                <Separator />

                                <Button
                                    variant="ghost"
                                    @click="router.push({ name: 'about' })"
                                    class="w-full text-left justify-start flex items-center gap-2 px-4 py-3 transition-colors"
                                >
                                    <Info class="w-4 h-4" /> À propos
                                </Button>
                                <Separator />

                                <Button
                                    variant="ghost"
                                    @click="router.push({ name: 'contact' })"
                                    class="w-full text-left justify-start flex items-center gap-2 px-4 py-3 transition-colors"
                                >
                                    <Mail class="w-4 h-4" /> Contact
                                </Button>
                            </div>

                            <div>
                                <Button class="w-full" @click="router.push({ name: 'login' })"
                                    >Connexion</Button
                                >
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    </nav>
</template>

<style scoped>
nav {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px) saturate(180%);
    -webkit-backdrop-filter: blur(10px) saturate(180%);

    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
}
</style>
