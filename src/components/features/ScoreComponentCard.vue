<template>
  <div class="bg-amore-rose rounded-xl p-5 border border-amore-border">
    <div class="flex items-center justify-between mb-3">
      <span class="text-sm font-semibold text-amore-text">{{ component.name }}</span>
      <span class="text-xl font-bold" :class="getColorClass()">
        {{ Math.round(component.score) }}
      </span>
    </div>
    <div class="w-full bg-white rounded-full h-2.5">
      <div
        class="h-2.5 rounded-full transition-all"
        :class="getBarColorClass()"
        :style="{ width: `${component.score}%` }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  component: {
    type: Object,
    required: true
  }
})

const getColorClass = () => {
  const score = props.component.score
  if (score >= 80) return 'text-amore-success'
  if (score >= 60) return 'text-amore-warning'
  return 'text-amore-danger'
}

const getBarColorClass = () => {
  const score = props.component.score
  if (score >= 80) return 'bg-amore-success'
  if (score >= 60) return 'bg-amore-warning'
  return 'bg-amore-danger'
}
</script>

