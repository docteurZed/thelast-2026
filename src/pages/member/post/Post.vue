<script setup lang="ts">
import { ref } from 'vue'
import { MemberWrapper } from '../components'
import { CreatePostSheet, PostList } from './components'
import type { Post } from '@/types'
import { Avatar, AvatarFallback } from '@/components'

const members = [
    { id: 1, name: 'Jean Dupont' },
    { id: 2, name: 'Marie Lawson' },
    { id: 3, name: 'Samuel Kossi' },
]

const posts = ref<Post[]>([])
const openCreatePost = ref(false)

const addPost = (postData: any) => {
    posts.value.unshift({
        id: Date.now(),
        author: 'Vous',
        content: postData.content,
        image: postData.image,
        likes: 0,
        liked: false,
        showComments: false,
        comments: [],
        tags: postData.tags,
    })
}
</script>

<template>
    <MemberWrapper title="Publications">
        <div class="max-w-4xl mx-auto space-y-6">
            <div
                class="flex w-full items-center gap-2 md:gap-4 bg-card/70 border border-border p-4 rounded-xl"
            >
                <Avatar class="w-10 h-10">
                    <AvatarFallback class="font-semibold"> JD </AvatarFallback>
                </Avatar>
                <button
                    @click="openCreatePost = true"
                    class="flex-1 p-2 rounded-md text-left cursor-pointer border border-border"
                >
                    Exprimez-vous...
                </button>
            </div>

            <CreatePostSheet
                :members="members"
                v-model:modelValue="openCreatePost"
                @add-post="addPost"
            />

            <PostList :posts="posts" :members="members" />
        </div>
    </MemberWrapper>
</template>
