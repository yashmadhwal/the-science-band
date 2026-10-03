<template>
    <section class="bg-black px-6 py-24 text-white">
        <div class="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-12">
            <p class="text-sm uppercase tracking-[0.35em] text-blue-300">
                Music
            </p>

            <h2 class="mt-4 text-4xl font-black md:text-6xl">
                Записи скоро появятся
            </h2>

            <p class="mt-5 max-w-2xl text-zinc-300 md:text-lg">
                Сейчас The Science — это прежде всего живой звук. Записи, лайвы и релизы
                появятся здесь после ближайших выступлений.
            </p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ListenSection',

    data() {
        return {
            platforms: [
                {
                    name: 'Yandex Music',
                    text: 'слушать на Яндекс Музыке',
                    url: 'https://music.yandex.ru/',
                },
                {
                    name: 'Spotify',
                    text: 'listen on Spotify',
                    url: 'https://spotify.com/',
                },
                {
                    name: 'VK Music',
                    text: 'слушать во VK',
                    url: 'https://vk.com/',
                },
                {
                    name: 'YouTube',
                    text: 'live videos and recordings',
                    url: 'https://youtube.com/',
                },
            ],
        }
    },
}
</script>