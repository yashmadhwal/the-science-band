<template>
  <main class="min-h-screen bg-black text-white">
    <!-- Hero / Header -->
    <section class="relative overflow-hidden px-6 py-24">
      <!-- Blue glow -->
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(80,120,255,0.28),transparent_45%)]"
      ></div>

      <!-- Dark fade -->
      <div
        class="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,1))]"
      ></div>

      <div class="relative z-10 mx-auto max-w-6xl">
        <router-link
          to="/"
          class="inline-flex items-center rounded-full border border-white/15 px-5 py-2 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white"
        >
          ← На главную
        </router-link>

        <div class="mt-16 max-w-3xl">
          <p class="text-sm uppercase tracking-[0.35em] text-blue-300">
            The Science
          </p>

          <h1 class="mt-4 text-5xl font-black leading-tight md:text-7xl">
            Сетлист
          </h1>

          <p class="mt-6 text-base leading-8 text-zinc-300 md:text-lg">
            Рок, поп-рок, русские хиты и немного научного хаоса.
            Здесь собраны песни, которые мы можем играть или рассматриваем
            для живых выступлений.
          </p>
        </div>
      </div>
    </section>

    <!-- Categories -->
    <section class="px-6 pb-24">
      <div class="mx-auto max-w-6xl">
        <!-- Filter buttons -->
        <div class="mb-10 flex flex-wrap gap-3">
          <button
            type="button"
            class="rounded-full px-5 py-2 text-sm font-semibold transition"
            :class="activeCategory === 'all'
              ? 'bg-white text-black'
              : 'border border-white/15 text-zinc-300 hover:bg-white/10 hover:text-white'"
            @click="activeCategory = 'all'"
          >
            Все
          </button>

          <button
            v-for="category in categories"
            :key="category"
            type="button"
            class="rounded-full px-5 py-2 text-sm font-semibold transition"
            :class="activeCategory === category
              ? 'bg-white text-black'
              : 'border border-white/15 text-zinc-300 hover:bg-white/10 hover:text-white'"
            @click="activeCategory = category"
          >
            {{ category }}
          </button>
        </div>

        <!-- Song grid -->
        <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="song in filteredSongs"
            :key="`${song.artist}-${song.title}`"
            class="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:bg-white/[0.07]"
          >
            <div class="flex items-start justify-between gap-4">
              <div>
                <p class="text-sm text-zinc-400">
                  {{ song.artist }}
                </p>

                <h2 class="mt-2 text-xl font-bold leading-snug text-white">
                  {{ song.title }}
                </h2>
              </div>

              <span
                class="shrink-0 rounded-full border border-blue-300/20 bg-blue-300/10 px-3 py-1 text-xs text-blue-200"
              >
                {{ song.categoryShort }}
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Setlist',

  data() {
    return {
      activeCategory: 'all',

      songs: [
        {
          artist: 'Трития',
          title: '31 весна',
          category: 'Русский рок / поп-рок',
          categoryShort: 'RU rock',
        },
        {
          artist: 'Иван Дмитриенко',
          title: 'Шёлк',
          category: 'Pop / Dance / Party',
          categoryShort: 'pop',
        },
        {
          artist: 'Макс Корж',
          title: 'Жить в кайф',
          category: 'Pop / Dance / Party',
          categoryShort: 'party',
        },
        {
          artist: 'The Offspring',
          title: "The Kids Aren't Alright",
          category: 'International rock',
          categoryShort: 'rock',
        },
        {
          artist: 'Linkin Park',
          title: 'In the End',
          category: 'International rock',
          categoryShort: 'rock',
        },
        {
          artist: 'Гранж',
          title: 'Вечно молодой',
          category: 'Русский рок / поп-рок',
          categoryShort: 'RU rock',
        },
        {
          artist: 'Валерий Меладзе',
          title: 'Салют, Вера',
          category: 'Pop / Dance / Party',
          categoryShort: 'pop',
        },
        {
          artist: 'Bon Jovi',
          title: "It's My Life",
          category: 'International rock',
          categoryShort: 'rock',
        },
        {
          artist: 'Руки Вверх',
          title: '18 мне уже',
          category: 'Pop / Dance / Party',
          categoryShort: 'party',
        },
        {
          artist: 'Би-2',
          title: 'Полковник',
          category: 'Русский рок / поп-рок',
          categoryShort: 'RU rock',
        },
        {
          artist: 'Animal ДжаZ',
          title: 'Три полоски',
          category: 'Русский рок / поп-рок',
          categoryShort: 'RU rock',
        },
        {
          artist: 'Земляне',
          title: 'Трава у дома',
          category: 'Лирика / special',
          categoryShort: 'classic',
        },
        {
          artist: 'Green Day',
          title: 'Boulevard of Broken Dreams',
          category: 'International rock',
          categoryShort: 'rock',
        },
        {
          artist: 'Linkin Park',
          title: 'Numb',
          category: 'International rock',
          categoryShort: 'rock',
        },
        {
          artist: 'Кино',
          title: 'Группа крови',
          category: 'Русский рок / поп-рок',
          categoryShort: 'RU rock',
        },
        {
          artist: 'Порнофильмы',
          title: 'Я так соскучился',
          category: 'Русский рок / поп-рок',
          categoryShort: 'RU rock',
        },
        {
          artist: 'Sting',
          title: 'Every Breath You Take',
          category: 'Лирика / special',
          categoryShort: 'classic',
        },
        {
          artist: 'Linkin Park',
          title: 'Faint',
          category: 'International rock',
          categoryShort: 'rock',
        },
        {
          artist: 'Пошлая Молли',
          title: 'Нон-стоп',
          category: 'Pop / Dance / Party',
          categoryShort: 'party',
        },
        {
          artist: 'Дискотека Авария',
          title: 'Новогодняя',
          category: 'Pop / Dance / Party',
          categoryShort: 'party',
        },
        {
          artist: 'Муслим Магомаев',
          title: 'Синяя вечность',
          category: 'Лирика / special',
          categoryShort: 'classic',
        },
        {
          artist: 'Жуки',
          title: 'Батарейка',
          category: 'Pop / Dance / Party',
          categoryShort: 'party',
        },
        {
          artist: 'The Offspring',
          title: 'Pretty Fly',
          category: 'International rock',
          categoryShort: 'rock',
        },
        {
          artist: 'Мумий Тролль',
          title: 'Медведица',
          category: 'Русский рок / поп-рок',
          categoryShort: 'RU rock',
        },
        {
          artist: 'Золото',
          title: 'Осенний пожар',
          category: 'Лирика / special',
          categoryShort: 'special',
        },
        {
          artist: 'Анна Асти',
          title: 'Царица',
          category: 'Pop / Dance / Party',
          categoryShort: 'pop',
        },
        {
          artist: 'Женя Трофимов',
          title: 'Самолёты',
          category: 'Pop / Dance / Party',
          categoryShort: 'pop',
        },
        {
          artist: 'Måneskin',
          title: 'Beggin’',
          category: 'International rock',
          categoryShort: 'rock',
        },
        {
          artist: 'Green Day',
          title: 'Wake Me Up When September Ends',
          category: 'International rock',
          categoryShort: 'rock',
        },
        {
          artist: 'Токарев',
          title: 'Седьмой лепесток',
          category: 'Лирика / special',
          categoryShort: 'special',
        },
        {
          artist: 'Noize MC',
          title: 'Выдыхай',
          category: 'Русский рок / поп-рок',
          categoryShort: 'RU rock',
        },
        {
          artist: 'Надежда Кадышева',
          title: 'Широка река',
          category: 'Лирика / special',
          categoryShort: 'classic',
        },
        {
          artist: 'Король и Шут',
          title: 'Кукла колдуна',
          category: 'Русский рок / поп-рок',
          categoryShort: 'RU rock',
        },
        {
          artist: 'Звери',
          title: 'Районы-кварталы',
          category: 'Русский рок / поп-рок',
          categoryShort: 'RU rock',
        },
        {
          artist: 'Женя Трофимов',
          title: 'Поезда',
          category: 'Pop / Dance / Party',
          categoryShort: 'pop',
        },
        {
          artist: 'Валерий Меладзе',
          title: 'Текила-любовь',
          category: 'Pop / Dance / Party',
          categoryShort: 'pop',
        },
        {
          artist: 'Green Day',
          title: 'Holiday',
          category: 'International rock',
          categoryShort: 'rock',
        },
        {
          artist: 'ABBA',
          title: 'Gimme! Gimme! Gimme!',
          category: 'Pop / Dance / Party',
          categoryShort: 'party',
        },
        {
          artist: 'Nirvana',
          title: 'Smells Like Teen Spirit',
          category: 'International rock',
          categoryShort: 'rock',
        },
        {
          artist: 'Король и Шут',
          title: 'Лесник',
          category: 'Русский рок / поп-рок',
          categoryShort: 'RU rock',
        },
        {
          artist: 'Валентин Стрыкало',
          title: 'Наше лето',
          category: 'Русский рок / поп-рок',
          categoryShort: 'RU rock',
        },
        {
          artist: 'Любэ',
          title: 'Конь',
          category: 'Лирика / special',
          categoryShort: 'classic',
        },
        {
          artist: 'Браво',
          title: 'Этот город',
          category: 'Русский рок / поп-рок',
          categoryShort: 'RU rock',
        },
        {
          artist: 'Бродский / Eminem',
          title: 'Lose Yourself',
          category: 'Лирика / special',
          categoryShort: 'special',
        },
      ],
    }
  },

  computed: {
    categories() {
      return [...new Set(this.songs.map((song) => song.category))]
    },

    filteredSongs() {
      if (this.activeCategory === 'all') {
        return this.songs
      }

      return this.songs.filter((song) => song.category === this.activeCategory)
    },
  },
}
</script>