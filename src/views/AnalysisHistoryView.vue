<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-4xl font-bold text-amore-text mb-10">분석 히스토리</h1>
    
    <div class="space-y-4">
      <div
        v-for="run in history"
        :key="run.id"
        class="card cursor-pointer hover:shadow-lg transition-all"
        @click="viewRun(run.id)"
      >
        <div class="flex items-center justify-between">
          <div>
            <div class="flex items-center space-x-4 mb-3">
              <span class="text-xl font-bold text-amore-text">Run #{{ run.id }}</span>
              <StatusBadge :status="run.status" />
            </div>
            <p class="text-sm text-amore-textLight mb-2">
              브랜드: {{ run.brand }} | 국가: {{ run.country }} | 플랫폼: {{ run.platform }}
            </p>
            <p class="text-xs text-amore-textLight">
              생성일: {{ formatDate(run.createdAt) }}
            </p>
          </div>
          <div class="text-right">
            <p class="text-sm text-amore-textLight mb-1">결과 수</p>
            <p class="text-3xl font-bold text-amore-primary">{{ run.resultCount || 0 }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import StatusBadge from '../components/features/StatusBadge.vue'

const router = useRouter()
const history = ref([])

const formatDate = (date) => {
  if (!date) return 'N/A'
  return new Date(date).toLocaleString('ko-KR')
}

const viewRun = (id) => {
  router.push({ name: 'home', query: { runId: id } })
}

onMounted(() => {
  // API에서 히스토리 가져오기
  history.value = [
    {
      id: 1,
      brand: 'Laneige',
      country: 'JP',
      platform: 'INSTAGRAM',
      status: 'COMPLETED',
      createdAt: new Date(),
      resultCount: 5
    }
  ]
})
</script>

