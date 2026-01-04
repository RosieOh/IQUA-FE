<template>
  <div class="relative">
    <div class="flex items-start space-x-4">
      <div class="flex-shrink-0">
        <div class="w-12 h-12 bg-amore-primary rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
          {{ step }}
        </div>
      </div>
      <div class="flex-1 pt-1">
        <h3 class="text-xl font-bold text-amore-text mb-2">{{ title }}</h3>
        <p class="text-amore-textLight leading-relaxed">{{ description }}</p>
      </div>
    </div>
    <div v-if="!isLast" class="absolute left-6 top-16 w-0.5 h-full bg-amore-rose" style="height: calc(100% + 2rem);"></div>
  </div>
</template>

<script setup>
defineProps({
  step: Number,
  title: String,
  description: String,
  isLast: Boolean
})
</script>

