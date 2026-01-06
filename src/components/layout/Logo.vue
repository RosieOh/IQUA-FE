<template>
  <div class="flex items-center space-x-3 group cursor-pointer">
    <!-- Logo Icon -->
    <div class="relative">
      <div class="w-12 h-12 bg-gradient-to-br from-amore-primary via-amore-secondary to-amore-accent rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 overflow-hidden">
        <!-- Animated Background -->
        <div class="absolute inset-0 bg-gradient-to-br from-amore-accent via-amore-primary to-amore-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <!-- Trust Score Chart Icon -->
        <svg class="w-7 h-7 text-white relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Background Circle -->
          <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" stroke-width="2" fill="none"/>
          <!-- Trust Score Arc -->
          <circle 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="white" 
            stroke-width="2.5" 
            fill="none"
            stroke-dasharray="62.83"
            stroke-dashoffset="12.57"
            stroke-linecap="round"
            transform="rotate(-90 12 12)"
            class="logo-arc"
          />
          <!-- Checkmark -->
          <path 
            d="M8 12L11 15L16 9" 
            stroke="white" 
            stroke-width="2.5" 
            stroke-linecap="round" 
            stroke-linejoin="round"
            class="logo-checkmark"
          />
        </svg>
      </div>
      <!-- Glow Effect -->
      <div class="absolute inset-0 bg-gradient-to-br from-amore-primary to-amore-accent rounded-xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300 -z-10"></div>
    </div>
    
    <!-- Logo Text -->
    <div class="flex flex-col">
      <span class="text-xl font-bold bg-gradient-to-r from-amore-primary to-amore-accent bg-clip-text text-transparent group-hover:from-amore-accent group-hover:to-amore-primary transition-all duration-300 tracking-tight">
        IQUA
      </span>
      <span class="text-xs text-amore-textLight font-medium -mt-1 group-hover:text-amore-primary transition-colors duration-300">
        Intelligence Quality
      </span>
    </div>
  </div>
</template>

<script setup>
// Logo component for navigation bar
</script>

<style scoped>
.logo-arc {
  transition: stroke-dashoffset 0.8s ease-in-out;
}

.group:hover .logo-arc {
  stroke-dashoffset: 0;
}

.logo-checkmark {
  opacity: 0;
  transition: opacity 0.4s ease-in-out 0.3s;
}

.group:hover .logo-checkmark {
  opacity: 1;
}
</style>

