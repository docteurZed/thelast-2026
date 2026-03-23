<script setup lang="ts">
import {
    Badge,
    Button,
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components'
import { Check } from 'lucide-vue-next'
</script>

<template>
    <section class="relative px-6 sm:px-12 md:px-16 lg:px-24 py-16 fade-section">
        <div class="max-w-5xl mx-auto text-center space-y-4 mb-16">
            <span class="text-xs uppercase tracking-[0.25em] text-muted-foreground"> Tarifs </span>

            <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Choisissez votre <span class="text-primary">expérience</span>
            </h2>

            <p class="text-muted-foreground max-w-2xl mx-auto">
                Participez à cette célébration unique de fin de parcours. Sélectionnez l’expérience
                qui correspond à votre moment.
            </p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card class="relative bg-card/70 backdrop-blur-md">
                <CardHeader>
                    <CardTitle class="text-xl"> Pass The Last </CardTitle>

                    <CardDescription> Accès à la cérémonie principale </CardDescription>
                </CardHeader>

                <CardContent class="space-y-6">
                    <div class="text-4xl font-bold text-primary">5 000 FCFA</div>

                    <ul class="space-y-2 text-sm text-muted-foreground">
                        <li class="flex gap-2">
                            <Check class="w-4 h-4 text-primary" />
                            Participation à la cérémonie officielle The Last
                        </li>

                        <li class="flex gap-2">
                            <Check class="w-4 h-4 text-primary" />
                            Participation aux moments de reconnaissance
                        </li>
                    </ul>

                    <Button class="w-full"> Réserver ce pass </Button>
                </CardContent>
            </Card>

            <Card
                class="relative border-primary shadow-lg scale-[1.02] bg-card/70 backdrop-blur-md"
            >
                <Badge class="absolute -top-3 left-1/2 -translate-x-1/2"> Recommandé </Badge>

                <CardHeader>
                    <CardTitle class="text-xl"> Pass Expérience Complète </CardTitle>

                    <CardDescription> The Last + soirée Gala exclusive </CardDescription>
                </CardHeader>

                <CardContent class="space-y-6">
                    <div class="text-4xl font-bold text-primary">15 000 FCFA</div>

                    <ul class="space-y-2 text-sm text-muted-foreground">
                        <li class="flex gap-2">
                            <Check class="w-4 h-4 text-primary" />
                            Participation à la cérémonie officielle The Last
                        </li>

                        <li class="flex gap-2">
                            <Check class="w-4 h-4 text-primary" />
                            Participation aux moments de reconnaissance
                        </li>

                        <li class="flex gap-2">
                            <Check class="w-4 h-4 text-primary" />
                            Accès privilégié à la soirée Gala officielle
                        </li>

                        <li class="flex gap-2">
                            <Check class="w-4 h-4 text-primary" />
                            Expérience festive exclusive
                        </li>
                    </ul>

                    <Button class="w-full"> Choisir l’expérience complète </Button>
                </CardContent>
            </Card>
        </div>
    </section>
</template>
