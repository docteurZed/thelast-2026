<script setup lang="ts">
import {
    Button,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Input,
    Label,
    Textarea,
} from '@/components'
import { PublicWrapper } from '../components'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-vue-next'
</script>

<template>
    <PublicWrapper>
        <section class="px-6 sm:px-12 md:px-16 lg:px-24 py-16 md:py-24 fade-section">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div class="space-y-6">
                    <div class="space-y-3">
                        <span class="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                            Contact
                        </span>

                        <h2 class="text-3xl sm:text-4xl font-bold">
                            Une question concernant
                            <span class="text-primary">The Last ?</span>
                        </h2>

                        <p class="text-muted-foreground max-w-md">
                            Notre équipe est disponible pour répondre à vos questions concernant la
                            participation, les pass ou l’organisation de l’événement.
                        </p>
                    </div>

                    <div class="space-y-4">
                        <Card class="bg-card/70 backdrop-blur-md">
                            <CardContent class="flex items-center gap-4 p-4">
                                <div
                                    class="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10"
                                >
                                    <MessageCircle class="w-5 h-5 text-primary" />
                                </div>

                                <div>
                                    <div class="font-medium">WhatsApp</div>

                                    <div class="text-sm text-muted-foreground">
                                        +228 XX XX XX XX
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card class="bg-card/70 backdrop-blur-md">
                            <CardContent class="flex items-center gap-4 p-4">
                                <div
                                    class="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10"
                                >
                                    <Phone class="w-5 h-5 text-primary" />
                                </div>

                                <div>
                                    <div class="font-medium">Téléphone</div>

                                    <div class="text-sm text-muted-foreground">
                                        +228 XX XX XX XX
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card class="bg-card/70 backdrop-blur-md">
                            <CardContent class="flex items-center gap-4 p-4">
                                <div
                                    class="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10"
                                >
                                    <Mail class="w-5 h-5 text-primary" />
                                </div>

                                <div>
                                    <div class="font-medium">Email</div>

                                    <div class="text-sm text-muted-foreground">
                                        contact@thelast-event.com
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <form class="">
                    <h3 class="text-xl font-bold mb-8 md:hidden">Envoyez un message</h3>

                    <div class="space-y-6 md:space-y-8">
                        <div class="space-y-2">
                            <Label>Nom complet</Label>

                            <Input placeholder="Votre nom" />
                        </div>

                        <div class="space-y-2">
                            <Label>Email</Label>

                            <Input type="email" placeholder="Votre email" />
                        </div>

                        <div class="space-y-2">
                            <Label>Message</Label>

                            <Textarea placeholder="Votre message..." class="min-h-[120px]" />
                        </div>

                        <Button class="w-full"> Envoyer le message </Button>
                    </div>
                </form>
            </div>
        </section>
    </PublicWrapper>
</template>
