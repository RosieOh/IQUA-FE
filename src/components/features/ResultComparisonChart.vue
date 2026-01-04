<template>
  <div class="space-y-4">
    <div class="text-sm text-amore-textLight mb-6 font-medium">
      국가별 추천 결과 비교
    </div>
    <div
      v-for="result in results"
      :key="result.label"
      class="flex items-center justify-between p-4 bg-amore-rose rounded-xl border border-amore-border"
    >
      <span class="text-amore-text font-medium">{{ result.label }}</span>
      <span class="text-amore-primary font-bold text-lg">{{ result.value }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  country: String
})

const results = computed(() => {
  // 실제로는 API에서 가져와야 함
  return [
    { label: '추천 인플루언서', value: '3명' },
    { label: '조건부 검토', value: '1명' },
    { label: '제외 대상', value: '1명' },
    { label: '평균 점수', value: '76.5점' }
  ]
})
</script>

