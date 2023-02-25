<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
  name: 'ELHelloWorld',
})

type Props = {
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
  <h1 :style="{color}" class="read-the-docs">{{ msg }}</h1>

</template>

<style scoped lang="scss">
.read-the-docs {
  color: #888;
}
</style>
