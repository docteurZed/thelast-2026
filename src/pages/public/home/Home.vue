<script setup lang="ts">
import { onMounted } from 'vue'
import { PublicWrapper } from '../components'
import { About, Cta, Hero, Tarif } from './sections'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components'

const partners = [
    {
        name: 'Test',
        logo: '/img/logo.png',
    },
]

onMounted(() => {
    const sections = document.querySelectorAll<HTMLElement>('.fade-section')

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                    observer.unobserve(entry.target)
                }
            })
        },
        {
            threshold: 0.1,
        },
    )

    sections.forEach((section) => observer.observe(section))
})
</script>

<template>
    <PublicWrapper>
        <Hero />

        <About />

        <Tarif />

        <Cta />

        <section class="relative px-6 sm:px-12 md:px-16 lg:px-24 py-16 fade-section">
            <div class="max-w-4xl mx-auto text-center space-y-4 mb-16">
                <span class="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Partenaires
                </span>

                <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                    Ils rendent cette expérience possible
                </h2>

                <p class="text-muted-foreground max-w-xl mx-auto">
                    Merci à nos partenaires pour leur soutien dans la réalisation de cet événement
                    exceptionnel.
                </p>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mx-auto">
                <div
                    v-for="(partner, i) in partners"
                    :key="i"
                    class="grid grid-cols-2 gap-4 sm: grid-cols-4 lg:grid-cols-6 items-center justify-center hover:scale-[1.03] transition"
                >
                    <img
                        :src="partner.logo"
                        :alt="partner.name"
                        class="object-contain transition"
                    />
                </div>
            </div>
        </section>

        <section class="relative px-6 sm:px-12 md:px-16 lg:px-24 py-16 fade-section bg-card/40">
            <div class="max-w-3xl mx-auto text-center space-y-6 mb-16">
                <span class="text-xs uppercase tracking-[0.25em] text-muted-foreground"> FAQ </span>

                <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                    Questions fréquentes
                </h2>

                <p class="text-muted-foreground">
                    Retrouvez ici les réponses aux questions les plus posées concernant l’événement
                    The Last.
                </p>
            </div>

            <Accordion type="single" collapsible class="max-w-3xl mx-auto space-y-4">
                <AccordionItem value="item-1">
                    <AccordionTrigger> Que comprend le Pass The Last ? </AccordionTrigger>

                    <AccordionContent class="text-muted-foreground">
                        Le Pass The Last donne accès à la cérémonie principale de fin de parcours,
                        incluant les moments officiels, la célébration et l’expérience immersive.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>
                        Quelle est la différence avec le Pass Expérience Complète ?
                    </AccordionTrigger>

                    <AccordionContent>
                        Le Pass Expérience Complète inclut l’accès à la cérémonie principale ainsi
                        qu’à la soirée Gala exclusive organisée après l’événement.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger> Puis-je participer uniquement au Gala ? </AccordionTrigger>

                    <AccordionContent>
                        Non. La participation au Gala est réservée aux détenteurs du Pass Expérience
                        Complète.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger> Comment réserver mon pass ? </AccordionTrigger>

                    <AccordionContent>
                        Vous pouvez réserver votre pass directement depuis la section des tarifs en
                        sélectionnant l’offre souhaitée.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                    <AccordionTrigger> Les places sont-elles limitées ? </AccordionTrigger>

                    <AccordionContent>
                        Oui. Le nombre de places est limité afin de garantir une expérience
                        qualitative pour tous les participants.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                    <AccordionTrigger>
                        Puis-je transférer mon pass à une autre personne ?
                    </AccordionTrigger>

                    <AccordionContent>
                        Veuillez contacter l’équipe d’organisation pour toute demande de transfert
                        de participation.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    </PublicWrapper>
</template>

<style scoped>
img {
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    transform: translateZ(0);
}

.fade-section {
    opacity: 0;
    transform: translateY(20px);
    transition:
        opacity 0.8s ease-out,
        transform 0.8s ease-out;
}

.fade-section.visible {
    opacity: 1;
    transform: translateY(0);
}
</style>
