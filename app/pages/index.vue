<script setup lang="ts">
useHead({
  title: 'Home - Ecommerce Store',
  meta: [
    { name: 'description', content: 'Welcome to our ecommerce store. Browse our products.' }
  ]
})
</script>

<template>
  <div class="py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold mb-4">
        Welcome to Ecommerce Store
      </h1>
      <p class="text-lg text-gray-600 mb-8">
        Discover our amazing products
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="border rounded-lg p-6 hover:shadow-lg transition">
          <h2 class="font-semibold mb-2">Product 1</h2>
          <p class="text-gray-600 text-sm">Product description here</p>
        </div>
        <div class="border rounded-lg p-6 hover:shadow-lg transition">
          <h2 class="font-semibold mb-2">Product 2</h2>
          <p class="text-gray-600 text-sm">Product description here</p>
        </div>
        <div class="border rounded-lg p-6 hover:shadow-lg transition">
          <h2 class="font-semibold mb-2">Product 3</h2>
          <p class="text-gray-600 text-sm">Product description here</p>
        </div>
      </div>
    </div>
  </div>
</template>