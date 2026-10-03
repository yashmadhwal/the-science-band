<template>
  <section id="about" class="relative overflow-hidden bg-black px-6 py-24 text-white">
    <!-- Subtle blue glow -->
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(80,120,255,0.16),transparent_50%)]"
    ></div>

    <div class="relative z-10 mx-auto max-w-6xl">
      <div class="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <!-- Left side -->
        <div>
          <p class="text-sm uppercase tracking-[0.35em] text-blue-300">
            About us
          </p>

          <h2 class="mt-4 text-4xl font-black leading-tight md:text-6xl">
            Учёные днём.
            <br />
            <span class="text-blue-300">Рок-группа вечером.</span>
          </h2>

          <p class="mt-6 max-w-xl text-base leading-8 text-zinc-400 md:text-lg">
            Из лабораторий, аудиторий и дедлайнов — прямо на сцену.
          </p>
        </div>

        <!-- Right side -->
        <div class="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <p class="text-base leading-8 text-zinc-300 md:text-lg">
            The Science — рок-группа учёных, инженеров и исследователей.
            Обычно мы занимаемся экспериментами, кодом и дедлайнами, но иногда
            меняем лаборатории на сцену, а формулы — на гитары, барабаны и микрофоны.
          </p>

          <div class="mt-8 grid gap-4 sm:grid-cols-3">
            <article
              v-for="item in items"
              :key="item.title"
              class="rounded-2xl border border-white/10 bg-white/[0.05] p-5 transition hover:-translate-y-1 hover:bg-white/[0.08]"
            >
              <p class="font-mono text-3xl font-black text-blue-300 md:text-4xl">
                {{ item.symbol }}
              </p>

              <h3 class="mt-4 text-base font-bold text-white">
                {{ item.title }}
              </h3>

              <p class="mt-2 text-sm leading-6 text-zinc-400">
                {{ item.text }}
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',

  data() {
    return {
      items: [
        {
          symbol: 'λ',
          title: 'Волна звука',
          text: 'Живой рок, который работает не только в плейлисте, но и на сцене.',
        },
        {
          symbol: 'sound²',
          title: 'Рок в квадрате',
          text: 'Громко, энергично и с небольшой научной самоиронией.',
        },
        {
          symbol: 'E → ∞',
          title: 'Энергия сцены',
          text: 'Когда эксперименты заканчиваются, начинается живой звук.',
        },
      ],
    }
  },
}
</script>