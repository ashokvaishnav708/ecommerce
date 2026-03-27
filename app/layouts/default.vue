<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <UMain tag="main" class="flex-1">
      <slot />
    </UMain>
    <Footer />
  </div>
</template>