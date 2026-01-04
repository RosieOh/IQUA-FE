<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- 헤더 -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-amore-text mb-2">마케팅 대시보드</h1>
      <p class="text-amore-textLight">인플루언서 분석 현황 및 통계 요약</p>
    </div>

    <!-- 통계 카드 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatCard
        label="총 분석 인플루언서"
        :value="stats.total"
        subtitle="전체 분석 완료"
        :trend="5.2"
        type="primary"
      />
      <StatCard
        label="추천 인플루언서"
        :value="stats.recommended"
        subtitle="80점 이상"
        :trend="12.5"
        type="success"
      />
      <StatCard
        label="조건부 검토"
        :value="stats.consider"
        subtitle="60-79점"
        :trend="-3.1"
        type="warning"
      />
      <StatCard
        label="제외 대상"
        :value="stats.excluded"
        subtitle="59점 이하"
        :trend="2.3"
        type="danger"
      />
    </div>

    <!-- 차트 및 최근 분석 -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      <!-- 점수 분포 차트 -->
      <div class="lg:col-span-2 card-elevated">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-bold text-amore-text">Trust Score 분포</h2>
          <select class="text-sm border border-amore-border rounded-full px-4 py-2">
            <option>최근 30일</option>
            <option>최근 7일</option>
            <option>전체</option>
          </select>
        </div>
        <ScoreDistributionChart :data="scoreDistribution" />
      </div>

      <!-- 국가별 통계 -->
      <div class="card-elevated">
        <h2 class="text-xl font-bold text-amore-text mb-6">국가별 분석 현황</h2>
        <CountryStatsChart :data="countryStats" />
      </div>
    </div>

    <!-- 최근 분석 결과 -->
    <div class="card-elevated mb-8">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-bold text-amore-text">최근 분석 결과</h2>
        <router-link to="/influencers" class="text-sm text-amore-primary hover:underline font-medium">
          전체 보기 →
        </router-link>
      </div>
      <RecentAnalysisTable :data="recentAnalyses" />
    </div>

    <!-- 빠른 액션 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <router-link to="/influencers" class="card-elevated hover:shadow-xl transition-all group">
        <div class="flex items-center space-x-4">
          <div class="w-12 h-12 bg-amore-primary/10 rounded-xl flex items-center justify-center group-hover:bg-amore-primary/20 transition-colors">
            <svg class="w-6 h-6 text-amore-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <div>
            <h3 class="font-bold text-amore-text">새 분석 시작</h3>
            <p class="text-sm text-amore-textLight">인플루언서 분석 실행</p>
          </div>
        </div>
      </router-link>

      <router-link to="/history" class="card-elevated hover:shadow-xl transition-all group">
        <div class="flex items-center space-x-4">
          <div class="w-12 h-12 bg-amore-success/10 rounded-xl flex items-center justify-center group-hover:bg-amore-success/20 transition-colors">
            <svg class="w-6 h-6 text-amore-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 class="font-bold text-amore-text">분석 히스토리</h3>
            <p class="text-sm text-amore-textLight">과거 분석 결과 확인</p>
          </div>
        </div>
      </router-link>

      <router-link to="/config" class="card-elevated hover:shadow-xl transition-all group">
        <div class="flex items-center space-x-4">
          <div class="w-12 h-12 bg-amore-warning/10 rounded-xl flex items-center justify-center group-hover:bg-amore-warning/20 transition-colors">
            <svg class="w-6 h-6 text-amore-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <h3 class="font-bold text-amore-text">설정 관리</h3>
            <p class="text-sm text-amore-textLight">가중치 및 기준 설정</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import StatCard from '../components/features/StatCard.vue'
import ScoreDistributionChart from '../components/features/ScoreDistributionChart.vue'
import CountryStatsChart from '../components/features/CountryStatsChart.vue'
import RecentAnalysisTable from '../components/features/RecentAnalysisTable.vue'

const stats = ref({
  total: 1247,
  recommended: 342,
  consider: 567,
  excluded: 338
})

const scoreDistribution = ref([
  { range: '90-100', count: 45 },
  { range: '80-89', count: 297 },
  { range: '70-79', count: 423 },
  { range: '60-69', count: 144 },
  { range: '0-59', count: 338 }
])

const countryStats = ref([
  { country: '일본', count: 456, percentage: 36.5 },
  { country: '미국', count: 389, percentage: 31.2 },
  { country: '한국', count: 402, percentage: 32.2 }
])

const recentAnalyses = ref([
  { id: 1, brand: 'Laneige', country: 'JP', platform: 'Instagram', date: '2024-12-24', count: 15 },
  { id: 2, brand: 'Sulwhasoo', country: 'US', platform: 'TikTok', date: '2024-12-23', count: 23 },
  { id: 3, brand: 'Innisfree', country: 'KR', platform: 'Instagram', date: '2024-12-22', count: 18 }
])

onMounted(() => {
  // API에서 대시보드 데이터 로드
})
</script>

