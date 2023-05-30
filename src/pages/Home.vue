<template>
  <Header />
  <!-- <FloatingBanner />   -->
  <div class="flex flex-col min-h-screen">
    <HeroSignup />
    <HomeSection />
    <BgCard />
    <BrandGrid />

  </div>
  <Footer />
</template>

<script lang="ts" setup >
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue';
import HeroSignup from '../components/HeroSignup.vue';
import BgCard from '../components/BgCard.vue';
import HomeSection from '../components/HomeSection.vue';
import BrandGrid from '../components/BrandGrid.vue';
import FloatingBanner from '../components/FloatingBanner.vue';
</script>