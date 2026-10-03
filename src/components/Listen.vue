<template>
  <section class="relative overflow-hidden bg-black px-6 py-24 text-white">
    <!-- Background glow -->
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(80,120,255,0.12),transparent_52%)]"
    ></div>

    <div class="relative z-10 mx-auto max-w-6xl">
      <p class="text-sm uppercase tracking-[0.35em] text-blue-300">
        Listen
      </p>

      <h2 class="mt-4 text-4xl font-black md:text-6xl">
        Слушайте нас
      </h2>

      <p class="mt-5 max-w-2xl text-zinc-300 md:text-lg">
        Записи, лайвы и будущие релизы The Science — на музыкальных платформах.
      </p>

      <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <a
          v-for="platform in platforms"
          :key="platform.name"
          :href="platform.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-blue-300/30 hover:bg-white/[0.07]"
        >
          <!-- Soft hover glow -->
          <div
            class="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-400/0 blur-2xl transition group-hover:bg-blue-400/15"
          ></div>

          <div class="relative z-10">
            <!-- Icon -->
            <div
              class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.06] transition group-hover:bg-blue-300/10"
            >
              <img
                :src="platform.icon"
                :alt="`${platform.name} icon`"
                :class="['object-contain', platform.iconClass || 'h-7 w-7']"
              />
            </div>

            <!-- Text -->
            <div class="flex items-end justify-between gap-4">
              <div class="min-w-0">
                <p class="text-2xl font-black text-white">
                  {{ platform.name }}
                </p>

                <p class="mt-2 text-sm text-zinc-400">
                  {{ platform.text }}
                </p>
              </div>

              <span
                class="translate-x-1 text-xl text-blue-300 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100"
              >
                →
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>

import yandex from '../assets/icons/yandex.svg'
import spotifyIcon from '../assets/icons/spotify.svg'
import vkIcon from '../assets/icons/vk.png'
import youtubeIcon from '../assets/icons/youtube.svg'

export default {
    name: 'ListenSection',

    data() {
        return {
            platforms: [
                {
                    name: 'Yandex Music',
                    text: 'слушать на Яндекс Музыке',
                    url: 'https://music.yandex.ru/',
                    icon: yandex,
                    iconClass: 'h-8 w-8',
                },
                {
                    name: 'Spotify',
                    text: 'listen on Spotify',
                    url: 'https://spotify.com/',
                    icon: spotifyIcon,
                    iconClass: 'h-7 w-7',
                },
                {
                    name: 'VK Music',
                    text: 'слушать во VK',
                    url: 'https://vk.com/',
                    icon: vkIcon,
                    iconClass: 'h-8 w-8',
                },
                {
                    name: 'YouTube',
                    text: 'live videos and recordings',
                    url: 'https://youtube.com/',
                    icon: youtubeIcon,
                    iconClass: 'h-8 w-8',
                },
            ],
        }
    }
}
</script>