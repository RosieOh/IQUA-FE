<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-4xl font-bold text-amore-text mb-10">국가별 기준 비교</h1>
    
    <div class="card-elevated mb-8">
      <h2 class="text-xl font-bold text-amore-text mb-5">국가 선택</h2>
      <div class="flex space-x-3">
        <button
          v-for="country in countries"
          :key="country.code"
          @click="selectedCountry = country.code"
          class="px-6 py-3 rounded-full transition-all font-medium"
          :class="selectedCountry === country.code ? 'bg-amore-primary text-white shadow-md' : 'bg-white text-amore-text border-2 border-amore-border hover:border-amore-primary'"
        >
          {{ country.name }}
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div class="card-elevated">
        <h2 class="text-xl font-bold text-amore-text mb-6">가중치 비교</h2>
        <WeightComparisonChart :country="selectedCountry" />
      </div>
      <div class="card-elevated">
        <h2 class="text-xl font-bold text-amore-text mb-6">추천 결과 비교</h2>
        <ResultComparisonChart :country="selectedCountry" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import WeightComparisonChart from '../components/features/WeightComparisonChart.vue'
import ResultComparisonChart from '../components/features/ResultComparisonChart.vue'

const selectedCountry = ref('JP')

const countries = [
  { code: 'JP', name: '일본' },
  { code: 'US', name: '미국' },
  { code: 'KR', name: '한국' }
]
</script>

