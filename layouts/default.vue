<template>
  <div>
    <header class="sticky top-0 z-10 bg-white py-3">
      <div class="container flex items-center lg:max-w-7xl">
        <div class="grid h-10 w-10 place-items-center">
          <img src="/images/logo.svg" alt="news logo" />
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
          <img src="/images/icon-menu.svg" alt="menu icon" />
        </button>
        <Teleport to="body">
          <Transition name="slide">
            <div v-show="openMenu">
              <div
                class="bg fixed top-0 z-50 h-full w-full bg-slate-950 bg-opacity-50"
              ></div>
              <div
                class="inner fixed right-0 top-0 z-50 min-h-screen w-4/6 bg-white"
              >
                <button
                  class="absolute right-6 top-4 grid h-10 w-10 place-items-center"
                  @click="openMenu = false"
                >
                  <img
                    src="/images/icon-menu-close.svg"
                    alt="menu-close icon"
                  />
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
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
const menus = ['Home', 'New', 'Popular', 'Trending', 'Categories']
const openMenu = ref(false)

watch(openMenu, () => {
  if (openMenu.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
})
</script>

<style scoped>
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
</style>
