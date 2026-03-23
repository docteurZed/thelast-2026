<script setup lang="ts">
import type { Member, Post } from '@/types'
import PostCard from './PostCard.vue'

const props = defineProps<{
    posts: Post[]
    members: Member[]
}>()
</script>

<template>
    <div class="space-y-6">
        <PostCard v-for="post in posts" :key="post.id" :post="post" :members="members" />
    </div>
</template>
