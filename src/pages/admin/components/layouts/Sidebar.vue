<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores'
import type { SidebarProps } from '@/components'
import {
    Logo,
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from '@/components'
import { Search } from '.'
import type { SidebarGroupData } from '@/types'

const props = defineProps<SidebarProps & { data: SidebarGroupData[] }>()
const route = useRoute()
const auth = useAuthStore()
const sidebarSearch = ref('')

const filteredData = computed(() => {
    const activeRole = auth.user?.active_role?.name ?? ''

    return props.data
        .filter((group) => !group.roles || group.roles.includes(activeRole))
        .map((group) => {
            const items = group.items
                .filter((item) => !item.roles || item.roles.includes(activeRole))
                .filter((item) =>
                    sidebarSearch.value.trim()
                        ? item.title.toLowerCase().includes(sidebarSearch.value.toLowerCase())
                        : true,
                )
            return { ...group, items }
        })
        .filter((group) => group.items.length > 0)
})
</script>

<template>
    <Sidebar v-bind="props">
        <SidebarHeader>
            <SidebarMenu class="px-2 py-2">
                <SidebarMenuItem>
                    <Logo route-name="admin.dashboard" />
                </SidebarMenuItem>
            </SidebarMenu>

            <Search v-model="sidebarSearch" />
        </SidebarHeader>

        <SidebarContent>
            <SidebarGroup v-for="group in filteredData" :key="group.title">
                <SidebarGroupLabel v-if="group.title">
                    {{ group.title }}
                </SidebarGroupLabel>

                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem v-for="item in group.items" :key="item.title">
                            <SidebarMenuButton as-child :is-active="route.name === item.routeName">
                                <RouterLink
                                    v-if="item.routeName"
                                    :to="{ name: item.routeName }"
                                    class="flex gap-2 items-center"
                                >
                                    <component :is="item.icon" />
                                    <span>{{ item.title }}</span>
                                </RouterLink>

                                <span v-else class="flex items-center gap-2">
                                    <component :is="item.icon" />
                                    {{ item.title }}
                                </span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>

        <SidebarRail />
    </Sidebar>
</template>
