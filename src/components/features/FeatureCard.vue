<template>
  <div class="card hover:shadow-xl transition-all duration-300 group cursor-pointer transform hover:scale-105 hover:-translate-y-2">
    <div class="w-16 h-16 bg-amore-rose rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amore-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
      <span class="text-3xl transition-transform duration-300 group-hover:scale-110">{{ feature.icon }}</span>
    </div>
    <h3 class="text-xl font-bold text-amore-text mb-3 group-hover:text-amore-primary transition-colors duration-300">{{ feature.title }}</h3>
    <p class="text-amore-textLight leading-relaxed group-hover:text-amore-text transition-colors duration-300">{{ feature.description }}</p>
  </div>
</template>

<script setup>
defineProps({
  feature: {
    type: Object,
    required: true
  }
})
</script>

