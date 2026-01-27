import { createAuthClient } from 'better-auth/client'

const authClient = createAuthClient()

export const useAuthStore = defineStore('useAuthStore', ()=>{
  const loading = ref(false)
  async function signIn() {
    loading.value = true
    try {
      await authClient.signIn.social({
        provider: 'github',
        callbackURL: '/dashboard',
        errorCallbackURL: '/error'
      })
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    signIn
  }
})