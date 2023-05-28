<template>
  <div class="max-w-3xl py-12 mx-auto">
    <h2 class="font-bold text-lg text-gray-600 mb-4">
      Welcome To Dashboard Page {{ session.user }}!
    </h2>

    <Button icon-left="code" @click="ping.fetch" :loading="ping.loading">
      Click to send 'ping' request
    </Button>
    <div>
      {{ ping.data }}
    </div>
    <pre>{{ ping }}</pre>

    <div class="flex flex-row space-x-2 mt-4">
      <Button @click="showDialog = true">Open Dialog</Button>
      <Button @click="session.logout.submit()">Logout</Button>
    </div>

    <div class="flex flex-row space-x-2 mt-4">
     <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <router-link to="/">Home</router-link>
      </button>
      </div>

    <!-- Dialog -->
    <Dialog title="Title" v-model="showDialog"> Dialog content </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog } from 'frappe-ui'
import { createResource } from 'frappe-ui'
import { session } from '../data/session'

const ping = createResource({
  url: 'ping',
  auto: true,
})

const showDialog = ref(false)
</script>
