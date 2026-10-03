<template>
  <section
    class="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 py-16 text-white sm:px-6 lg:px-8">
    <!-- Blue / purple center glow -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(80,120,255,0.38),transparent_45%)]"></div>

    <!-- Dark vignette around edges -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_28%,rgba(0,0,0,0.92)_82%)]"></div>

    <!-- Bottom fade -->
    <div class="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.12),rgba(0,0,0,1))]"></div>

    <!-- Content -->
    <div class="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center text-center">
      <h1 class="sr-only">The Science — Rock Band</h1>

      <!-- Small label -->
      <p class="mb-5 text-sm uppercase tracking-[0.45em] text-zinc-400 sm:text-lg md:text-2xl">
        Rock Band
      </p>

      <!-- Logo -->
      <img src="../assets/the-science-logo.png" alt="The Science band logo"
        class="w-full max-w-[900px] object-contain drop-shadow-2xl sm:w-[88vw] md:w-[72vw] lg:w-[62vw] xl:w-[56vw]" />




      <!-- Subtitle -->
      <p class="mt-8 max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base md:text-lg md:leading-8">
        Днём мы занимаемся наукой, а вечером выходим на сцену —
        играем рок, хиты и всё, что заставляет зал петь вместе с нами.
      </p>

      <!-- Buttons -->
      <div class="mt-9 flex flex-col gap-4 sm:flex-row">
        <RouterLink to="/setlist"
          class="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200">
          Сетлист
        </RouterLink>

        <router-link to="/contact"
          class="rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
          Связаться
        </router-link>
      </div>
    </div>
  </section>
</template>