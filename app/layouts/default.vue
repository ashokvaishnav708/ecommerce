<template>
  <div class="flex min-h-screen flex-col">
    <Header />
    <main class="flex flex-1 items-center justify-center">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue';
</script>
