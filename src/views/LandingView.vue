<template>
  <div class="min-h-screen bg-amore-cream">
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-white via-amore-cream to-amore-rose">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left: Content -->
          <div>
            <div class="inline-flex items-center space-x-2 px-4 py-2 bg-amore-rose rounded-full mb-6">
              <svg class="w-5 h-5 text-amore-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span class="text-sm font-semibold text-amore-primary">AI 기반 인플루언서 분석 솔루션</span>
            </div>
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-amore-text mb-6 leading-tight">
              글로벌 인플루언서
              <br/>
              <span class="text-amore-primary">신뢰도 분석 플랫폼</span>
            </h1>
            <p class="text-xl text-amore-textLight mb-8 leading-relaxed">
              아모레퍼시픽 마케팅 팀을 위한 AI 기반 인플루언서 평가 시스템.<br/>
              신뢰도, 진정성, 전환 가능성을 정량화하여 데이터 기반 마케팅 의사결정을 지원합니다.
            </p>
            <div class="flex flex-wrap gap-4 mb-8">
              <router-link to="/dashboard" class="btn-primary text-lg px-8 py-4">
                대시보드 시작하기
              </router-link>
              <router-link to="/influencers" class="btn-secondary text-lg px-8 py-4">
                인플루언서 분석
              </router-link>
            </div>
            <!-- Trust Indicators -->
            <div class="flex items-center space-x-6 text-sm text-amore-textLight">
              <div class="flex items-center space-x-2">
                <svg class="w-5 h-5 text-amore-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>실시간 분석</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-5 h-5 text-amore-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>AI 리포트 생성</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-5 h-5 text-amore-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>데이터 내보내기</span>
              </div>
            </div>
          </div>
          
          <!-- Right: Visual -->
          <div class="relative">
            <div class="card-elevated p-8 bg-white/90 backdrop-blur-sm">
              <div class="text-center mb-6">
                <div class="inline-block relative">
                  <svg class="transform -rotate-90 w-48 h-48 mx-auto">
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      stroke="currentColor"
                      stroke-width="12"
                      fill="none"
                      class="text-amore-rose"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      stroke="currentColor"
                      stroke-width="12"
                      fill="none"
                      stroke-dasharray="502"
                      stroke-dashoffset="70"
                      class="text-amore-primary"
                    />
                  </svg>
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="text-center">
                      <div class="text-4xl font-bold text-amore-primary">86</div>
                      <div class="text-xs text-amore-textLight mt-1">Trust Score</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="space-y-3">
                <div class="flex items-center justify-between text-sm">
                  <span class="text-amore-textLight">Engagement</span>
                  <span class="font-semibold text-amore-text">92점</span>
                </div>
                <div class="flex items-center justify-between text-sm">
                  <span class="text-amore-textLight">Comment Quality</span>
                  <span class="font-semibold text-amore-text">85점</span>
                </div>
                <div class="flex items-center justify-between text-sm">
                  <span class="text-amore-textLight">Originality</span>
                  <span class="font-semibold text-amore-text">78점</span>
                </div>
                <div class="flex items-center justify-between text-sm">
                  <span class="text-amore-textLight">Brand Fit</span>
                  <span class="font-semibold text-amore-text">88점</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Decorative Elements -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div class="absolute top-20 left-10 w-96 h-96 bg-amore-rose opacity-20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-amore-secondary opacity-15 rounded-full blur-3xl"></div>
      </div>
    </section>

    <!-- Performance Metrics -->
    <section class="py-16 bg-gradient-to-br from-amore-primary via-amore-secondary to-amore-accent">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <PerformanceMetric value="1,247+" label="분석된 인플루언서" />
          <PerformanceMetric value="342" label="추천 인플루언서" />
          <PerformanceMetric value="86%" label="평균 Trust Score" />
          <PerformanceMetric value="15개" label="지원 국가" />
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-24 bg-gradient-to-b from-white via-amore-rose to-amore-cream">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="section-title">왜 아모레퍼시픽 마케팅 팀을 위한 솔루션인가</h2>
          <p class="section-subtitle max-w-3xl mx-auto">
            데이터 기반 의사결정으로 마케팅 ROI를 극대화하고,<br/>
            신뢰할 수 있는 인플루언서 파트너십을 구축하세요
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            v-for="feature in features"
            :key="feature.title"
            :feature="feature"
          />
        </div>

        <!-- Value Propositions -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div class="card-elevated text-center">
            <div class="w-16 h-16 bg-amore-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-amore-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-amore-text mb-2">마케팅 효율 향상</h3>
            <p class="text-amore-textLight">인플루언서 선정 시간을 70% 단축하고, 전환율이 높은 파트너를 우선적으로 발굴합니다.</p>
          </div>
          <div class="card-elevated text-center">
            <div class="w-16 h-16 bg-amore-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-amore-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-amore-text mb-2">리스크 최소화</h3>
            <p class="text-amore-textLight">봇 계정, 허수 계정, 부정 행위를 사전에 탐지하여 브랜드 평판을 보호합니다.</p>
          </div>
          <div class="card-elevated text-center">
            <div class="w-16 h-16 bg-amore-warning/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-amore-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-amore-text mb-2">데이터 기반 의사결정</h3>
            <p class="text-amore-textLight">주관적 판단 대신 정량적 지표로 객관적이고 투명한 인플루언서 평가가 가능합니다.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="py-24 bg-gradient-to-br from-white via-amore-rose to-amore-cream">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="section-title">작동 방식</h2>
          <p class="section-subtitle">간단한 4단계로 인플루언서 분석을 시작하세요</p>
        </div>
        
        <div class="max-w-4xl mx-auto space-y-8">
          <WorkflowStep
            v-for="(step, index) in workflowSteps"
            :key="index"
            :step="index + 1"
            :title="step.title"
            :description="step.description"
            :is-last="index === workflowSteps.length - 1"
          />
        </div>
      </div>
    </section>

    <!-- Trust Score Section -->
    <section class="py-24 bg-gradient-to-br from-amore-cream via-amore-rose to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="section-title">
              Influencer Trust Score
            </h2>
            <p class="section-subtitle mb-8">
              4대 핵심 지표를 기반으로 0~100점의 Trust Score를 자동 계산합니다.
            </p>
            <div class="space-y-5">
              <ScoreIndicator label="Engagement Quality" score="92" />
              <ScoreIndicator label="Comment Quality" score="85" />
              <ScoreIndicator label="Content Originality" score="78" />
              <ScoreIndicator label="Brand Fit" score="88" />
            </div>
          </div>
          <div class="card-elevated">
            <div class="text-center">
              <div class="inline-block relative">
                <svg class="transform -rotate-90 w-64 h-64">
                  <circle
                    cx="128"
                    cy="128"
                    r="100"
                    stroke="currentColor"
                    stroke-width="16"
                    fill="none"
                    class="text-amore-rose"
                  />
                  <circle
                    cx="128"
                    cy="128"
                    r="100"
                    stroke="currentColor"
                    stroke-width="16"
                    fill="none"
                    stroke-dasharray="628"
                    stroke-dashoffset="87.92"
                    class="text-amore-primary"
                  />
                </svg>
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-center">
                    <div class="text-5xl font-bold text-amore-primary">86</div>
                    <div class="text-sm text-amore-textLight mt-1">Trust Score</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Country Comparison Section -->
    <section class="py-24 bg-gradient-to-b from-amore-cream via-amore-rose to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-20">
          <h2 class="section-title">국가별 맞춤 평가</h2>
          <p class="section-subtitle">각 국가의 SNS 소비 문화에 맞춘 자동 가중치 조정</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CountryCard
            v-for="country in countries"
            :key="country.code"
            :country="country"
          />
        </div>
      </div>
    </section>

    <!-- Use Cases Section -->
    <section class="py-24 bg-gradient-to-b from-white via-amore-rose to-amore-cream">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="section-title">실제 활용 사례</h2>
          <p class="section-subtitle">아모레퍼시픽 마케팅 팀이 어떻게 활용하는지 확인하세요</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="card-elevated">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-12 h-12 bg-amore-primary/10 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-amore-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-amore-text mb-2">신제품 런칭 캠페인</h3>
                <p class="text-amore-textLight mb-4">
                  Laneige 신제품 런칭 시, 일본 시장에서 Trust Score 85점 이상의 인플루언서 15명을 선정하여 
                  캠페인을 진행했습니다. 결과적으로 예상 전환율보다 40% 높은 성과를 달성했습니다.
                </p>
                <div class="flex items-center space-x-4 text-sm">
                  <span class="px-3 py-1 bg-amore-rose rounded-full text-amore-text font-medium">Laneige</span>
                  <span class="text-amore-textLight">일본 시장</span>
                </div>
              </div>
            </div>
          </div>

          <div class="card-elevated">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-12 h-12 bg-amore-success/10 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-amore-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-amore-text mb-2">분기별 인플루언서 리뷰</h3>
                <p class="text-amore-textLight mb-4">
                  분기마다 기존 파트너십 인플루언서의 Trust Score를 재평가하여, 
                  성과가 저조한 파트너를 조기에 식별하고 새로운 인플루언서로 교체했습니다.
                </p>
                <div class="flex items-center space-x-4 text-sm">
                  <span class="px-3 py-1 bg-amore-rose rounded-full text-amore-text font-medium">전 브랜드</span>
                  <span class="text-amore-textLight">분기별 리뷰</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-br from-amore-primary via-amore-secondary to-amore-accent relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 left-0 w-full h-full" style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
      </div>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          지금 바로 시작하세요
        </h2>
        <p class="text-xl text-white/95 mb-10 leading-relaxed">
          데이터 기반 인플루언서 마케팅으로<br/>
          마케팅 ROI를 극대화하고 브랜드 성장을 가속화하세요
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <router-link to="/dashboard" class="inline-block bg-white text-amore-primary font-semibold text-lg px-10 py-4 rounded-full hover:bg-amore-secondary transition-all shadow-lg hover:shadow-xl">
            대시보드 시작하기 →
          </router-link>
          <router-link to="/influencers" class="inline-block bg-white/10 backdrop-blur-sm text-white border-2 border-white font-semibold text-lg px-10 py-4 rounded-full hover:bg-white/20 transition-all">
            인플루언서 분석하기
          </router-link>
        </div>
        <p class="text-white/80 text-sm mt-6">
          무료로 시작하고, 언제든지 업그레이드할 수 있습니다
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import FeatureCard from '../components/features/FeatureCard.vue'
import ScoreIndicator from '../components/features/ScoreIndicator.vue'
import CountryCard from '../components/features/CountryCard.vue'
import PerformanceMetric from '../components/features/PerformanceMetric.vue'
import WorkflowStep from '../components/features/WorkflowStep.vue'

const features = ref([
  {
    icon: '📊',
    title: 'Trust Score 계산',
    description: 'Engagement, Comment Quality, Originality, Brand Fit 4대 지표를 종합한 신뢰도 점수'
  },
  {
    icon: '🤖',
    title: 'AI 기반 리포트',
    description: 'Gemini AI가 생성하는 자연어 마케팅 리포트와 인사이트 제공'
  },
  {
    icon: '🌍',
    title: '국가별 자동 조정',
    description: '일본, 미국 등 국가별 SNS 문화에 맞춘 가중치 자동 적용'
  },
  {
    icon: '✅',
    title: '추천/제외 판단',
    description: '80점 이상 추천, 60~79점 조건부, 59점 이하 제외 자동 분류'
  },
  {
    icon: '📈',
    title: '성과 예측',
    description: '브랜드 적합도와 전환 가능성을 정량화하여 예측'
  },
  {
    icon: '🔍',
    title: '리스크 탐지',
    description: '봇 계정, 중복 콘텐츠, 허수 계정 자동 탐지 및 경고'
  }
])

const countries = ref([
  {
    code: 'JP',
    name: '일본',
    description: '이미지 정제도와 브랜드 톤 중시',
    weights: { engagement: 25, comment: 20, originality: 25, brandFit: 30 }
  },
  {
    code: 'US',
    name: '미국',
    description: '솔직한 리뷰와 UGC 성격 중시',
    weights: { engagement: 30, comment: 30, originality: 20, brandFit: 20 }
  },
  {
    code: 'KR',
    name: '한국',
    description: '균형잡힌 평가 기준',
    weights: { engagement: 25, comment: 25, originality: 25, brandFit: 25 }
  }
])

const workflowSteps = ref([
  {
    title: '인플루언서 정보 입력',
    description: '분석하고자 하는 인플루언서의 핸들, 브랜드, 국가, 플랫폼 정보를 입력합니다.'
  },
  {
    title: '자동 데이터 수집',
    description: 'AI가 소셜 미디어에서 인플루언서의 메트릭, 댓글, 콘텐츠를 자동으로 수집합니다.'
  },
  {
    title: 'Trust Score 계산',
    description: '4대 핵심 지표를 기반으로 국가별 가중치를 적용하여 Trust Score를 계산합니다.'
  },
  {
    title: 'AI 리포트 생성',
    description: 'Gemini AI가 분석 결과를 바탕으로 마케팅 인사이트와 추천 사유를 포함한 리포트를 생성합니다.'
  }
])
</script>

