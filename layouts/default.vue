<template>
  <div class="min-h-screen flex flex-col bg-gray-800 text-slate-300">
    <header class="p-4 mx-auto w-full">
      <Navigation />
    </header>

    <main class="p-3 mx-auto w-full">
      <slot />
    </main>
  </div>
</template>
