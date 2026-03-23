<script setup lang="ts">
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    Textarea,
    Button,
    Badge,
    Input,
    Avatar,
    AvatarFallback,
} from '@/components'
import type { Member } from '@/types'
import { UserPlus, Send, Image } from 'lucide-vue-next'
import { ref, computed, onUnmounted, watch } from 'vue'

const props = defineProps<{
    members: Member[]
    modelValue: boolean
}>()

interface NewPostPayload {
    content: string
    image: string | null
    tags: number[]
}

const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
    (e: 'add-post', payload: NewPostPayload): void
}>()

const open = ref(props.modelValue)
const newPostText = ref('')
const selectedImage = ref<File | null>(null)
const previewImage = ref<string | null>(null)
const taggedMembers = ref<number[]>([])
const searchMember = ref('')
const openTagSheet = ref(false)

watch(
    () => props.modelValue,
    (val) => {
        open.value = val
    },
)

watch(open, (val) => {
    emit('update:modelValue', val)
})

function toggleTag(memberId: number) {
    if (taggedMembers.value.includes(memberId)) {
        taggedMembers.value = taggedMembers.value.filter((id) => id !== memberId)
    } else {
        taggedMembers.value.push(memberId)
    }
}

const filteredMembers = computed(() =>
    props.members.filter((m) => m.name.toLowerCase().includes(searchMember.value.toLowerCase())),
)

const handleImageUpload = (event: Event) => {
    const file = (event.target as HTMLInputElement).files?.[0]
    if (!file) return
    selectedImage.value = file
    previewImage.value = URL.createObjectURL(file)
}

const addPost = () => {
    if (!newPostText.value.trim()) return

    emit('add-post', {
        content: newPostText.value,
        image: previewImage.value,
        tags: [...taggedMembers.value],
    })

    newPostText.value = ''
    selectedImage.value = null
    previewImage.value = null
    taggedMembers.value = []
    emit('update:modelValue', false)
}

onUnmounted(() => {
    if (previewImage.value) URL.revokeObjectURL(previewImage.value)
})
</script>

<template>
    <Sheet v-model:open="open">
        <SheetContent side="bottom" class="h-screen max-w-none p-6 pt-10 md:p-12">
            <div class="flex flex-col h-full">
                <div class="flex-1 overflow-y-auto space-y-6 md:space-y-10 pb-4">
                    <Textarea
                        v-model="newPostText"
                        placeholder="Exprimez-vous..."
                        class="border-0"
                    />
                    <img
                        v-if="previewImage"
                        :src="previewImage"
                        class="w-full md:w-[60%] mx-auto rounded-lg"
                    />
                    <Button variant="outline" size="sm" @click="openTagSheet = true">
                        <UserPlus class="w-4 h-4 mr-2" />
                        Taguer quelqu’un
                        <Badge v-if="taggedMembers.length" class="ml-2">{{
                            taggedMembers.length
                        }}</Badge>
                    </Button>

                    <div v-if="taggedMembers.length" class="flex flex-wrap gap-2">
                        <Badge v-for="id in taggedMembers" :key="id" variant="secondary">
                            {{ props.members.find((m) => m.id === id)?.name }}
                        </Badge>
                    </div>

                    <label class="cursor-pointer flex gap-2 items-center">
                        <Image class="w-4 h-4" />
                        Ajouter image
                        <input type="file" class="hidden" @change="handleImageUpload" />
                    </label>
                </div>

                <div class="border-t pt-3">
                    <Button class="w-full" @click="addPost">
                        <Send class="w-4 h-4 mr-2" /> Publier
                    </Button>
                </div>
            </div>
        </SheetContent>
    </Sheet>

    <Sheet v-model:open="openTagSheet">
        <SheetContent side="bottom" class="h-screen max-w-none p-6 md:p-12">
            <div class="flex flex-col h-full">
                <SheetHeader>
                    <SheetTitle> Taguer des membres </SheetTitle>
                </SheetHeader>

                <Input v-model="searchMember" placeholder="Rechercher un membre..." class="mt-4" />

                <div class="flex-1 overflow-y-auto mt-4 space-y-2">
                    <Button
                        v-for="member in filteredMembers"
                        :key="member.id"
                        variant="ghost"
                        class="w-full justify-between p-1"
                        @click="toggleTag(member.id)"
                    >
                        <div class="flex gap-2 items-center">
                            <Avatar class="w-8 h-8">
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            {{ member.name }}
                        </div>
                        <Badge v-if="taggedMembers.includes(member.id)"> Ajouté </Badge>
                    </Button>
                </div>
                <div class="border-t pt-4">
                    <Button class="w-full" @click="openTagSheet = false"> Terminer </Button>
                </div>
            </div>
        </SheetContent>
    </Sheet>
</template>
