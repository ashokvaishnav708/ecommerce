<template>
  <UHeader>
    <template #title>
      E-Commerce
    </template>
    <template #right>
      <UColorModeButton />
    </template>
    <UNavigationMenu :items="navigationMenuItems" />
  </UHeader>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

// TODO: Later fetch from DB for the items
const navigationMenuItems = ref<NavigationMenuItem[]>([]);
</script>
