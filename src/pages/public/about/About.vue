<script setup lang="ts">
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
    Badge,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components'
import { PublicWrapper } from '../components'
import { Calendar, MapPin, Quote, Sparkles } from 'lucide-vue-next'

const gallery = ['/img/image-1.jpg', '/img/image-2.jpg', '/img/image-1.jpg', '/img/image-2.jpg']
</script>

<template>
    <PublicWrapper>
        <section class="px-6 sm:px-12 md:px-16 lg:px-24 py-16 md:py-24 fade-section">
            <div class="max-w-4xl mx-auto text-center space-y-6">
                <span class="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    À propos de l’événement
                </span>

                <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                    Une célébration pour marquer
                    <span class="text-primary">la fin d’un parcours exceptionnel</span>
                </h1>

                <p class="text-muted-foreground max-w-2xl mx-auto">
                    The Last est une cérémonie unique organisée pour honorer une promotion arrivée
                    au terme de plusieurs années de formation, de défis surmontés et d’expériences
                    partagées. Cet événement représente un moment historique, un temps de
                    reconnaissance et une opportunité de célébrer ensemble cette étape importante.
                </p>
            </div>
        </section>

        <section class="px-6 sm:px-12 md:px-16 lg:px-24 py-16 fade-section bg-card/40">
            <div class="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
                <Card class="bg-card/70 backdrop-blur-md hover:scale-[1.02] transition">
                    <CardHeader class="flex flex-row items-center gap-3 pb-2">
                        <div
                            class="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10"
                        >
                            <Calendar class="w-5 h-5 text-primary" />
                        </div>

                        <CardTitle> Date de l’événement </CardTitle>
                    </CardHeader>

                    <CardContent class="text-muted-foreground text-sm"> 20 Juin 2026 </CardContent>
                </Card>

                <Card class="bg-card/70 backdrop-blur-md hover:scale-[1.02] transition">
                    <CardHeader class="flex flex-row items-center gap-3 pb-2">
                        <div
                            class="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10"
                        >
                            <MapPin class="w-5 h-5 text-primary" />
                        </div>

                        <CardTitle> Lieu de la cérémonie </CardTitle>
                    </CardHeader>

                    <CardContent class="text-muted-foreground text-sm">
                        Salle principale ICC
                    </CardContent>
                </Card>

                <Card
                    class="relative border-primary shadow-lg scale-[1.02] bg-card/70 backdrop-blur-md"
                >
                    <CardHeader class="flex flex-row items-center gap-3 pb-2">
                        <div
                            class="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10"
                        >
                            <Sparkles class="w-5 h-5 text-primary" />
                        </div>

                        <CardTitle> Programme officiel </CardTitle>
                    </CardHeader>

                    <CardContent class="text-muted-foreground text-sm space-y-1">
                        <div>Cérémonie de clôture de promotion</div>

                        <div>Remise de distinctions</div>

                        <div>Soirée Gala exclusive</div>
                    </CardContent>
                </Card>
            </div>
        </section>

        <section class="px-6 sm:px-12 md:px-16 lg:px-24 py-16 fade-section">
            <div class="max-w-4xl mx-auto text-center space-y-6 mb-12">
                <span class="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Témoignages
                </span>

                <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold">Ils en parlent déjà</h2>
            </div>

            <div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <Card class="bg-card/70 backdrop-blur-md">
                    <CardContent class="pt-6 space-y-5 relative">
                        <Quote class="absolute top-4 right-4 w-6 h-6 text-primary/30" />

                        <p class="text-muted-foreground italic leading-relaxed">
                            “Participer à The Last représente pour moi l’aboutissement d’un parcours
                            rempli de défis, de croissance et de rencontres qui ont marqué ma vie.”
                        </p>

                        <div class="flex items-center gap-3">
                            <Avatar>
                                <AvatarImage src="/img/avatar1.jpg" />

                                <AvatarFallback> SK </AvatarFallback>
                            </Avatar>

                            <div>
                                <div class="font-medium">Samuel K.</div>

                                <div class="text-xs text-muted-foreground">Participant</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card class="bg-card/70 backdrop-blur-md">
                    <CardContent class="pt-6 space-y-5 relative">
                        <Quote class="absolute top-4 right-4 w-6 h-6 text-primary/30" />

                        <p class="text-muted-foreground italic leading-relaxed">
                            “Participer à The Last représente pour moi l’aboutissement d’un parcours
                            rempli de défis, de croissance et de rencontres qui ont marqué ma vie.”
                        </p>

                        <div class="flex items-center gap-3">
                            <Avatar>
                                <AvatarImage src="/img/avatar1.jpg" />

                                <AvatarFallback> SK </AvatarFallback>
                            </Avatar>

                            <div>
                                <div class="font-medium">Samuel K.</div>

                                <div class="text-xs text-muted-foreground">Participant</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card class="bg-card/70 backdrop-blur-md">
                    <CardContent class="pt-6 space-y-5 relative">
                        <Quote class="absolute top-4 right-4 w-6 h-6 text-primary/30" />

                        <p class="text-muted-foreground italic leading-relaxed">
                            “Cette soirée restera gravée comme l’un des moments les plus forts de
                            notre parcours ensemble.”
                        </p>

                        <div class="flex items-center gap-3">
                            <Avatar>
                                <AvatarImage src="/img/avatar3.jpg" />

                                <AvatarFallback> DM </AvatarFallback>
                            </Avatar>

                            <div>
                                <div class="font-medium">David M.</div>

                                <div class="text-xs text-muted-foreground">Participant</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>

        <section class="py-16 overflow-hidden fade-section bg-card/40">
            <div class="text-center mb-12 space-y-4">
                <span class="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Souvenirs
                </span>

                <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold">
                    Revivez les moments forts
                </h2>
            </div>

            <div class="marquee-wrapper">
                <div class="marquee-track">
                    <img v-for="(img, i) in gallery" :key="i" :src="img" class="gallery-img" />

                    <img
                        v-for="(img, i) in gallery"
                        :key="'dup' + i"
                        :src="img"
                        class="gallery-img"
                    />
                </div>
            </div>
        </section>
    </PublicWrapper>
</template>

<style scoped>
.marquee-wrapper {
    overflow: hidden;
}

.marquee-track {
    display: flex;
    gap: 1.5rem;
    width: max-content;
    animation: scrollX 30s linear infinite;
}

.gallery-img {
    height: 220px;
    border-radius: 1rem;
    object-fit: cover;
    transition: transform 0.4s ease;
}

.gallery-img:hover {
    transform: scale(1.02);
}

@keyframes scrollX {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}
</style>
