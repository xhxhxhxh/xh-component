<script setup lang="ts" >
import { ref } from 'vue'
defineOptions({
  name: 'ELHelloWorld2',
})
type Props = {
  color?: string
  msg?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: 'blue',
  msg: 'Hello World2'
})

const count = ref(0)
</script>

<template>
  <h1 :style="{color}">{{ msg }}</h1>

</template>

<style scoped lang="scss">
.read-the-docs {
  color: #888;
}
</style>
