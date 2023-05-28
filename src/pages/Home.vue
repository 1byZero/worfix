<template>
  <div class="max-w-3xl py-12 mx-auto">
    <h2 class="font-bold text-lg text-gray-600 mb-4">
      Welcome To Home Page Guest 
    </h2>

    <div class="flex flex-row space-x-2 mt-4">
     <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <router-link to="/log-in">Login</router-link>
      </button>
      </div>

      <div class="flex flex-row space-x-2 mt-4">
     <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <router-link to="/dashboard">Dashboard</router-link>
      </button>
      </div>
  </div>
</template>

<script setup>


</script>
