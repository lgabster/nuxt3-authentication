<script lang="ts" setup>
definePageMeta({
  middleware: ['admin-only'],
})
const { data: users } = await useAsyncData('users', () => $fetch('/api/users', { headers: useRequestHeaders(['cookie']) as HeadersInit }))
const currentUser = useAuthUser()
</script>

<template>
  <div>
    <h1 class="text-2xl mb-4">Admin page</h1>
    <h3>This page should only be visible if user is connected and has admin role</h3>
    <PageUser :user="currentUser" />
    <table class="table-auto w-full">
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">Email</th>
          <th class="text-left">Roles</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.roles.join(', ') }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
