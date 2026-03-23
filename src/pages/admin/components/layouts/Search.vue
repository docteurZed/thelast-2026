<script setup lang="ts">
import { Search as SearchIcon } from 'lucide-vue-next'
import { Label, SidebarGroup, SidebarGroupContent, SidebarInput } from '@/components'

const props = defineProps<{
    modelValue: string
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
    <form @submit.prevent>
        <SidebarGroup class="py-0">
            <SidebarGroupContent class="relative">
                <Label for="search" class="sr-only"> Rechercher </Label>

                <SidebarInput
                    id="search"
                    class="pl-8"
                    placeholder="Rechercher..."
                    :model-value="modelValue"
                    @update:model-value="emit('update:modelValue', $event)"
                />

                <SearchIcon
                    class="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none"
                />
            </SidebarGroupContent>
        </SidebarGroup>
    </form>
</template>
