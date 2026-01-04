<template>
  <div class="space-y-4">
    <div
      v-for="(item, index) in data"
      :key="index"
      class="space-y-2"
    >
      <div class="flex items-center justify-between text-sm">
        <span class="font-medium text-amore-text">{{ item.country }}</span>
        <span class="text-amore-textLight">{{ item.count }}명 ({{ item.percentage }}%)</span>
      </div>
      <div class="w-full bg-amore-rose rounded-full h-2.5">
        <div
          class="h-2.5 rounded-full bg-amore-primary transition-all"
          :style="{ width: `${item.percentage}%` }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Array,
    required: true
  }
})
</script>

