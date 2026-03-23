<script setup lang="ts">
import { ref } from 'vue'
import { Avatar, AvatarFallback, AvatarImage, Button, Input } from '@/components'
import { User } from 'lucide-vue-next'
import { MemberWrapper } from '../components'

interface Message {
    id: number
    text: string
    fromMe: boolean
    time: string
}

const conversations = [
    { id: 1, name: 'Amos', avatar: '/img/avatar-1.jpg' },
    { id: 2, name: 'Sophie', avatar: '/img/avatar-2.jpg' },
    { id: 3, name: 'Marc', avatar: '/img/avatar-3.jpg' },
]

const selectedConversation = ref(conversations[0])

const messages = ref<Message[]>([
    { id: 1, text: 'Bonjour ! Comment ça va ?', fromMe: false, time: '10:12' },
    { id: 2, text: 'Salut ! Tout va bien, et toi ?', fromMe: true, time: '10:13' },
    { id: 3, text: 'Super, merci !', fromMe: false, time: '10:15' },
])

const newMessage = ref('')

function sendMessage() {
    if (!newMessage.value.trim()) return
    messages.value.push({
        id: Date.now(),
        text: newMessage.value,
        fromMe: true,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    })
    newMessage.value = ''
}
</script>

<template>
    <MemberWrapper no-padding title="Messages anonymes">
        <div class="flex h-full">
            <div class="flex-1 flex flex-col h-full relative">
                <div class="flex-1 overflow-y-auto h-full p-4 space-y-4 mb-16">
                    <div
                        v-for="msg in messages"
                        :key="msg.id"
                        :class="[
                            'flex items-end gap-2',
                            msg.fromMe ? 'justify-end' : 'justify-start',
                        ]"
                    >
                        <Avatar v-if="!msg.fromMe" class="w-10 h-10">
                            <AvatarImage :src="selectedConversation!.avatar" />
                            <AvatarFallback>
                                <User />
                            </AvatarFallback>
                        </Avatar>

                        <div
                            :class="[
                                'px-4 py-2 rounded-xl max-w-xs break-words',
                                msg.fromMe
                                    ? 'bg-primary/80 text-white rounded-br-none'
                                    : 'bg-card/70 text-muted-foreground rounded-bl-none',
                            ]"
                        >
                            {{ msg.text }}
                            <span class="block text-sm text-muted-foreground mt-1 text-right">
                                {{ msg.time }}
                            </span>
                        </div>
                    </div>
                </div>

                <div
                    class="border-t border-border p-4 flex gap-2 fixed bottom-16 md:bottom-0 left-0 md:left-20 w-full bg-card h-16"
                >
                    <Input
                        v-model="newMessage"
                        placeholder="Tapez un message..."
                        class="flex-1"
                        @keyup.enter="sendMessage"
                    />
                    <Button @click="sendMessage">Envoyer</Button>
                </div>
            </div>
        </div>
    </MemberWrapper>
</template>

<style scoped>
/* Auto-scroll to bottom on new messages */
div.flex-1.overflow-y-auto {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 0.5rem;
}
</style>
