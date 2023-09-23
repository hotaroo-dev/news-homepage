<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import '@fontsource-variable/inter'

useHead({
  title: 'News Homepage',
  meta: [
    {
      name: 'description',
      content: 'News homepage layout'
    }
  ],
  link: [{ rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' }]
})
</script>
