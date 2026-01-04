<template>
  <div
    class="card cursor-pointer hover:shadow-lg transition-all"
    @click="$emit('click')"
  >
    <!-- 헤더 -->
    <div class="flex items-start justify-between mb-5">
      <div class="flex items-center space-x-3">
        <div class="w-14 h-14 bg-gradient-to-br from-amore-primary to-amore-accent rounded-2xl flex items-center justify-center shadow-sm">
          <span class="text-white font-bold text-lg">{{ influencer.displayName?.charAt(0) || '?' }}</span>
        </div>
        <div>
          <h3 class="text-lg font-bold text-amore-text">{{ influencer.displayName || influencer.handle }}</h3>
          <p class="text-sm text-amore-textLight">@{{ influencer.handle }}</p>
        </div>
      </div>
      <DecisionBadge :decision="influencer.decision" />
    </div>

    <!-- Trust Score -->
    <div class="mb-5">
      <div class="flex items-center justify-between mb-3">
        <span class="text-sm font-medium text-amore-textLight">Trust Score</span>
        <span class="text-3xl font-bold" :class="getScoreColor(influencer.finalScore)">
          {{ Math.round(influencer.finalScore) }}
        </span>
      </div>
      <div class="w-full bg-amore-rose rounded-full h-3">
        <div
          class="h-3 rounded-full transition-all"
          :class="getScoreBarColor(influencer.finalScore)"
          :style="{ width: `${influencer.finalScore}%` }"
        ></div>
      </div>
    </div>

    <!-- 설명 요약 -->
    <p class="text-sm text-amore-textLight line-clamp-2 leading-relaxed mb-4">
      {{ influencer.explanationSummary || '분석 결과 없음' }}
    </p>

    <!-- 플랫폼 및 국가 -->
    <div class="flex items-center space-x-2 pt-4 border-t border-amore-border">
      <span class="px-3 py-1.5 bg-amore-rose rounded-full text-xs font-medium text-amore-text">
        {{ influencer.platform || 'N/A' }}
      </span>
      <span class="px-3 py-1.5 bg-amore-rose rounded-full text-xs font-medium text-amore-text">
        {{ influencer.country || 'N/A' }}
      </span>
    </div>
  </div>
</template>

<script setup>
import DecisionBadge from './DecisionBadge.vue'

defineProps({
  influencer: {
    type: Object,
    required: true
  }
})

defineEmits(['click'])

const getScoreColor = (score) => {
  if (score >= 80) return 'text-amore-success'
  if (score >= 60) return 'text-amore-warning'
  return 'text-amore-danger'
}

const getScoreBarColor = (score) => {
  if (score >= 80) return 'bg-amore-success'
  if (score >= 60) return 'bg-amore-warning'
  return 'bg-amore-danger'
}
</script>

