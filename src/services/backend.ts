import axios, { type AxiosInstance } from 'axios'

const BASE_URL = import.meta.env.VITE_BACKEND_URL

const api = axios.create({
    baseURL: `${BASE_URL}/api`,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
    withCredentials: true,
    withXSRFToken: true,
})

const http = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
    withCredentials: true,
    withXSRFToken: true,
})

export async function getCookies() {
    return http.get('/sanctum/csrf-cookie')
}

export interface ApiError {
    status: number | null
    message: string
    errors?: Record<string, string[]>
}

function attachInterceptors(client: AxiosInstance) {
    client.interceptors.response.use(
        (response) => response.data,
        (error) => {
            const status: number | null = error.response?.status ?? null

            let message = 'Une erreur est survenue.'
            let errors: Record<string, string[]> | undefined

            if (!error.response) {
                message = 'Serveur injoignable.'
            } else if (status === 422) {
                message = 'Erreur de validation.'
                errors = error.response.data?.errors
            } else {
                message = error.response.data?.message || 'Erreur interne du serveur.'
            }

            console.error(`[API ERROR] ${status ?? 'NO_RESPONSE'} → ${message}`)

            const formattedError: ApiError = {
                status,
                message,
                ...(errors && { errors }),
            }

            return Promise.reject(formattedError)
        },
    )
}

attachInterceptors(api)
attachInterceptors(http)

export { api, http }
