<script setup lang="ts">
const route = useRoute()
const error = route.query.error || 'An unknow error occured'
</script>

<template>
  <div
    class="card bg-base-300 container mt-4 max-h-72 min-h-72 text-center mx-auto flex flex-col gap-4 justify-center items-center"
  >
    <div role="alert" class="alert alert-error min-w-1/2 text-center">
      <span>Oh no! {{ error }}</span>
    </div>
    <NuxtLink to="/" class="btn btn-primary">
      Home
      <Icon name="tabler:arrow-left" size="24" />
    </NuxtLink>
  </div>
</template>

<style scoped></style>
