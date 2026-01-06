<template>
  <div class="min-h-screen bg-amore-cream">
    <NavBar />
    <router-view v-slot="{ Component, route }">
      <transition
        :name="route.meta.transition || 'fade'"
        mode="out-in"
      >
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import NavBar from './components/layout/NavBar.vue'
</script>

