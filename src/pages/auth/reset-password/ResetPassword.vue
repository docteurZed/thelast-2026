<script setup lang="ts">
import { ref } from 'vue'
import type { NewPasswordPayload } from '@/types'
import { Field, FieldLabel, Input, Button, FieldError, Spinner } from '@/components'
import { AuthWrapper } from '../components'
import { toast } from 'vue-sonner'
import { useRouter } from 'vue-router'
import { resetPassword } from '@/services'

const router = useRouter()
const props = defineProps<{
    token: string
    email: string
}>()

const form = ref<NewPasswordPayload>({
    token: props.token || '',
    email: props.email || '',
    password: '',
    password_confirmation: '',
})

const loading = ref(false)
const errorMessage = ref('')
const fieldErrors = ref<Record<string, string[]>>({})

async function submit() {
    errorMessage.value = ''
    fieldErrors.value = {}
    loading.value = true

    try {
        await resetPassword(form.value)
        router.push({ name: 'login' })
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
            <FieldLabel for="password">Mot de passe</FieldLabel>

            <Input id="password" type="password" required v-model="form.password" />
            <FieldError v-if="fieldErrors.password">
                {{ fieldErrors.password.join(', ') }}
            </FieldError>
        </Field>

        <Field>
            <FieldLabel for="password_confirmation">Confirmer le mot de passe</FieldLabel>

            <Input
                id="password_confirmation"
                type="password_confirmation"
                required
                v-model="form.password_confirmation"
            />
            <FieldError v-if="fieldErrors.password_confirmation">
                {{ fieldErrors.password_confirmation.join(', ') }}
            </FieldError>
        </Field>

        <Field>
            <Button type="submit" :disabled="loading">
                <Spinner v-if="loading" />
                {{ loading ? 'Connexion en cours...' : 'Connexion' }}
            </Button>
        </Field>
    </AuthWrapper>
</template>
