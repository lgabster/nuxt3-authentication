<script lang="ts" setup>
const currentUser = useAuthUser()
const isAdmin = useAdmin()
async function onLoginSuccess() {
  const redirect = isAdmin.value ? '/admin' : '/private'
  await navigateTo(redirect)
}
</script>

<template>
  <div>
    <h1 class="text-2xl mb-4">Login page</h1>
    <h3>This page should only be accessible to guests.</h3>
    <div class="flex flex-col my-8">
      <FormLogin class="mx-auto" @login:success="onLoginSuccess" />
      <div class="flex gap-4 mx-auto mb-8">
        <div class="bg-amber-800 text-amber-100 text-sm border-2 border-amber-600 p-4 rounded-lg">
          <p>
            Try this user credentials:
          </p>
          <p>
            email: <code>user@gmail.com</code>
            <br>
            password: <code>password</code>
          </p>
        </div>
        <div class="bg-amber-800 text-amber-100 text-sm border-2 border-amber-600 p-4 rounded-lg">
          <p>
            Try this admin credentials:
          </p>
          <p>
            email: <code>admin@gmail.com</code>
            <br>
            password: <code>password</code>
          </p>
        </div>
      </div>
    </div>
    <PageUser :user="currentUser" />
  </div>
</template>
