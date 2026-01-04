<template>
  <div class="text-center">
    <div class="text-4xl md:text-5xl font-bold text-white mb-2">{{ value }}</div>
    <div class="text-lg text-white/90">{{ label }}</div>
  </div>
</template>

<script setup>
defineProps({
  value: [String, Number],
  label: String
})
</script>

