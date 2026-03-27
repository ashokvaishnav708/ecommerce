<script setup lang="ts">
//
</script>

<template>
  <UHeader>
    <template #title>
      <div class="font-bold text-lg truncate">
        Ecommerce Store
      </div>
    </template>
    <nav class="flex items-center gap-6">
      <NuxtLink to="/" class="text-sm font-medium hover:text-primary">
        Home
      </NuxtLink>
    </nav>
    <template #right>
      <div class="flex items-center gap-4">
        <button aria-label="Shopping cart" class="p-2 hover:bg-gray-100 rounded">
          🛒
        </button>
        <button aria-label="User profile" class="p-2 hover:bg-gray-100 rounded">
          👤
        </button>
      </div>
    </template>
  </UHeader>
</template>