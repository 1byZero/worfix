<template>

    <Header />
    <div class="flex flex-col min-h-screen">
    <PricingPlans />


  </div>
  <Footer />


</template>

<script lang="ts" setup >

import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import PricingPlans from '../components/PricingPlans.vue'
import PricingCard from '../components/PricingCard.vue';

</script>