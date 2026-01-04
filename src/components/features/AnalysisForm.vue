<template>
  <div class="card-elevated">
    <h2 class="text-2xl font-bold text-amore-text mb-6">새로운 분석 실행</h2>
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <label class="block text-sm font-semibold text-amore-text mb-2">브랜드</label>
          <input
            v-model="form.brand"
            type="text"
            placeholder="예: Laneige"
            class="w-full bg-white border border-amore-border rounded-xl px-4 py-3 text-amore-text focus:outline-none focus:ring-2 focus:ring-amore-primary focus:border-transparent"
            required
          />
        </div>
        <div>
          <label class="block text-sm font-semibold text-amore-text mb-2">국가</label>
          <select
            v-model="form.country"
            class="w-full bg-white border border-amore-border rounded-xl px-4 py-3 text-amore-text focus:outline-none focus:ring-2 focus:ring-amore-primary focus:border-transparent"
            required
          >
            <option value="">선택</option>
            <option value="JP">일본</option>
            <option value="US">미국</option>
            <option value="KR">한국</option>
            <option value="SG">싱가포르</option>
            <option value="TH">태국</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-semibold text-amore-text mb-2">플랫폼</label>
          <select
            v-model="form.platform"
            class="w-full bg-white border border-amore-border rounded-xl px-4 py-3 text-amore-text focus:outline-none focus:ring-2 focus:ring-amore-primary focus:border-transparent"
            required
          >
            <option value="">선택</option>
            <option value="INSTAGRAM">Instagram</option>
            <option value="TIKTOK">TikTok</option>
            <option value="YOUTUBE">YouTube</option>
          </select>
        </div>
      </div>
      <div>
        <label class="block text-sm font-semibold text-amore-text mb-2">인플루언서 핸들 (쉼표로 구분)</label>
        <textarea
          v-model="form.handles"
          placeholder="예: tokyo_beauty_life, kawaii_makeup_daily"
          class="w-full bg-white border border-amore-border rounded-xl px-4 py-3 text-amore-text h-28 focus:outline-none focus:ring-2 focus:ring-amore-primary focus:border-transparent resize-none"
          required
        />
      </div>
      <div class="flex justify-end space-x-3 pt-4">
        <button type="button" @click="handleAnalyze" class="btn-secondary">
          분석만 실행
        </button>
        <button type="submit" class="btn-primary">
          리포트 생성
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { influencerAPI } from '../../services/api'

const emit = defineEmits(['analyzed'])

const form = ref({
  brand: '',
  country: '',
  platform: '',
  handles: ''
})

const handleSubmit = async () => {
  const handles = form.value.handles.split(',').map(h => h.trim()).filter(h => h)
  const data = {
    brand: form.value.brand,
    country: form.value.country,
    platform: form.value.platform,
    influencerHandles: handles
  }
  
  try {
    const response = await influencerAPI.generateReport(data)
    emit('analyzed', response.data.data)
  } catch (error) {
    console.error('리포트 생성 실패:', error)
    alert('리포트 생성에 실패했습니다.')
  }
}

const handleAnalyze = async () => {
  const handles = form.value.handles.split(',').map(h => h.trim()).filter(h => h)
  const data = {
    brand: form.value.brand,
    country: form.value.country,
    platform: form.value.platform,
    influencerHandles: handles
  }
  
  try {
    const response = await influencerAPI.analyze(data)
    emit('analyzed', response.data.data)
  } catch (error) {
    console.error('분석 실패:', error)
    alert('분석에 실패했습니다.')
  }
}
</script>

