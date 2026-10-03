<template>
    <section class="relative overflow-hidden bg-black px-6 py-24 text-white">
        <!-- Background glow -->
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(80,120,255,0.16),transparent_52%)]">
        </div>

        <div class="relative z-10 mx-auto max-w-6xl">
            <div class="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
                <!-- Text -->
                <div>
                    <p class="text-sm uppercase tracking-[0.35em] text-blue-300">
                        Merch
                    </p>

                    <h2 class="mt-4 text-4xl font-black leading-tight md:text-6xl">
                        Мерч для тех,
                        <span class="block text-blue-300">кто верит в науку и рок</span>
                    </h2>

                    <p class="mt-6 max-w-xl text-base leading-8 text-zinc-300 md:text-lg">
                        Футболки, худи и другие вещи The Science — для выступлений,
                        репетиций и людей, которые знают: хороший эксперимент начинается
                        с хорошего звука.
                    </p>

                    <div class="mt-8 flex flex-col gap-4 sm:flex-row">
                        <router-link to="/contact"
                            class="rounded-full bg-white px-7 py-3 text-center text-sm font-semibold text-black transition hover:bg-zinc-200">
                            Узнать о мерче
                        </router-link>

                        <router-link to="/setlist"
                            class="rounded-full border border-white/25 px-7 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10">
                            Посмотреть сетлист
                        </router-link>
                    </div>
                </div>

                <!-- Merch carousel card -->
                <div class="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
                    <!-- Product visual -->
                    <div class="relative flex min-h-[420px] items-center justify-center overflow-hidden">
                        <!-- subtle glow behind product -->
                        <div class="absolute h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>

                        <!-- Previous -->
                        <button type="button"
                            class="absolute left-0 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur transition hover:bg-white/15"
                            aria-label="Previous merch item" @click="previousItem">
                            <svg class="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m15 19-7-7 7-7" />
                            </svg>
                        </button>

                        <!-- Image -->
                        <transition name="fade" mode="out-in">
                            <img :key="currentItem.image" :src="currentItem.image" :alt="currentItem.alt"
                                class="relative z-10 max-h-[420px] w-auto object-contain drop-shadow-2xl transition duration-300 hover:scale-[1.02]" />
                        </transition>

                        <!-- Next -->
                        <button type="button"
                            class="absolute right-0 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur transition hover:bg-white/15"
                            aria-label="Next merch item" @click="nextItem">
                            <svg class="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m9 5 7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    <!-- Product info -->
                    <div class="mt-6">
                        <transition name="fade" mode="out-in">
                            <div class="mt-6 min-h-[96px]">
                                <p class="text-2xl font-black text-white">
                                    {{ currentItem.name }}
                                </p>

                                <p class="mt-2 text-sm leading-6 text-zinc-400">
                                    {{ currentItem.description }}
                                </p>
                            </div>
                        </transition>
                    </div>

                    <!-- Dots -->
                    <div class="mt-6 flex items-center gap-3">
                        <button v-for="(item, index) in merchItems" :key="item.name" type="button"
                            class="h-2.5 rounded-full transition-all"
                            :class="index === currentIndex ? 'w-8 bg-blue-300' : 'w-2.5 bg-white/30 hover:bg-white/60'"
                            :aria-label="`Show ${item.name}`" :aria-current="index === currentIndex"
                            @click="goToItem(index)"></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import tshirtImage from '../assets/merch/tshirt.png'
import hoodieImage from '../assets/merch/hoodie.png'
import sweatshirtImage from '../assets/merch/sweatshirt.png'

export default {
    name: 'MerchSection',

    data() {
        return {
            currentIndex: 0,
            intervalId: null,

            merchItems: [
                {
                    name: 'The Science T-shirt',
                    image: tshirtImage,
                    alt: 'Black The Science T-shirt',
                    description:
                        'Чёрная футболка с логотипом группы. Просто, громко, научно.',
                },
                {
                    name: 'The Science Hoodie',
                    image: hoodieImage,
                    alt: 'Black The Science hoodie',
                    description:
                        'Чёрное худи The Science для репетиций, концертов и прохладных вечеров после лаборатории.',
                },
                {
                    name: 'The Science Sweatshirt',
                    image: sweatshirtImage,
                    alt: 'Black The Science sweatshirt',
                    description:
                        'Чёрный свитшот с логотипом The Science — спокойный, тёплый и достаточно научный для лаборатории, репетиции и сцены.',
                }
            ],
        }
    },

    computed: {
        currentItem() {
            return this.merchItems[this.currentIndex]
        },
    },

    mounted() {
        this.startAutoRotation()
    },

    beforeUnmount() {
        this.stopAutoRotation()
    },

    methods: {
        nextItem() {
            this.currentIndex = (this.currentIndex + 1) % this.merchItems.length
            this.restartAutoRotation()
        },

        previousItem() {
            this.currentIndex =
                this.currentIndex === 0
                    ? this.merchItems.length - 1
                    : this.currentIndex - 1

            this.restartAutoRotation()
        },

        goToItem(index) {
            this.currentIndex = index
            this.restartAutoRotation()
        },

        startAutoRotation() {
            this.intervalId = setInterval(() => {
                this.currentIndex = (this.currentIndex + 1) % this.merchItems.length
            }, 5000)
        },

        stopAutoRotation() {
            if (this.intervalId) {
                clearInterval(this.intervalId)
                this.intervalId = null
            }
        },

        restartAutoRotation() {
            this.stopAutoRotation()
            this.startAutoRotation()
        },
    },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.35s ease, transform 0.35s ease;
}

.fade-enter-from {
    opacity: 0;
    transform: translateX(18px) scale(0.98);
}

.fade-leave-to {
    opacity: 0;
    transform: translateX(-18px) scale(0.98);
}
</style>