<template>
  <Header/>
  <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto grid max-w-7xl gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <div class="max-w-2xl">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Top Influencers</h2>
                <p class="mt-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                    necessitatibus incidunt ut officiis explicabo inventore.</p>


            </div>
            <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                <li v-for="person in people" :key="person.name">
                    <div class="flex items-center gap-x-6">
                        <img class="h-16 w-16 rounded-full" :src="person.imageUrl" alt="">
                        <div>
                            <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">{{ person.name }}
                            </h3>
                            <p class="text-sm font-semibold leading-6 text-indigo-600">{{ person.role }}</p>
                            

                        </div>

                    </div>

                </li>
            </ul>
        </div>
    </div>
    <Footer />
</template>

<script>
import Header from "../components/Header.vue";  
import LineChartComponent from "../components/LineChart.vue";
import BarChartComponent from "../components/BarChart.vue";
import { FeatherIcon } from 'frappe-ui'
import Footer from "../components/Footer.vue";

export default {
  name: "dashboard-page",
  components: {
    Header,
    LineChartComponent,
    BarChartComponent,
    FeatherIcon,
    Footer
},


  data() {
    return {
      people: [
                {
                    name: "Linus Torvalds",
                    role: "CEO",
                    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                },

                {
                    name: "Amit Kumar",
                    role: "CEO",
                    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                },

                {
                    name: "Sachin Tendulkar",
                    role: "CEO",
                    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                },

                {
                    name: "Elon Musk",
                    role: "CEO",
                    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                },

                {
                    name: "Mark Zuckerberg",
                    role: "CEO",
                    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                },

                {
                    name: "Jackie Chan",
                    role: "CEO",
                    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                },

                {
                    name: "Jackie Chan",
                    role: "CEO",
                    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                },

                {
                    name: "Jackie Chan",
                    role: "CEO",
                    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                },

                {
                    name: "Jackie Chan",
                    role: "CEO",
                    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                },

                {
                    name: "Jackie Chan",
                    role: "CEO",
                    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                }

            ]
      
    }
  }
};
</script>
