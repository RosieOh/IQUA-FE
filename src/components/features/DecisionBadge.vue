<template>
  <span
    class="px-3 py-1 rounded-full text-xs font-semibold"
    :class="badgeClass"
  >
    {{ badgeText }}
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  decision: {
    type: String,
    required: true
  }
})

const badgeClass = computed(() => {
  switch (props.decision) {
    case 'RECOMMEND':
      return 'bg-amore-success text-white'
    case 'CONSIDER':
      return 'bg-amore-warning text-white'
    case 'EXCLUDE':
      return 'bg-amore-danger text-white'
    default:
      return 'bg-amore-textLight text-white'
  }
})

const badgeText = computed(() => {
  switch (props.decision) {
    case 'RECOMMEND':
      return '추천'
    case 'CONSIDER':
      return '조건부'
    case 'EXCLUDE':
      return '제외'
    default:
      return '미분류'
  }
})
</script>

