<template>
  <nav class="bg-white/95 backdrop-blur-sm border-b border-amore-border sticky top-0 z-50 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20">
        <div class="flex items-center">
          <router-link to="/" class="flex items-center">
            <Logo />
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
import Logo from './Logo.vue'

const navItems = [
  { path: '/dashboard', label: '대시보드' },
  { path: '/influencers', label: '인플루언서 리스트' },
  { path: '/comparison', label: '국가별 비교' },
  { path: '/config', label: '설정' },
  { path: '/history', label: '분석 히스토리' }
]
</script>

