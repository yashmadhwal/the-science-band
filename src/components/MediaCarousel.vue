<template>
    <div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="relative w-full">
            <!-- Carousel wrapper -->
            <div
                class="relative h-[260px] overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 md:h-[460px] lg:h-[520px]">
                <div v-for="(slide, index) in slides" :key="slide.src"
                    class="absolute inset-0 transition-opacity duration-700 ease-in-out"
                    :class="index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'">
                    <img :src="slide.src" :alt="slide.alt" class="h-full w-full object-cover object-center" />

                    <!-- Dark overlay for readability -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                    <!-- Caption -->
                    <div class="absolute bottom-8 left-6 right-6 md:left-10 md:right-10">
                        <p class="text-xs uppercase tracking-[0.35em] text-zinc-300">
                            {{ slide.label }}
                        </p>

                        <h3 class="mt-2 text-2xl font-bold text-white md:text-4xl">
                            {{ slide.title }}
                        </h3>
                    </div>
                </div>
            </div>

            <!-- Indicators -->
            <div class="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 gap-3">
                <button v-for="(_, index) in slides" :key="index" type="button"
                    class="h-2.5 rounded-full transition-all"
                    :class="index === currentSlide ? 'w-8 bg-white' : 'w-2.5 bg-white/40 hover:bg-white/70'"
                    :aria-current="index === currentSlide" :aria-label="`Slide ${index + 1}`"
                    @click="goToSlide(index)"></button>
            </div>

            <!-- Previous button -->
            <button type="button"
                class="absolute left-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur transition hover:bg-white/20"
                @click="previousSlide">
                <svg class="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m15 19-7-7 7-7" />
                </svg>

                <span class="sr-only">Previous</span>
            </button>

            <!-- Next button -->
            <button type="button"
                class="absolute right-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur transition hover:bg-white/20"
                @click="nextSlide">
                <svg class="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m9 5 7 7-7 7" />
                </svg>

                <span class="sr-only">Next</span>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

import live1 from '../assets/carousel_media/live_1.jpg'
import live2 from '../assets/carousel_media/live_2.jpg'
import live3 from '../assets/carousel_media/live_3.jpg'
import live4 from '../assets/carousel_media/live_4.jpg'

const currentSlide = ref(0)

const slides = [
    {
        src: live1,
        alt: 'The Science live performance',
        label: 'Live',
        title: 'Stage energy',
    },
    {
        src: live2,
        alt: 'The Science band rehearsal',
        label: 'Rehearsal',
        title: 'Full-band sound',
    },
    {
        src: live3,
        alt: 'The Science live concert',
        label: 'Concert',
        title: 'Graduation spirit',
    },
    {
        src: live4,
        alt: 'The Science band on stage',
        label: 'Stage',
        title: 'Science meets rock',
    },
]

function nextSlide() {
    currentSlide.value = (currentSlide.value + 1) % slides.length
}

function previousSlide() {
    currentSlide.value =
        currentSlide.value === 0 ? slides.length - 1 : currentSlide.value - 1
}

function goToSlide(index) {
    currentSlide.value = index
}

let intervalId = null

onMounted(() => {
    intervalId = setInterval(nextSlide, 5000)
})

onBeforeUnmount(() => {
    if (intervalId) {
        clearInterval(intervalId)
    }
})
</script>