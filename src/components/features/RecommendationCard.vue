<template>
  <div class="card-elevated">
    <h2 class="text-2xl font-bold text-amore-text mb-6">추천/제외 사유</h2>
    <div class="space-y-5">
      <div class="flex items-start space-x-4">
        <DecisionBadge :decision="influencer.decision" />
        <div class="flex-1">
          <p class="text-amore-textLight leading-relaxed text-lg">
            {{ influencer.explanationSummary || '분석 결과가 없습니다.' }}
          </p>
        </div>
      </div>
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
</script>

