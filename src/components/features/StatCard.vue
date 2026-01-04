<template>
  <div class="card-elevated">
    <div class="flex items-center justify-between mb-4">
      <div class="p-3 rounded-xl" :class="iconBgClass">
        <svg class="w-6 h-6" :class="iconColorClass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>
      <span class="text-sm font-medium" :class="trendClass">
        <span v-if="trend > 0">↑</span>
        <span v-else-if="trend < 0">↓</span>
        <span v-else>→</span>
        {{ Math.abs(trend) }}%
      </span>
    </div>
    <div>
      <p class="text-sm text-amore-textLight mb-1">{{ label }}</p>
      <p class="text-3xl font-bold" :class="valueColorClass">{{ formattedValue }}</p>
      <p v-if="subtitle" class="text-xs text-amore-textLight mt-2">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: String,
  value: [Number, String],
  subtitle: String,
  trend: {
    type: Number,
    default: 0
  },
  type: {
    type: String,
    default: 'default' // default, success, warning, danger, primary
  }
})

const formattedValue = computed(() => {
  if (typeof props.value === 'number') {
    return props.value.toLocaleString()
  }
  return props.value
})

const iconBgClass = computed(() => {
  const classes = {
    default: 'bg-amore-rose',
    success: 'bg-amore-success/20',
    warning: 'bg-amore-warning/20',
    danger: 'bg-amore-danger/20',
    primary: 'bg-amore-primary/20'
  }
  return classes[props.type] || classes.default
})

const iconColorClass = computed(() => {
  const classes = {
    default: 'text-amore-primary',
    success: 'text-amore-success',
    warning: 'text-amore-warning',
    danger: 'text-amore-danger',
    primary: 'text-amore-primary'
  }
  return classes[props.type] || classes.default
})

const valueColorClass = computed(() => {
  const classes = {
    default: 'text-amore-text',
    success: 'text-amore-success',
    warning: 'text-amore-warning',
    danger: 'text-amore-danger',
    primary: 'text-amore-primary'
  }
  return classes[props.type] || classes.default
})

const trendClass = computed(() => {
  if (props.trend > 0) return 'text-amore-success'
  if (props.trend < 0) return 'text-amore-danger'
  return 'text-amore-textLight'
})
</script>

