<template>
  <div class="h-64">
    <div class="flex items-end justify-between h-full space-x-2">
      <div
        v-for="(item, index) in data"
        :key="index"
        class="flex-1 flex flex-col items-center"
      >
        <div class="w-full flex flex-col items-center justify-end h-full">
          <div
            class="w-full rounded-t-lg transition-all hover:opacity-80 cursor-pointer"
            :class="getBarColor(item.range)"
            :style="{ height: `${(item.count / maxCount) * 100}%` }"
            :title="`${item.range}: ${item.count}명`"
          ></div>
        </div>
        <div class="mt-2 text-xs text-amore-textLight text-center">
          <div class="font-medium">{{ item.range }}</div>
          <div class="text-amore-text font-semibold">{{ item.count }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})

const maxCount = computed(() => {
  return Math.max(...props.data.map(item => item.count))
})

const getBarColor = (range) => {
  const score = parseInt(range.split('-')[0])
  if (score >= 80) return 'bg-amore-success'
  if (score >= 60) return 'bg-amore-warning'
  return 'bg-amore-danger'
}
</script>

