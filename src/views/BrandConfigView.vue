<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-4xl font-bold text-amore-text mb-10">브랜드 기준 설정</h1>
    
    <div class="card-elevated">
      <h2 class="text-2xl font-bold text-amore-text mb-8">가중치 설정</h2>
      
      <div class="space-y-8">
        <WeightSlider
          v-for="weight in weights"
          :key="weight.key"
          :label="weight.label"
          :value="weight.value"
          @update="updateWeight(weight.key, $event)"
        />
      </div>

      <div class="mt-10 pt-6 border-t border-amore-border flex justify-end space-x-3">
        <button @click="resetWeights" class="btn-secondary">초기화</button>
        <button @click="saveWeights" class="btn-primary">저장 및 적용</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import WeightSlider from '../components/features/WeightSlider.vue'

const weights = ref([
  { key: 'engagement', label: 'Engagement Quality', value: 25 },
  { key: 'comment', label: 'Comment Quality', value: 25 },
  { key: 'originality', label: 'Originality', value: 25 },
  { key: 'brandFit', label: 'Brand Fit', value: 25 }
])

const updateWeight = (key, value) => {
  const weight = weights.value.find(w => w.key === key)
  if (weight) {
    weight.value = value
    // 총합이 100이 되도록 조정
    const total = weights.value.reduce((sum, w) => sum + w.value, 0)
    if (total !== 100) {
      const diff = 100 - total
      weights.value.forEach(w => {
        if (w.key !== key) {
          w.value = Math.max(0, Math.min(100, w.value + diff / 3))
        }
      })
    }
  }
}

const resetWeights = () => {
  weights.value.forEach(w => w.value = 25)
}

const saveWeights = () => {
  // API 호출로 가중치 저장
  alert('가중치가 저장되었습니다.')
}
</script>

