<script lang="ts" setup>
const emit = defineEmits(['login:success'])
const { login } = useAuth()
const form = reactive({
  data: {
    email: 'admin@gmail.com',
    password: 'password',
    rememberMe: false,
  },
  error: '',
  pending: false,
})
async function onLoginClick() {
  try {
    form.error = ''
    form.pending = true
    await login(form.data)
    emit('login:success')
  }
  catch (error: any) {
    console.error(error)
    if (error.data.message)
      form.error = error.data.message
  }
  finally {
    form.pending = false
  }
}
</script>

<template>
  <form class="flex flex-col gap-2 my-4 w-60" @submit.prevent="onLoginClick">
    <input class="rounded-full bg-slate-700" v-model="form.data.email" type="email" placeholder="Email" required>
    <input class="rounded-full bg-slate-700" v-model="form.data.password" type="password" placeholder="Password" required>
    <div class="w-full">
      <input class="rounded-full bg-slate-700" id="remember-me" v-model="form.data.rememberMe" type="checkbox">
      <label for="remember-me" class="ml-2">Remember me</label>
    </div>
    <p v-if="form.error" class="mb-2 text-red-500 font-bold">
      {{ form.error }}
    </p>
    <div class="flex my-4">
      <button
        class="mx-auto px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-300 text-slate-800 uppercase"
        type="submit" :disabled="form.pending"
      >
        Login
      </button>
    </div>
  </form>
</template>
