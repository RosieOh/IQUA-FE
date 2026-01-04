<template>
  <div>
    <div class="flex items-center justify-between mb-2">
      <span class="text-amore-text font-medium">{{ label }}</span>
      <span class="text-lg font-bold" :class="colorClass">{{ score }}점</span>
    </div>
    <div class="w-full bg-amore-rose rounded-full h-2.5">
      <div
        class="h-2.5 rounded-full transition-all"
        :class="barColorClass"
        :style="{ width: `${score}%` }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: String,
  score: [String, Number],
  color: String
})

const colorClass = computed(() => {
  const scoreNum = parseInt(props.score)
  if (scoreNum >= 80) return 'text-amore-success'
  if (scoreNum >= 60) return 'text-amore-warning'
  return 'text-amore-danger'
})

const barColorClass = computed(() => {
  const scoreNum = parseInt(props.score)
  if (scoreNum >= 80) return 'bg-amore-success'
  if (scoreNum >= 60) return 'bg-amore-warning'
  return 'bg-amore-danger'
})
</script>

