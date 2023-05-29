<template>
    <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
                    <img src="../assets/images/logo.png" class="h-8 mr-3" alt="Flowbite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">UI/UX App</span>
                </a>
                <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Terms of Use</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">Privacy Policy</a>
                    </li>
                    <li>
                        <Button @click="slotsDialog = true">Contact</Button>
                        <Dialog :options="{
                            actions: [
                                { label: 'Send', appearance: 'primary' },
                                { label: 'Cancel' },
                            ],
                        }" v-model="slotsDialog">
                            <template #body-title>
                                <h2 class="text-3xl font-bold">Contact Form</h2>
                            </template>
                            <template #body-content>
                                <p class="mt-4 text-lg">
                                    <Input label="Full Name" placeholder="Jane Doe" v-model="fullName" />
                                    <Input class="mb-2" label="Email" type="email" placeholder="jane@example.com" />
                                    <Input label="message" type="textarea" />
                                    <div class="flex items-center mt-4">
                                        <Input label="I have read terms and conditions" type="checkbox" />
                                    </div>
                                </p>
                            </template>
                        </Dialog>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://worf.in"
                    class="hover:underline">Worfux™</a>. All Rights Reserved.</span>

        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog } from 'frappe-ui'

// const showDialog = ref(false)
const slotsDialog = ref(false)
let fullName = ref('')
</script>