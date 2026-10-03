<template>
  <footer class="relative overflow-hidden bg-black px-6 py-20 text-white">
    <!-- Background glow -->
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(80,120,255,0.16),transparent_50%)]"
    ></div>

    <div class="relative z-10 mx-auto max-w-6xl">
      <!-- Social / CTA block -->
      <div
        class="rounded-3xl border border-white/10 bg-white/[0.035] p-8 md:p-10"
      >
        <div class="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <!-- Text -->
          <div>
            <p class="text-sm uppercase tracking-[0.35em] text-blue-300">
              Social
            </p>

            <h2 class="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Следите за
              <span class="block text-blue-300">The Science</span>
            </h2>

            <p class="mt-5 max-w-xl text-base leading-8 text-zinc-300 md:text-lg">
              Лайвы, репетиции, фото, видео и всё, что происходит между
              лабораторией и сценой.
            </p>
          </div>

          <!-- Social links -->
          <div class="grid gap-4 sm:grid-cols-2">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 p-5 transition hover:-translate-y-1 hover:border-blue-300/30 hover:bg-white/[0.06]"
            >
              <div
                class="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-400/0 blur-2xl transition group-hover:bg-blue-400/15"
              ></div>

              <div class="relative z-10 flex items-center gap-4">
                <div
                  class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/[0.06]"
                >
                  <img
                    :src="social.icon"
                    :alt="`${social.name} icon`"
                    :class="['object-contain', social.iconClass || 'h-7 w-7']"
                  />
                </div>

                <div class="min-w-0">
                  <p class="text-lg font-black text-white">
                    {{ social.name }}
                  </p>

                  <p class="mt-1 text-sm text-zinc-400">
                    {{ social.text }}
                  </p>
                </div>

                <span
                  class="ml-auto text-xl text-blue-300 opacity-0 transition group-hover:opacity-100"
                >
                  →
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom footer -->
      <div
        class="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between"
      >
        <div>
          <p class="text-lg font-black text-white">
            The Science
          </p>

          <p class="mt-1 text-sm text-zinc-500">
            Рок-группа учёных. Днём — наука, вечером — сцена.
          </p>
        </div>

        <div class="flex flex-wrap gap-5 text-sm text-zinc-400">
          <router-link
            to="/"
            class="transition hover:text-blue-300"
          >
            Главная
          </router-link>

          <router-link
            to="/setlist"
            class="transition hover:text-blue-300"
          >
            Сетлист
          </router-link>

          <router-link
            to="/contact"
            class="transition hover:text-blue-300"
          >
            Контакты
          </router-link>
        </div>
      </div>

      <div class="mt-8 text-sm text-zinc-600">
        © {{ currentYear }} The Science. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script>
import telegramIcon from '../assets/icons/telegram.svg'
import vkIcon from '../assets/icons/vk.svg'
import youtubeIcon from '../assets/icons/youtube.svg'
// import instagramIcon from '../assets/icons/instagram.svg'

export default {
  name: 'SocialFooter',

  data() {
    return {
      currentYear: new Date().getFullYear(),

      socials: [
        {
          name: 'Telegram',
          text: 'новости и быстрые анонсы',
          url: 'https://t.me/YOUR_LINK',
          icon: telegramIcon,
          iconClass: 'h-7 w-7',
        },
        {
          name: 'VK',
          text: 'фото, видео и события',
          url: 'https://vk.com/YOUR_LINK',
          icon: vkIcon,
          iconClass: 'h-8 w-8',
        },
        {
          name: 'YouTube',
          text: 'лайвы и записи выступлений',
          url: 'https://youtube.com/@YOUR_LINK',
          icon: youtubeIcon,
          iconClass: 'h-8 w-8',
        },
        {
          name: 'Instagram',
          text: 'закулисье и моменты',
          url: 'https://instagram.com/YOUR_LINK',
        //   icon: instagramIcon,
          iconClass: 'h-7 w-7',
        },
      ],
    }
  },
}
</script>