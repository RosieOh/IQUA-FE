<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- 헤더 -->
    <div class="mb-6">
      <div class="flex items-center justify-between mb-3">
        <div>
          <h1 class="text-4xl font-bold text-amore-text mb-2">글로벌 인플루언서 리스트</h1>
          <p class="text-amore-textLight text-lg">Trust Score 기반 인플루언서 분석 결과</p>
        </div>
        <div class="flex space-x-3">
          <button
            @click="exportToExcel"
            class="btn-secondary text-sm px-4 py-2"
            :disabled="filteredInfluencers.length === 0"
          >
            <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Excel 내보내기
          </button>
          <button
            @click="exportToPDF"
            class="btn-secondary text-sm px-4 py-2"
            :disabled="filteredInfluencers.length === 0"
          >
            <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            PDF 내보내기
          </button>
        </div>
      </div>
    </div>

    <!-- 분석 실행 폼 -->
    <AnalysisForm @analyzed="handleAnalyzed" class="mb-6" />

    <!-- 필터 및 정렬 -->
    <div class="card-elevated mb-6">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div class="flex flex-wrap gap-3">
          <!-- 검색 -->
          <div class="relative">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="인플루언서 검색..."
              class="pl-10 pr-4 py-2.5 border border-amore-border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-amore-primary focus:border-transparent w-64"
            />
            <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amore-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <select
            v-model="filters.decision"
            class="bg-white border border-amore-border rounded-full px-5 py-2.5 text-amore-text text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amore-primary focus:border-transparent"
          >
            <option value="">전체 상태</option>
            <option value="RECOMMEND">추천</option>
            <option value="CONSIDER">조건부</option>
            <option value="EXCLUDE">제외</option>
          </select>
          
          <select
            v-model="filters.country"
            class="bg-white border border-amore-border rounded-full px-5 py-2.5 text-amore-text text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amore-primary focus:border-transparent"
          >
            <option value="">전체 국가</option>
            <option value="JP">일본</option>
            <option value="US">미국</option>
            <option value="KR">한국</option>
          </select>

          <select
            v-model="filters.platform"
            class="bg-white border border-amore-border rounded-full px-5 py-2.5 text-amore-text text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amore-primary focus:border-transparent"
          >
            <option value="">전체 플랫폼</option>
            <option value="INSTAGRAM">Instagram</option>
            <option value="TIKTOK">TikTok</option>
            <option value="YOUTUBE">YouTube</option>
          </select>
        </div>

        <div class="flex items-center space-x-4">
          <!-- 정렬 -->
          <select
            v-model="sortBy"
            class="bg-white border border-amore-border rounded-full px-4 py-2.5 text-amore-text text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amore-primary focus:border-transparent"
          >
            <option value="score-desc">점수 높은 순</option>
            <option value="score-asc">점수 낮은 순</option>
            <option value="name-asc">이름 순</option>
          </select>

          <!-- 뷰 토글 -->
          <div class="flex border border-amore-border rounded-full p-1">
            <button
              @click="viewMode = 'card'"
              class="p-2 rounded-full transition-colors"
              :class="viewMode === 'card' ? 'bg-amore-primary text-white' : 'text-amore-textLight hover:bg-amore-rose'"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              @click="viewMode = 'table'"
              class="p-2 rounded-full transition-colors"
              :class="viewMode === 'table' ? 'bg-amore-primary text-white' : 'text-amore-textLight hover:bg-amore-rose'"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>

          <div class="text-amore-textLight font-medium text-sm">
            총 <span class="text-amore-primary font-bold">{{ filteredInfluencers.length }}</span>명
          </div>
        </div>
      </div>
    </div>

    <!-- 카드 뷰 -->
    <div v-if="viewMode === 'card'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <InfluencerCard
        v-for="influencer in sortedInfluencers"
        :key="influencer.handle"
        :influencer="influencer"
        @click="goToDetail(influencer)"
      />
    </div>

    <!-- 테이블 뷰 -->
    <div v-else class="card-elevated overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr class="border-b border-amore-border">
            <th class="text-left py-4 px-4 text-sm font-semibold text-amore-text">인플루언서</th>
            <th class="text-left py-4 px-4 text-sm font-semibold text-amore-text">국가</th>
            <th class="text-left py-4 px-4 text-sm font-semibold text-amore-text">플랫폼</th>
            <th class="text-center py-4 px-4 text-sm font-semibold text-amore-text">Trust Score</th>
            <th class="text-center py-4 px-4 text-sm font-semibold text-amore-text">상태</th>
            <th class="text-center py-4 px-4 text-sm font-semibold text-amore-text">액션</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="influencer in sortedInfluencers"
            :key="influencer.handle"
            class="border-b border-amore-border hover:bg-amore-rose/30 transition-colors"
          >
            <td class="py-4 px-4">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-gradient-to-br from-amore-primary to-amore-accent rounded-xl flex items-center justify-center">
                  <span class="text-white font-bold text-sm">{{ influencer.displayName?.charAt(0) || '?' }}</span>
                </div>
                <div>
                  <div class="font-medium text-amore-text">{{ influencer.displayName || influencer.handle }}</div>
                  <div class="text-xs text-amore-textLight">@{{ influencer.handle }}</div>
                </div>
              </div>
            </td>
            <td class="py-4 px-4">
              <span class="px-2 py-1 bg-amore-rose rounded-full text-xs font-medium text-amore-text">{{ influencer.country || 'N/A' }}</span>
            </td>
            <td class="py-4 px-4 text-sm text-amore-textLight">{{ influencer.platform || 'N/A' }}</td>
            <td class="py-4 px-4 text-center">
              <div class="flex items-center justify-center space-x-2">
                <span class="text-lg font-bold" :class="getScoreColor(influencer.finalScore)">
                  {{ Math.round(influencer.finalScore) }}
                </span>
              </div>
            </td>
            <td class="py-4 px-4 text-center">
              <DecisionBadge :decision="influencer.decision" />
            </td>
            <td class="py-4 px-4 text-center">
              <button
                @click="goToDetail(influencer)"
                class="text-amore-primary hover:text-amore-accent text-sm font-medium"
              >
                상세보기
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 로딩 상태 -->
    <div v-if="loading" class="text-center py-16">
      <div class="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amore-primary"></div>
      <p class="mt-4 text-amore-textLight">분석 중...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import AnalysisForm from '../components/features/AnalysisForm.vue'
import InfluencerCard from '../components/features/InfluencerCard.vue'
import DecisionBadge from '../components/features/DecisionBadge.vue'

const router = useRouter()
const loading = ref(false)
const influencers = ref([])
const viewMode = ref('card')
const searchQuery = ref('')
const sortBy = ref('score-desc')

const filters = ref({
  decision: '',
  country: '',
  platform: ''
})

const filteredInfluencers = computed(() => {
  let result = influencers.value.filter(item => {
    // 검색어 필터
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      const matchesName = item.displayName?.toLowerCase().includes(query) || false
      const matchesHandle = item.handle?.toLowerCase().includes(query) || false
      if (!matchesName && !matchesHandle) return false
    }
    
    // 상태 필터
    if (filters.value.decision && item.decision !== filters.value.decision) return false
    
    // 국가 필터
    if (filters.value.country && item.country !== filters.value.country) return false
    
    // 플랫폼 필터
    if (filters.value.platform && item.platform !== filters.value.platform) return false
    
    return true
  })
  
  return result
})

const sortedInfluencers = computed(() => {
  const sorted = [...filteredInfluencers.value]
  
  switch (sortBy.value) {
    case 'score-desc':
      return sorted.sort((a, b) => (b.finalScore || 0) - (a.finalScore || 0))
    case 'score-asc':
      return sorted.sort((a, b) => (a.finalScore || 0) - (b.finalScore || 0))
    case 'name-asc':
      return sorted.sort((a, b) => {
        const nameA = (a.displayName || a.handle || '').toLowerCase()
        const nameB = (b.displayName || b.handle || '').toLowerCase()
        return nameA.localeCompare(nameB)
      })
    default:
      return sorted
  }
})

const getScoreColor = (score) => {
  if (score >= 80) return 'text-amore-success'
  if (score >= 60) return 'text-amore-warning'
  return 'text-amore-danger'
}

const handleAnalyzed = (data) => {
  influencers.value = data.influencers || []
}

const goToDetail = (influencer) => {
  router.push({ name: 'influencer-detail', params: { id: influencer.handle } })
}

const exportToExcel = () => {
  // TODO: Excel 내보내기 구현
  alert('Excel 내보내기 기능은 곧 제공됩니다.')
}

const exportToPDF = () => {
  // TODO: PDF 내보내기 구현
  alert('PDF 내보내기 기능은 곧 제공됩니다.')
}

// 페이지 진입 시 데이터 로드 (선택사항)
onMounted(() => {
  // 필요시 초기 데이터 로드
})
</script>

