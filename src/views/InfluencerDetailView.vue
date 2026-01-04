<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div v-if="loading" class="text-center py-16">
      <div class="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amore-primary"></div>
      <p class="mt-4 text-amore-textLight">로딩 중...</p>
    </div>

    <div v-else-if="influencer" class="space-y-8">
      <!-- 헤더 -->
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-4xl font-bold text-amore-text mb-2">{{ influencer.displayName || influencer.handle }}</h1>
          <p class="text-amore-textLight text-lg">@{{ influencer.handle }}</p>
        </div>
        <DecisionBadge :decision="influencer.decision" />
      </div>

      <!-- Trust Score Breakdown -->
      <div class="card-elevated">
        <h2 class="text-2xl font-bold text-amore-text mb-6">Trust Score 상세 분석</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <ScoreComponentCard
            v-for="component in scoreComponents"
            :key="component.name"
            :component="component"
          />
        </div>
        <div class="mt-8 pt-6 border-t border-amore-border">
          <div class="flex items-center justify-between">
            <span class="text-xl font-semibold text-amore-text">최종 Trust Score</span>
            <span class="text-4xl font-bold" :class="getScoreColor(influencer.finalScore)">
              {{ Math.round(influencer.finalScore) }}
            </span>
          </div>
        </div>
      </div>

      <!-- 추천/제외 사유 -->
      <RecommendationCard :influencer="influencer" />

      <!-- 설명 요약 -->
      <div class="card-elevated">
        <h2 class="text-2xl font-bold text-amore-text mb-4">분석 요약</h2>
        <p class="text-amore-textLight leading-relaxed text-lg">
          {{ influencer.explanationSummary || '분석 결과가 없습니다.' }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { influencerAPI } from '../services/api'
import DecisionBadge from '../components/features/DecisionBadge.vue'
import ScoreComponentCard from '../components/features/ScoreComponentCard.vue'
import RecommendationCard from '../components/features/RecommendationCard.vue'

const route = useRoute()
const loading = ref(true)
const influencer = ref(null)

const scoreComponents = computed(() => {
  if (!influencer.value) return []
  return [
    { name: 'Engagement', score: influencer.value.engagementScore, color: 'blue' },
    { name: 'Comment Quality', score: influencer.value.commentQualityScore, color: 'green' },
    { name: 'Originality', score: influencer.value.originalityScore, color: 'purple' },
    { name: 'Brand Fit', score: influencer.value.brandFitScore, color: 'orange' }
  ]
})

const getScoreColor = (score) => {
  if (score >= 80) return 'text-amore-success'
  if (score >= 60) return 'text-amore-warning'
  return 'text-amore-danger'
}

onMounted(async () => {
  // 실제로는 API에서 상세 정보를 가져와야 함
  // 여기서는 예시 데이터 사용
  loading.value = false
})
</script>

