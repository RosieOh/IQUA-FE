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
  status: {
    type: String,
    required: true
  }
})

const badgeClass = computed(() => {
  switch (props.status) {
    case 'COMPLETED':
      return 'bg-amore-success text-white'
    case 'RUNNING':
      return 'bg-amore-warning text-white'
    case 'FAILED':
      return 'bg-amore-danger text-white'
    default:
      return 'bg-amore-textLight text-white'
  }
})

const badgeText = computed(() => {
  switch (props.status) {
    case 'COMPLETED':
      return '완료'
    case 'RUNNING':
      return '진행중'
    case 'FAILED':
      return '실패'
    default:
      return props.status
  }
})
</script>

