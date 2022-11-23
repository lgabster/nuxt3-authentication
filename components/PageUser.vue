<script lang="ts" setup>
import type { UserWithoutPassword } from '~~/types'
defineProps<{ user: UserWithoutPassword | null }>()
</script>

<template>
  <code class="block mb-4 text-lg text-light-100 bg-slate-900 p-4 rounded-lg my-2">
    <pre>current user: {{ JSON.stringify(user, null, 2) }}</pre>
  </code>
</template>
