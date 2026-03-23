<script setup lang="ts">
import { Button, Card, CardContent } from '@/components'
import { Rocket, Sparkles, Users } from 'lucide-vue-next'
</script>

<template>
    <section class="fade-section relative px-6 sm:px-12 md:px-16 lg:px-24 py-16 bg-card/40">
        <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="space-y-4">
                <span
                    class="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground"
                >
                    À propos
                </span>

                <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight">
                    Un événement pour célébrer
                    <span class="text-primary">la fin d'un parcours</span>
                </h2>

                <p class="text-muted-foreground leading-relaxed max-w-prose">
                    The Last marque un moment historique dans la vie de cette promotion. Une
                    célébration unique pour honorer les années de formation, les liens créés, les
                    défis surmontés et les victoires partagées. Cet événement restera un souvenir
                    gravé pour tous les participants.
                </p>

                <div class="flex gap-4 flex-wrap">
                    <Button size="lg"> Découvrir plus </Button>

                    <Button variant="outline" size="lg"> Participer à l'événement </Button>
                </div>
            </div>

            <div class="grid gap-5">
                <Card class="bg-card/70 backdrop-blur-md">
                    <CardContent class="flex gap-4 p-4">
                        <div
                            class="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10"
                        >
                            <Sparkles class="w-5 h-5 text-primary" />
                        </div>

                        <div>
                            <h3 class="font-semibold">Célébration officielle</h3>
                            <p class="text-sm text-muted-foreground">
                                Nous utilisons les technologies modernes pour créer des solutions
                                efficaces et élégantes.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <Card class="bg-card/70 backdrop-blur-md">
                    <CardContent class="flex gap-4 p-4">
                        <div
                            class="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10"
                        >
                            <Users class="w-5 h-5 text-primary" />
                        </div>

                        <div>
                            <h3 class="font-semibold">Moments de retrouvailles</h3>
                            <p class="text-sm text-muted-foreground">
                                Un temps privilégié pour partager ensemble souvenirs, émotions et
                                reconnaissance.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <Card class="bg-card/70 backdrop-blur-md">
                    <CardContent class="flex gap-4 p-4">
                        <div
                            class="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10"
                        >
                            <Rocket class="w-5 h-5 text-primary" />
                        </div>

                        <div>
                            <h3 class="font-semibold">Soirée Gala exclusive</h3>
                            <p class="text-sm text-muted-foreground">
                                Une soirée festive exceptionnelle pour clôturer cette étape
                                marquante en beauté.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </section>
</template>
