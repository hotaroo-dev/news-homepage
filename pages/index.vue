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
              {{ menu }}
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
                        {{ menu }}
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
      <div class="grid grid-cols-1 gap-y-14 lg:grid-cols-3 lg:gap-x-8">
        <div class="col-span-2 space-y-4">
          <div class="relative">
            <nuxt-img
              loading="lazy"
              src="/images/image-web-3-mobile.jpg"
              alt="hero image"
              class="w-full lg:hidden"
              @load="loading = false"
            />
            <nuxt-img
              loading="lazy"
              src="/images/image-web-3-desktop.jpg"
              alt="hero image"
              class="hidden w-full lg:block"
              @load="loading = false"
            />
            <div
              v-if="loading"
              class="absolute top-0 h-full w-full animate-pulse bg-zinc-200"
            ></div>
          </div>
          <div
            class="flex flex-col justify-between gap-4 lg:flex-row lg:gap-10"
          >
            <h1 class="w-1/2 text-3xl font-bold lg:w-[40%] lg:text-5xl">
              The Bright Future of Web 3.0?
            </h1>
            <div class="flex-1 space-y-4 lg:space-y-6">
              <p class="w-11/12 text-gray-500 lg:w-full">
                we dive into the next evolution of the wed that claims to put
                the power of the platforms back into the hands of the peope. But
                is it really fulfilling its promise?
              </p>
              <button
                class="bg-[tomato] px-6 py-3 text-sm font-bold uppercase tracking-[0.25rem] text-white duration-300 hover:bg-black"
              >
                read more
              </button>
            </div>
          </div>
        </div>

        <div class="h-min bg-zinc-900 p-6 lg:py-8">
          <h1 class="mb-6 w-1/2 text-3xl font-bold text-yellow-500">New</h1>
          <ul class="space-y-6">
            <li class="border-b border-gray-600 pb-6 lg:pb-8">
              <h2
                class="mb-1 text-lg font-bold text-white duration-300 hover:text-yellow-500"
              >
                Hydrogen VS Electric Cars
              </h2>
              <p class="text-gray-400">
                will hydrogen-tueled cars ever catch up to EVs?
              </p>
            </li>
            <li class="border-b border-gray-600 pb-6 lg:pb-8">
              <h2
                class="mb-1 text-lg font-bold text-white duration-300 hover:text-yellow-500"
              >
                The Downsides of Al Artistry
              </h2>
              <p class="text-gray-400">
                what are the possible adverse effects o on-demand Al image
                generation?
              </p>
            </li>
            <li>
              <h2
                class="mb-1 text-lg font-bold text-white duration-300 hover:text-yellow-500"
              >
                Is VC Funding Drying Up?
              </h2>
              <p class="text-gray-400">
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-10 py-14 lg:grid-cols-3">
        <div class="grid grid-cols-3 gap-6">
          <img src="/images/image-retro-pcs.jpg" alt="retro pcs" />
          <div class="col-span-2 space-y-2">
            <h2 class="text-3xl font-bold text-gray-300">01</h2>
            <h3 class="text-lg font-bold duration-300 hover:text-orange-600">
              Reviving Retro PCS
            </h3>
            <p class="text-gray-500">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-6">
          <img src="/images/image-top-laptops.jpg" alt="top laptops" />
          <div class="col-span-2 space-y-2">
            <h2 class="text-3xl font-bold text-gray-300">02</h2>
            <h3 class="text-lg font-bold duration-300 hover:text-orange-600">
              Top 10 Laptops of 2022
            </h3>
            <p class="text-gray-500">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-6">
          <img src="/images/image-gaming-growth.jpg" alt="game controller" />
          <div class="col-span-2 space-y-2">
            <h2 class="text-3xl font-bold text-gray-300">03</h2>
            <h3 class="text-lg font-bold duration-300 hover:text-orange-600">
              The Growth of Gaming
            </h3>
            <p class="text-gray-500">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const menus = ['Home', 'New', 'Popular', 'Trending', 'Categories']
const loading = ref(true)
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
