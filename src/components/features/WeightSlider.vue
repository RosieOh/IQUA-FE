<template>
  <div>
    <div class="flex items-center justify-between mb-3">
      <label class="text-sm font-semibold text-amore-text">{{ label }}</label>
      <span class="text-xl font-bold text-amore-primary">{{ value }}%</span>
    </div>
    <input
      type="range"
      :value="value"
      min="0"
      max="100"
      step="1"
      @input="$emit('update', parseInt($event.target.value))"
      class="w-full h-2.5 bg-amore-rose rounded-full appearance-none cursor-pointer accent-amore-primary"
      style="background: linear-gradient(to right, #E91E63 0%, #E91E63 var(--value), #FFE5EC var(--value), #FFE5EC 100%);"
    />
  </div>
</template>

<script setup>
defineProps({
  label: String,
  value: Number
})

defineEmits(['update'])
</script>

