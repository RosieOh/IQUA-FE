<template>
  <div class="overflow-x-auto">
    <table class="w-full">
      <thead>
        <tr class="border-b border-amore-border">
          <th class="text-left py-3 px-4 text-sm font-semibold text-amore-text">브랜드</th>
          <th class="text-left py-3 px-4 text-sm font-semibold text-amore-text">국가</th>
          <th class="text-left py-3 px-4 text-sm font-semibold text-amore-text">플랫폼</th>
          <th class="text-left py-3 px-4 text-sm font-semibold text-amore-text">분석일</th>
          <th class="text-right py-3 px-4 text-sm font-semibold text-amore-text">결과 수</th>
          <th class="text-center py-3 px-4 text-sm font-semibold text-amore-text">액션</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in data"
          :key="item.id"
          class="border-b border-amore-border hover:bg-amore-rose/30 transition-colors cursor-pointer"
          @click="viewDetails(item.id)"
        >
          <td class="py-3 px-4 text-sm font-medium text-amore-text">{{ item.brand }}</td>
          <td class="py-3 px-4 text-sm text-amore-textLight">
            <span class="px-2 py-1 bg-amore-rose rounded-full text-xs">{{ item.country }}</span>
          </td>
          <td class="py-3 px-4 text-sm text-amore-textLight">{{ item.platform }}</td>
          <td class="py-3 px-4 text-sm text-amore-textLight">{{ item.date }}</td>
          <td class="py-3 px-4 text-sm text-right font-semibold text-amore-primary">{{ item.count }}명</td>
          <td class="py-3 px-4 text-center">
            <button
              @click.stop="viewDetails(item.id)"
              class="text-amore-primary hover:text-amore-accent text-sm font-medium"
            >
              보기
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})

const router = useRouter()

const viewDetails = (id) => {
  router.push({ name: 'history', query: { runId: id } })
}
</script>

