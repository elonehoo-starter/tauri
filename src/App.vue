<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: 'My awesome site',
})
</script>

<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <RouterView />
    <Footer />
  </main>
</template>
