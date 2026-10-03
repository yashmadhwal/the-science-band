<template>
    <main class="min-h-screen bg-black text-white">
        <HeroSection />
        <LabRockTransition />
        <AboutUs/>
        <MediaCarousel/>
        <Merch />
        <Listen />
        <!-- <ListenCurrent/> -->
         <SocialFooter />
         
        
    </main>
</template>

<script>
import HeroSection from './HeroSection.vue'
import LabRockTransition from './LabRockTransition.vue'
import AboutUs from './AboutUs.vue'
import MediaCarousel from './MediaCarousel.vue'
import Listen from './Listen.vue'
import ListenCurrent from './ListenCurrent.vue'
import Merch from './Merch.vue'
import SocialFooter from './SocialFooter.vue'


export default {
    name: "Home",
    components: {
        HeroSection,
        LabRockTransition,
        AboutUs,
        MediaCarousel,
        Listen,
        ListenCurrent,
        Merch,
        SocialFooter,
    }
};
</script>