<template>
  <div>
    <header class="sticky top-0 z-10 bg-white py-3">
      <div class="container flex items-center lg:max-w-7xl">
        <div class="grid h-10 w-10 place-items-center">
          <NuxtLink to="/">
            <img :src="logoImage" alt="news logo" />
          </NuxtLink>
        </div>
        <nav class="flex-1">
          <ul class="hidden justify-end gap-8 text-gray-500 lg:flex">
            <li
              v-for="(menu, idx) in menus"
              :key="idx"
              class="cursor-pointer duration-300 hover:text-orange-500"
            >
              <NuxtLink :to="`/${menu === 'Home' ? '' : menu.toLowerCase()}`">
                {{ menu }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <button
          class="h-10 w-10 place-items-center lg:hidden"
          @click="openMenu = true"
        >
          <img :src="iconMenu" alt="menu icon" />
        </button>
        <Teleport to="body">
          <Transition name="slide">
            <div v-show="openMenu">
              <div
                class="bg fixed inset-0 z-50 bg-slate-950 bg-opacity-50"
              ></div>
              <div
                class="inner fixed right-0 top-0 z-50 h-screen w-[70%] bg-white"
              >
                <button
                  class="absolute right-6 top-4 grid h-10 w-10 place-items-center"
                  @click="openMenu = false"
                >
                  <img :src="iconMenuClose" alt="menu-close icon" />
                </button>
                <nav class="pl-6 pt-40">
                  <ul class="space-y-6 text-xl">
                    <TransitionGroup>
                      <li
                        v-for="(menu, idx) in menus"
                        :key="idx"
                        class="cursor-pointer duration-300 hover:text-orange-500"
                      >
                        <NuxtLink
                          :to="`/${menu === 'Home' ? '' : menu.toLowerCase()}`"
                        >
                          {{ menu }}
                        </NuxtLink>
                      </li>
                    </TransitionGroup>
                  </ul>
                </nav>
              </div>
            </div>
          </Transition>
        </Teleport>
      </div>
    </header>

    <main class="container py-3 lg:max-w-7xl">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
import '@fontsource-variable/inter'
import logoImage from '~/assets/images/logo.svg'
import iconMenu from '~/assets/images/icon-menu.svg'
import iconMenuClose from '~/assets/images/icon-menu-close.svg'

const router = useRouter()
const menus = ['Home', 'New', 'Popular', 'Trending', 'Categories']
const openMenu = ref(false)

router.beforeEach((to, from) => {
  if (openMenu.value) {
    openMenu.value = false
  }
})

watch(openMenu, () => {
  if (openMenu.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
})

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
.router-link-exact-active {
  @apply text-orange-500;
}

.slide-enter-active,
.slide-leave-active,
.slide-enter-active .inner,
.slide-leave-active .inner {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-enter-active .bg {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0.5s;
}

.slide-leave-active .bg {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0;
}

.slide-enter-from .bg,
.slide-leave-to .bg {
  background-color: transparent;
}

.slide-enter-from .inner,
.slide-leave-to .inner {
  transform: translateX(100%);
}

.page-enter-active,
.page-leave-active {
  transition: all 1.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-enter-active .bar,
.page-leave-active .bar {
  transition: all 0.65s cubic-bezier(0.4, 0, 0.2, 1);
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

.page-enter-from .bar .page-leave-to .bar {
  transform: translateX(0%);
}
.page-enter-to .bar {
  transform: translateX(100%);
}
.page-leave-from .bar {
  transform: translateX(-100%);
}
</style>
