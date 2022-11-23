<script lang="ts" setup>
const currentUser = useAuthUser()
</script>

<template>
  <div>
    <h1 class="text-2xl mb-4">Guest page</h1>
    <h3>This page should only be accessible to guests.</h3>
    <PageUser :user="currentUser" />
  </div>
</template>
