<script lang="ts" setup>
definePageMeta({
  middleware: ['user-only'],
})
const currentUser = useAuthUser()
</script>

<template>
  <div>
    <h1 class="text-2xl mb-4">Private page</h1>
    <h3>This page should only be visible if user is connected</h3>
    <PageUser :user="currentUser" />
  </div>
</template>
