<script setup lang="ts">
import {
    Card,
    CardHeader,
    CardContent,
    Avatar,
    AvatarFallback,
    Button,
    Badge,
    Input,
} from '@/components'
import type { Post } from '@/types'
import { Heart, MessageCircle } from 'lucide-vue-next'
import { ref } from 'vue'

const props = defineProps<{
    post: Post
    members: { id: number; name: string }[]
}>()

const toggleLike = () => {
    props.post.liked = !props.post.liked
    props.post.likes += props.post.liked ? 1 : -1
}

const toggleComments = () => {
    props.post.showComments = !props.post.showComments
}
</script>

<template>
    <Card class="bg-card/70 backdrop-blur-md">
        <CardHeader class="flex items-center gap-3">
            <Avatar class="w-10 h-10">
                <AvatarFallback>{{ post.author.slice(0, 2) }}</AvatarFallback>
            </Avatar>
            <div class="font-semibold">{{ post.author }}</div>
        </CardHeader>

        <CardContent
            :class="post.image ? 'border-t border-border pt-4' : 'border-y border-border py-4'"
        >
            <p class="text-muted-foreground">{{ post.content }}</p>
            <div v-if="post.tags.length" class="flex flex-wrap gap-2 mt-2">
                <Badge v-for="id in post.tags" :key="id" variant="secondary">
                    {{ members.find((m) => m.id === id)?.name }}
                </Badge>
            </div>
        </CardContent>

        <img v-if="post.image" :src="post.image" />

        <CardContent class="space-y-6">
            <div class="flex gap-4 items-center">
                <Button variant="ghost" size="sm" @click="toggleLike">
                    <Heart class="w-4 h-4 mr-1" :class="post.liked ? 'text-destructive' : ''" />
                    {{ post.likes }}
                </Button>
                <Button variant="ghost" size="sm" @click="toggleComments">
                    <MessageCircle class="w-4 h-4 mr-1" />
                    {{ post.comments.length }}
                </Button>
            </div>

            <transition
                enter-active-class="transition duration-300 ease-out"
                leave-active-class="transition duration-200 ease-in"
                enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-96"
                leave-from-class="opacity-100 max-h-96"
                leave-to-class="opacity-0 max-h-0"
            >
                <div v-if="post.showComments" class="space-y-2 overflow-hidden">
                    <div v-for="comment in post.comments" :key="comment.id" class="flex gap-2">
                        <Avatar>
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                            <h4 class="font-semibold">{{ comment.author }}</h4>
                            <p class="text-sm text-muted-foreground">{{ comment.text }}</p>
                        </div>
                    </div>
                </div>
            </transition>

            <div class="flex gap-2">
                <Input placeholder="Ajouter un commentaire..." />
                <Button size="sm">Envoyer</Button>
            </div>
        </CardContent>
    </Card>
</template>
