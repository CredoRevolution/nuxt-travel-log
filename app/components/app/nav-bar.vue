<script setup lang="ts">
import AuthButton from '~/components/auth-button.vue'
</script>

<template>
  <div class="navbar bg-primary text-primary-content">
    <div class="navbar-start">
      <div class="navbar bg-primary text-primary-content">
        <NuxtLink to="/" class="btn btn-ghost text-xl">Travel Log</NuxtLink>
      </div>
    </div>
    <div class="navbar-end">
      <AppThemeToggle />
      <AuthButton />
    </div>
  </div>
</template>

<style scoped></style>
