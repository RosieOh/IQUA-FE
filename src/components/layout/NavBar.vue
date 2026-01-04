<template>
  <nav class="bg-white/95 backdrop-blur-sm border-b border-amore-border sticky top-0 z-50 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20">
        <div class="flex items-center">
          <router-link to="/" class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-gradient-to-br from-amore-primary to-amore-accent rounded-xl flex items-center justify-center shadow-sm">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <span class="text-xl font-bold text-amore-text">Influencer Intelligence</span>
          </router-link>
        </div>
        <div class="flex items-center space-x-2">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="text-amore-textLight hover:text-amore-primary px-4 py-2 rounded-full text-sm font-medium transition-colors"
            active-class="text-amore-primary bg-amore-rose"
          >
            {{ item.label }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const navItems = [
  { path: '/dashboard', label: '대시보드' },
  { path: '/influencers', label: '인플루언서 리스트' },
  { path: '/comparison', label: '국가별 비교' },
  { path: '/config', label: '설정' },
  { path: '/history', label: '분석 히스토리' }
]
</script>

