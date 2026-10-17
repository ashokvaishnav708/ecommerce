<template>
  <UFooter>
    <template #left>
      <p class="text-muted text-sm">
        Copyright © {{ new Date().getFullYear() }}
      </p>
    </template>
    <UNavigationMenu :items="[]" variant="link" />

    <template #right>
      <UButton
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        to="https://github.com/ashokvaishnav708"
        target="_blank"
        aria-label="GitHub"
      />
    </template>
  </UFooter>
</template>
