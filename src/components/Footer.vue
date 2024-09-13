<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <nav class="text-xl mt-6 inline-flex gap-2">
    <button class="icon-btn" @click="router.push('/')">
      <div i-carbon-home />
    </button>

    <a
      class="icon-btn i-carbon-logo-github"
      rel="noreferrer"
      href="https://github.com/elonehoo-starter/vue"
      target="_blank"
      title="GitHub"
    />

    <button class="icon-btn" @click="toggleDark()">
      <div class="dark:i-carbon-moon i-carbon-sun" />
    </button>
  </nav>
</template>
