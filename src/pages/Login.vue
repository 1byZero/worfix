<template>
  <Header />
  
  <div class="flex flex-col min-h-screen">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="flex flex-col space-y-2 w-full" @submit.prevent="submit">
        <Input
          required
          name="email"
          type="text"
          placeholder="amit@worf.in"
          label="User ID"
        />
        <Input
          required
          name="password"
          type="password"
          placeholder="••••••"
          label="Password"
        />
        <Button :loading="session.login.loading" appearance="primary"
          >Login</Button
        >
      </form>
      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        {{ ' ' }}
        <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
      </p>
    </div>
    </div>
    <Footer />
</template>

<script lang="ts" setup>
import { session } from '../data/session'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue';

function submit(e) {
  let formData = new FormData(e.target)
  session.login.submit({
    email: formData.get('email'),
    password: formData.get('password'),
  })
}
</script>
