<script setup lang="ts">
const model = defineModel<string>()
</script>

<template>
  <input
    id="input"
    v-bind="$attrs"
    v-model="model"
    type="text"
    p="x-4 y-2"
    w="250px"
    text="center"
    bg="transparent"
    border="~ rounded gray-200 dark:gray-700"
    outline="none active:none"
  >
</template>
