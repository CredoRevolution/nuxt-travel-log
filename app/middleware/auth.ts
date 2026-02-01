import { auth } from '~/lib/auth'

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path.startsWith('/dashboard')) {
    const session = await auth.api.getSession({
      headers:{
      }
    })
  }
})
