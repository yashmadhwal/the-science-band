<template>
  <main class="min-h-screen overflow-hidden bg-black text-white">
    <section class="relative px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <!-- Background glow -->
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(80,120,255,0.26),transparent_42%)]"
      ></div>

      <div
        class="absolute -left-32 top-32 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl lg:h-96 lg:w-96"
      ></div>

      <div
        class="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl lg:h-96 lg:w-96"
      ></div>

      <!-- Dark overlay -->
      <div
        class="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.05),rgba(0,0,0,1))]"
      ></div>

      <div class="relative z-10 mx-auto max-w-7xl">
        <!-- Back button -->
        <router-link
          to="/"
          class="inline-flex items-center rounded-full border border-white/15 px-5 py-2 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white"
        >
          ← На главную
        </router-link>

        <!-- Main content -->
        <div class="mt-10 grid gap-8 lg:mt-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
          <!-- Image area -->
          <div class="relative">
            <!-- Glow behind people -->
            <div
              class="absolute inset-x-6 bottom-0 h-24 rounded-full bg-blue-500/25 blur-3xl sm:h-32 lg:h-40"
            ></div>

            <img
              :src="contactImage"
              alt="The Science band team"
              class="relative z-10 mx-auto w-full max-w-[520px] object-contain drop-shadow-2xl lg:max-w-3xl"
            />

            <!-- Bottom fade -->
            <div
              class="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-black to-transparent lg:h-32"
            ></div>
          </div>

          <!-- Contact content -->
          <div>
            <p class="text-xs uppercase tracking-[0.45em] text-blue-300 sm:text-sm">
              Contact
            </p>

            <h1
              class="mt-5 max-w-full break-words text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Будем рады
              <span class="block text-blue-300">сотрудничеству!</span>
            </h1>

            <p class="mt-6 max-w-2xl text-base leading-8 text-zinc-300 lg:text-lg">
              Хотите пригласить The Science на мероприятие, обсудить выступление,
              формат, звук или технические детали? Напишите или позвоните нам.
            </p>

            <!-- Contact cards -->
            <div class="mt-8 space-y-4 lg:mt-10 lg:space-y-5">
              <a
                href="tel:+79779300816"
                class="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-4 transition hover:-translate-y-1 hover:bg-white/[0.08] sm:gap-5 sm:p-5"
              >
                <div
                  class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-300/30 bg-blue-300/10 text-xl text-blue-200 sm:h-14 sm:w-14 sm:text-2xl"
                >
                  ☎
                </div>

                <div class="min-w-0">
                  <p class="text-xl font-black text-white sm:text-2xl">
                    +7 977 930 0816
                  </p>
                  <p class="mt-1 text-sm text-zinc-400">
                    по организационным вопросам
                  </p>
                </div>
              </a>

              <a
                href="tel:+79778876443"
                class="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-4 transition hover:-translate-y-1 hover:bg-white/[0.08] sm:gap-5 sm:p-5"
              >
                <div
                  class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-300/30 bg-blue-300/10 text-xl text-blue-200 sm:h-14 sm:w-14 sm:text-2xl"
                >
                  ⚙
                </div>

                <div class="min-w-0">
                  <p class="text-xl font-black text-white sm:text-2xl">
                    +7 977 887 6443
                  </p>
                  <p class="mt-1 text-sm text-zinc-400">
                    вопросы по технической части
                  </p>
                </div>
              </a>
            </div>

            <!-- Buttons -->
            <div class="mt-8 flex flex-col gap-4 sm:flex-row lg:mt-10">
              <a
                href="tel:+79779300816"
                class="rounded-full bg-white px-7 py-3 text-center text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                Позвонить
              </a>

              <router-link
                to="/setlist"
                class="rounded-full border border-white/25 px-7 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Посмотреть сетлист
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import contactImage from '../assets/contact-team.png'

export default {
  name: 'Contact',

  data() {
    return {
      contactImage,
    }
  },
}
</script>