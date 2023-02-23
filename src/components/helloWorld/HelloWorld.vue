<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  color?: string
  msg?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: 'red',
  msg: 'Hello World'
})

const count = ref(0)
</script>

<template>
  <h1 :style="{color}">{{ msg }}</h1>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
