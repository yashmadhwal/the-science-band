<template>
    <section ref="sectionRef" class="relative bg-black px-6 py-24">
        <div class="mx-auto max-w-6xl">
            <!-- Long scroll area gives time before and after transition -->
            <div ref="scrollAreaRef" class="relative h-[360vh]">
                <div class="sticky top-0 flex h-screen items-center">
                    <div
                        class="relative mx-auto aspect-[16/9] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
                        <transition name="fade-image" mode="out-in">
                            <img :key="currentImage" :src="currentImage" :alt="currentAlt"
                                class="h-full w-full object-cover" />
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import labImage from '../assets/transition/lab-team.png'
import rockImage from '../assets/transition/rock-team.png'

export default {
    name: 'LabToRockScroll',

    data() {
        return {
            labImage,
            rockImage,
            progress: 0,
            switchPoint: 0.5,
        }
    },

    computed: {
        currentImage() {
            return this.progress < this.switchPoint ? this.labImage : this.rockImage
        },

        currentAlt() {
            return this.progress < this.switchPoint
                ? 'The Science lab mode'
                : 'The Science rock mode'
        },
    },

    mounted() {
        window.addEventListener('scroll', this.handleScroll, { passive: true })
        window.addEventListener('resize', this.handleScroll)
        this.handleScroll()
    },

    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
        window.removeEventListener('resize', this.handleScroll)
    },

    methods: {
        handleScroll() {
            const scrollArea = this.$refs.scrollAreaRef
            if (!scrollArea) return

            const rect = scrollArea.getBoundingClientRect()
            const windowHeight = window.innerHeight

            const totalScrollable = rect.height - windowHeight

            if (totalScrollable <= 0) {
                this.progress = 0
                return
            }

            const passed = Math.min(
                Math.max(-rect.top, 0),
                totalScrollable
            )

            this.progress = passed / totalScrollable
        },
    },
}
</script>

<style scoped>
.fade-image-enter-active,
.fade-image-leave-active {
    transition: opacity 1s ease, transform 1s ease;
}

.fade-image-enter-from,
.fade-image-leave-to {
    opacity: 0;
    transform: scale(1.015);
}

.fade-image-enter-to,
.fade-image-leave-from {
    opacity: 1;
    transform: scale(1);
}
</style>