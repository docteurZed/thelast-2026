import { type DefineComponent, type FunctionalComponent } from 'vue'

export interface SidebarItem {
    title: string
    icon?: DefineComponent<any, any, any> | FunctionalComponent<any>
    routeName?: string
    roles?: string[]
}

export interface SidebarGroupData {
    title?: string
    items: SidebarItem[]
    roles?: string[]
}
