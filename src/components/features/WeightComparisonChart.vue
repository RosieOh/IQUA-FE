<template>
  <div class="space-y-5">
    <div
      v-for="weight in weights"
      :key="weight.name"
      class="flex items-center space-x-4"
    >
      <span class="text-sm font-medium text-amore-text w-32">{{ weight.name }}</span>
      <div class="flex-1 bg-amore-rose rounded-full h-3">
        <div
          class="h-3 rounded-full bg-amore-primary transition-all"
          :style="{ width: `${weight.value}%` }"
        ></div>
      </div>
      <span class="text-sm font-bold text-amore-text w-12 text-right">{{ weight.value }}%</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  country: String
})

const weights = computed(() => {
  // 국가별 기본 가중치 (실제로는 API에서 가져와야 함)
  const defaultWeights = {
    JP: [
      { name: 'Engagement', value: 25 },
      { name: 'Comment', value: 20 },
      { name: 'Originality', value: 25 },
      { name: 'Brand Fit', value: 30 }
    ],
    US: [
      { name: 'Engagement', value: 30 },
      { name: 'Comment', value: 30 },
      { name: 'Originality', value: 20 },
      { name: 'Brand Fit', value: 20 }
    ]
  }
  return defaultWeights[props.country] || defaultWeights.JP
})
</script>

