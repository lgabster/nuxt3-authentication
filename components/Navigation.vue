<script lang="ts" setup>
const currentUser = useAuthUser()
const isAdmin = useAdmin()
const { logout } = useAuth()
const form = reactive({
  pending: false,
})
async function onLogoutClick() {
  try {
    form.pending = true
    await logout()
    await navigateTo('/')
  }
  catch (error) {
    console.error(error)
  }
  finally {
    form.pending = false
  }
}
</script>

<template>
  <nav class="flex gap-2">
    <NuxtLink to="/">
      Home
    </NuxtLink>

    <template v-if="currentUser">
      <NuxtLink to="/private">
        Private
      </NuxtLink>

      <NuxtLink v-if="isAdmin" to="/admin">
        Admin
      </NuxtLink>

      <button
        class="mb-4 ml-auto px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-300 text-slate-800 uppercase"
        :disabled="form.pending"
        @click="onLogoutClick"
      >
        Logout
      </button>
    </template>

    <template v-else>
      <NuxtLink to="/guest">
        Public
      </NuxtLink>

      <NuxtLink
        to="/login"
        class="mb-4 ml-auto px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-300 text-slate-800 uppercase"
      >
        Login
      </NuxtLink>
    </template>
  </nav>
</template>
