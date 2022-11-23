<script lang="ts" setup>
const currentUser = useAuthUser()
</script>

<template>
  <div>
    <h1 class="text-2xl mb-4">Home</h1>
    <h3>Simple authentification example using Nuxt3</h3>
    <PageUser :user="currentUser" />
  </div>
</template>
