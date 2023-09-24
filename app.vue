<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import '@fontsource-variable/inter'

useHead({
  title: 'News Homepage',
  meta: [
    {
      name: 'description',
      content: 'News homepage layout'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }
  ],
  link: [{ rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' }]
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 1.25s ease-in;
}

.page-enter-active .bar,
.page-leave-active .bar {
  transition: all 0.5s ease-in;
}

.page-enter-active .bar:nth-child(2),
.page-leave-active .bar:nth-child(2) {
  transition-delay: 100ms;
}
.page-enter-active .bar:nth-child(3),
.page-leave-active .bar:nth-child(3) {
  transition-delay: 200ms;
}
.page-enter-active .bar:nth-child(4),
.page-leave-active .bar:nth-child(4) {
  transition-delay: 300ms;
}
.page-enter-active .bar:nth-child(5),
.page-leave-active .bar:nth-child(5) {
  transition-delay: 400ms;
}

.page-enter-from .bar {
  transform: translateX(0%);
}
.page-enter-to .bar {
  transform: translateX(100%);
}

.page-leave-from .bar {
  transform: translateX(-100%);
}
.page-leave-to .bar {
  transform: translateX(0%);
}
</style>
