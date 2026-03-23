<script setup lang="ts">
import { Badge, Button, Card, CardContent, CardHeader, CardTitle } from '@/components'

import { Bell, Timer, ArrowLeft } from 'lucide-vue-next'

import { MemberWrapper } from '../components'
import { useRouter } from 'vue-router'

const router = useRouter()

const notification = {
    title: 'Pass Gala confirmé',
    description: `
Votre pass pour la soirée Gala a été validé avec succès.

📍 Lieu : Salle principale ICC
🕘 Heure : 18h30

Merci de vous présenter avec votre QR code à l'entrée.
Nous vous souhaitons une excellente soirée !
`,
    date: '20 Mar 2026',
}
</script>

<template>
    <MemberWrapper title="Notification">
        <div class="max-w-4xl mx-auto space-y-6">
            <div class="flex flex-row items-center gap-4">
                <div class="rounded-full bg-primary p-3 flex items-center justify-center">
                    <Bell class="w-6 h-6 md:w-10 md:h-10 text-white" />
                </div>

                <div class="flex-1">
                    <h3 class="flex md:text-xl font-semibold items-center gap-2 text-xl">
                        {{ notification.title }}
                    </h3>

                    <div class="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                        <Timer class="w-4 h-4" />
                        {{ notification.date }}
                    </div>
                </div>
            </div>

            <div class="text-muted-foreground whitespace-pre-line leading-relaxed">
                {{ notification.description }}
            </div>
        </div>
    </MemberWrapper>
</template>
