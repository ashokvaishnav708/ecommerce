<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <UMain tag="main" class="flex flex-col justify-center">
      <slot />
    </UMain>
    <Footer />
  </div>
</template>