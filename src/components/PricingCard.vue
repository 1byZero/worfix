<template>
    <!-- Container for demo purpose -->
<div class="container my-24 px-6 mx-auto">

<!-- Section: Design Block -->
<section class="mb-32 text-gray-800">
  <h2 class="text-3xl font-bold text-center mb-12">Pricing</h2>

  <!-- Pills navs -->
  <ul class="nav nav-pills flex flex-col md:flex-row list-none pl-0 mb-12" id="ex1" role="tablist">
    <li class="av-item flex-auto text-center md:mr-2" role="presentation">
      <a class="nav-link block w-full font-medium text-xs leading-tight uppercase rounded px-6 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0"
        id="ex2-tab-1" data-bs-toggle="pill" href="#ex2-pills-1" role="tab" aria-controls="ex2-pills-1"
        aria-selected="true">Individuals</a>
    </li>
    <li class="av-item flex-auto text-center" role="presentation">
      <a class="nav-link block w-full font-medium text-xs leading-tight uppercase rounded px-6 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 active"
        id="ex2-tab-2" data-bs-toggle="pill" href="#ex2-pills-2" role="tab" aria-controls="ex2-pills-2"
        aria-selected="false">Teams</a>
    </li>
  </ul>
  <!-- Pills navs -->

  <!-- Pills content -->
  <div class="tab-content" id="ex2-content">
    <div class="tab-pane fade" id="ex2-pills-1" role="tabpanel" aria-labelledby="ex2-tab-1">
      <div class="grid md:grid-cols-3 gap-6 lg:gap-x-12">
        <div class="mb-6 lg:mb-0">
          <div class="block rounded-lg shadow-lg bg-white h-full">
            <div class="p-6 border-b border-gray-300 text-center">
              <p class="uppercase mb-4 text-sm">
                <strong>Basic</strong>
              </p>
              <h3 class="text-2xl mb-6">
                <strong>$ 129</strong>
                <small class="text-gray-500 text-sm">/year</small>
              </h3>

              <button type="button"
                class="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out w-full"
                style="background-color: hsl(0, 0%, 95%)" data-mdb-ripple="true" data-ripple-color="primary">
                Buy
              </button>
            </div>
            <div class="p-6">
              <ol class="list-inside">
                <li class="mb-4 flex items-center">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                    class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                    </path>
                  </svg>Unlimited updates
                </li>
                <li class="mb-4 flex items-center">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                    class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                    </path>
                  </svg>Git repository
                </li>
                <li class="mb-4 flex items-center">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                    class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                    </path>
                  </svg>npm installation
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div class="mb-6 lg:mb-0">
          <div class="block rounded-lg shadow-lg bg-white h-full">
            <div class="p-6 border-b border-gray-300 text-center">
              <p class="uppercase mb-4 text-sm">
                <strong>Advanced</strong>
              </p>
              <h3 class="text-2xl mb-6">
                <strong>$ 299</strong>
                <small class="text-gray-500 text-sm">/year</small>
              </h3>

              <button type="button"
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full">
                Buy
              </button>
            </div>
            <div class="p-6">
              <ol class="list-inside">
                <li class="mb-4 flex items-center">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                    class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                    </path>
                  </svg>Unlimited updates
                </li>
                <li class="mb-4 flex items-center">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                    class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                    </path>
                  </svg>Git repository
                </li>
                <li class="mb-4 flex items-center">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                    class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                    </path>
                  </svg>npm installation
                </li>
                <li class="mb-4 flex items-center">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                    class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                    </path>
                  </svg>Code examples
                </li>
                <li class="mb-4 flex items-center">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                    class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                    </path>
                  </svg>Premium snippets
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div class="mb-6 lg:mb-0">
          <div class="block rounded-lg shadow-lg bg-white h-full">
            <div class="p-6 border-b border-gray-300 text-center">
              <p class="uppercase mb-4 text-sm">
                <strong>Enterprise</strong>
              </p>
              <h3 class="text-2xl mb-6">
                <strong>$ 499</strong>
                <small class="text-gray-500 text-sm">/year</small>
              </h3>

              <button type="button"
                class="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out w-full"
                style="background-color: hsl(0, 0%, 95%)" data-mdb-ripple="true" data-ripple-color="primary">
                Buy
              </button>
            </div>
            <div class="p-6">
              <ol class="list-inside">
                <li class="mb-4 flex items-center">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                    class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                    </path>
                  </svg>Unlimited updates
                </li>
                <li class="mb-4 flex items-center">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                    class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                    </path>
                  </svg>Git repository
                </li>
                <li class="mb-4 flex items-center">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                    class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                    </path>
                  </svg>npm installation
                </li>
                <li class="mb-4 flex items-center">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                    class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                    </path>
                  </svg>Code examples
                </li>
                <li class="mb-4 flex items-center">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                    class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                    </path>
                  </svg>Premium snippets
                </li>
                <li class="mb-4 flex items-center">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                    class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                    </path>
                  </svg>Premium support
                </li>
                <li class="mb-4 flex items-center">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                    class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                    </path>
                  </svg>Drag&amp;Drop builder
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-pane fade show active" id="ex2-pills-2" role="tabpanel" aria-labelledby="ex2-tab-2">
      <div class="grid md:grid-cols-3 gap-6 lg:gap-x-12">
        <div class="mb-6 lg:mb-0">
          <div class="block rounded-lg shadow-lg bg-white h-full">
            <div class="p-6 text-center py-4">
              <p class="uppercase mb-4 text-sm">
                <strong>3 users</strong>
              </p>
              <h3 class="text-2xl mb-6">
                <strong>$ 799</strong>
                <small class="text-gray-500 text-sm">/year</small>
              </h3>

              <button type="button"
                class="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out w-full"
                style="background-color: hsl(0, 0%, 95%)" data-mdb-ripple="true" data-ripple-color="primary">
                Buy
              </button>
            </div>
          </div>
        </div>

        <div class="mb-6 lg:mb-0">
          <div class="block rounded-lg shadow-lg bg-white h-full">
            <div class="p-6 text-center py-4">
              <p class="uppercase mb-4 text-sm">
                <strong>4 users</strong>
              </p>
              <h3 class="text-2xl mb-6">
                <strong>$ 999</strong>
                <small class="text-gray-500 text-sm">/year</small>
              </h3>

              <button type="button"
                class="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out w-full"
                style="background-color: hsl(0, 0%, 95%)" data-mdb-ripple="true" data-ripple-color="primary">
                Buy
              </button>
            </div>
          </div>
        </div>

        <div class="mb-6 lg:mb-0">
          <div class="block rounded-lg shadow-lg bg-white h-full">
            <div class="p-6 text-center py-4">
              <p class="uppercase mb-4 text-sm">
                <strong>More users</strong>
              </p>
              <h3 class="text-2xl mb-6">
                <strong>Custom offer</strong>
              </h3>

              <button type="button"
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true" data-ripple-color="primary">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Pills content -->
</section>
<!-- Section: Design Block -->

</div>
<!-- Container for demo purpose -->
</template>

<script lang="ts" setup>

</script>
```