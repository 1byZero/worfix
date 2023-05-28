<template>
  <Header />
  <div class="flex flex-col min-h-screen">
    <HeroSignup />
    <BlogPosts />
    <HomeSection />
    <BgCard />

  </div>
  <Footer />
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue';
import HeroSignup from '../components/HeroSignup.vue';
import BgCard from '../components/BgCard.vue';
import HomeSection from '../components/HomeSection.vue';
import BlogPosts from '../components/BlogPosts.vue';


</script>