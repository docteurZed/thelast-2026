<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores'
import type { LoginPayload } from '@/types'
import { Field, FieldLabel, Input, Button, FieldError, Spinner } from '@/components'
import { AuthWrapper } from '../components'
import { toast } from 'vue-sonner'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const form = ref<LoginPayload>({
    email: '',
    password: '',
})

const loading = ref(false)
const errorMessage = ref('')
const fieldErrors = ref<Record<string, string[]>>({})

async function submit() {
    errorMessage.value = ''
    fieldErrors.value = {}
    loading.value = true

    try {
        await authStore.login(form.value)
        router.push({ name: 'admin.dashboard' })
        toast.success('Connexion réussie.')
    } catch (err: any) {
        if (err.errors) {
            fieldErrors.value = err.errors
        } else {
            errorMessage.value = err.message || 'Impossible de se connecter'
            toast.error(errorMessage.value)
        }
        console.error(err)
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <AuthWrapper
        title="Connectez-vous"
        description="Entrez vos informations pour vous connecter"
        @submit="submit"
    >
        <Field>
            <FieldLabel for="email">Email</FieldLabel>
            <Input
                id="email"
                type="email"
                placeholder="thelast@gmail.com"
                required
                v-model="form.email"
            />
            <FieldError v-if="fieldErrors.email">
                {{ fieldErrors.email.join(', ') }}
            </FieldError>
        </Field>

        <Field>
            <div class="flex items-center">
                <FieldLabel for="password">Mot de passe</FieldLabel>
                <RouterLink
                    :to="{ name: 'forgot-password' }"
                    class="ml-auto text-sm underline-offset-4 hover:underline"
                >
                    Mot de passe oublié?
                </RouterLink>
            </div>
            <Input id="password" type="password" required v-model="form.password" />
            <FieldError v-if="fieldErrors.password">
                {{ fieldErrors.password.join(', ') }}
            </FieldError>
        </Field>

        <Field>
            <Button :disabled="loading" @click="router.push({name: 'member.home'})">
                <Spinner v-if="loading" />
                {{ loading ? 'Connexion en cours...' : 'Connexion' }}
            </Button>
        </Field>
    </AuthWrapper>
</template>
