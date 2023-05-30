<template>

    <Header />
    <div class="flex flex-col min-h-screen">
      <MeetTeamOne />
      <MeetTeamSection />
  </div>
  <Footer />


</template>

<script lang="ts" setup >

import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue';
import MeetTeamOne from '../components/MeetTeamOne.vue';
import MeetTeamSection from '../components/MeetTeamSection.vue';



</script>