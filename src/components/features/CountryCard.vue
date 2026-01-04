<template>
  <div class="card hover:shadow-lg transition-all">
    <div class="text-center mb-6">
      <div class="text-3xl font-bold text-amore-text mb-3">{{ country.name }}</div>
      <p class="text-amore-textLight text-sm leading-relaxed">{{ country.description }}</p>
    </div>
    <div class="space-y-4 mt-8 pt-6 border-t border-amore-border">
      <div class="flex items-center justify-between text-sm">
        <span class="text-amore-textLight">Engagement</span>
        <span class="text-amore-text font-semibold">{{ country.weights.engagement }}%</span>
      </div>
      <div class="flex items-center justify-between text-sm">
        <span class="text-amore-textLight">Comment</span>
        <span class="text-amore-text font-semibold">{{ country.weights.comment }}%</span>
      </div>
      <div class="flex items-center justify-between text-sm">
        <span class="text-amore-textLight">Originality</span>
        <span class="text-amore-text font-semibold">{{ country.weights.originality }}%</span>
      </div>
      <div class="flex items-center justify-between text-sm">
        <span class="text-amore-textLight">Brand Fit</span>
        <span class="text-amore-text font-semibold">{{ country.weights.brandFit }}%</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  country: {
    type: Object,
    required: true
  }
})
</script>

