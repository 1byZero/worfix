<template>
  <div>
    <sidebar-component></sidebar-component>
    <div class="relative md:ml-64 bg-blueGray-100">
      <navbar-component></navbar-component>
      <!-- Header -->
      <div class="relative bg-zinc-800 md:pt-32 pb-32 pt-12">
        <div class="px-4 md:px-10 mx-auto w-full">
          <div>
            <!-- Card stats -->
            <div class="flex flex-wrap">
              <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                          Traffic
                        </h5>
                        <span class="font-semibold text-xl text-blueGray-700">
                          350,897
                        </span>
                      </div>
                      <div class="relative w-auto pl-4 flex-initial">
                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-gray-100">
                          <FeatherIcon name="coffee" :stroke-width="1" class="h-6 w-6 text-green-600" />
                        </div>
                      </div>
                    </div>
                      <p class="text-sm text-blueGray-400 mt-4">
                      <span class="text-emerald-500 mr-2">
                        <i class="fas fa-arrow-up"></i> 3.48%
                      </span>
                      <span class="whitespace-nowrap">
                        Since last month
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                          New users
                        </h5>
                        <span class="font-semibold text-xl text-blueGray-700">
                          2,356
                        </span>
                      </div>
                      <div class="relative w-auto pl-4 flex-initial">
                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-gray-100">
                          <FeatherIcon name="anchor" stroke-width="3" class="h-6 w-6 text-blue-500" />
                        </div>
                      </div>
                    </div>
                    <p class="text-sm text-blueGray-400 mt-4">
                      <span class="text-red-500 mr-2">
                        <i class="fas fa-arrow-down"></i> 3.48%
                      </span>
                      <span class="whitespace-nowrap">
                        Since last week
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                          Sales
                        </h5>
                        <span class="font-semibold text-xl text-blueGray-700">
                          924
                        </span>
                      </div>
                      <div class="relative w-auto pl-4 flex-initial">
                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-gray-100">
                          <FeatherIcon name="chevron-right" class="h-6 w-6 text-red-600" />
                        </div>
                      </div>
                    </div>
                    <p class="text-sm text-blueGray-400 mt-4">
                      <span class="text-orange-500 mr-2">
                        <i class="fas fa-arrow-down"></i> 1.10%
                      </span>
                      <span class="whitespace-nowrap">
                        Since yesterday
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                          Performance
                        </h5>
                        <span class="font-semibold text-xl text-blueGray-700">
                          49,65%
                        </span>
                      </div>
                      <div class="relative w-auto pl-4 flex-initial">
                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-lightBlue-500">
                          <FeatherIcon name="coffee" :stroke-width="1" class="h-6 w-6 text-green-600" />
                        </div>
                      </div>
                    </div>
                    <p class="text-sm text-blueGray-400 mt-4">
                      <span class="text-emerald-500 mr-2">
                        <i class="fas fa-arrow-up"></i> 12%
                      </span>
                      <span class="whitespace-nowrap">
                        Since last month
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <FooterDashboard/>

      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";  
import NavbarComponent from "../components/Navbar.vue";
import SidebarComponent from "../components/Sidebar.vue";
import LineChartComponent from "../components/LineChart.vue";
import BarChartComponent from "../components/BarChart.vue";
import FooterDashboard from "../components/FooterDashboard.vue";
import { FeatherIcon } from 'frappe-ui'

export default {
  name: "dashboard-page",
  components: {
    Header,
    NavbarComponent,
    SidebarComponent,
    LineChartComponent,
    BarChartComponent,
    FooterDashboard,
    FeatherIcon
},
  data() {
    return {
      date: new Date().getFullYear()
    }
  }
};
</script>
