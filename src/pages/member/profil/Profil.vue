<script setup lang="ts">
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
    Avatar,
    AvatarFallback,
    Badge,
    Button,
} from '@/components'
import { Calendar, Ticket, Sparkles } from 'lucide-vue-next'
import { MemberWrapper } from '../components'

const student = {
    name: 'Amos',
    email: 'amos@example.com',
    role: 'Étudiant',
    avatar: '',
}
</script>

<template>
    <MemberWrapper title="Profil">
        <div class="space-y-10">
            <section
                class="flex flex-col md:flex-row items-center gap-6 bg-card/70 backdrop-blur-md p-6 rounded-xl"
            >
                <Avatar class="w-20 h-20">
                    <AvatarFallback class="text-2xl font-semibold"
                        >{{ student.name.charAt(0)
                        }}{{ student.name.split(' ')[1]?.charAt(0) || '' }}
                    </AvatarFallback>
                </Avatar>

                <div class="flex-1 space-y-1 text-center">
                    <h1 class="text-2xl font-bold">{{ student.name }}</h1>
                    <p class="text-muted-foreground text-primary">{{ student.role }}</p>
                    <p class="text-sm text-muted-foreground">{{ student.email }}</p>
                </div>

                <div class="flex gap-2 mt-4 md:mt-0">
                    <Button size="sm" variant="outline">Modifier Profil</Button>
                    <Button size="sm">Déconnexion</Button>
                </div>
            </section>
        </div>
    </MemberWrapper>
</template>
