<template>
  <div class="card hover:shadow-md transition-all group">
    <div class="w-16 h-16 bg-amore-rose rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amore-primary transition-colors">
      <span class="text-3xl">{{ feature.icon }}</span>
    </div>
    <h3 class="text-xl font-bold text-amore-text mb-3">{{ feature.title }}</h3>
    <p class="text-amore-textLight leading-relaxed">{{ feature.description }}</p>
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

