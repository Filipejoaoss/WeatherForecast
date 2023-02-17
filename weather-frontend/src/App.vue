<template>
  <div v-if="this.$route.path === '/' || this.$route.path === '/Weather'">
    <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div class="flex h-16 justify-between">
          <div class="flex px-2 lg:px-0">
            <div class="flex flex-shrink-0 items-center">
              <img src="public/weather.png" class="w-14 h-14 mt-2" alt="Logo">
              <router-link to="/" class="font-bold text-sky-900">Weather Forecast</router-link>
            </div>

            <div class="hidden lg:ml-6 lg:flex lg:space-x-8">
              <router-link to="/Weather" class="inline-flex items-center border-b-2 border-sky-900 px-1 pt-1 text-sm font-medium text-sky-900">Weather</router-link>
            </div>
          </div>

          <div class="flex flex-1 items-center justify-center">
            <div class="w-full max-w-lg lg:max-w-xs">
              <label for="search" class="sr-only">Search</label>
              <div class="relative">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon class="h-5 w-5 text-sky-900" aria-hidden="true" />
                </div>
                <input id="search" name="search" class="block w-full rounded-md border border-sky-900 bg-white py-2 pl-10 pr-3 leading-5 placeholder-sky-900 focus:border-sky-900 focus:placeholder-sky-900 focus:outline-none focus:ring-1 focus:ring-sky-900 sm:text-sm" placeholder="Search" type="search" />
              </div>
            </div>
          </div>

          <div class="hidden lg:ml-4 lg:flex lg:items-center justify-end">
            <router-link to="/Register">
              <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-sky-900 px-4 py-2  text-sm font-medium text-white shadow-sm hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-900 focus:ring-offset-2 mr-2">Register</button>
            </router-link>
            <router-link to="/Login">
              <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-sky-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-900 focus:ring-offset-2 mr-2">Log In</button>
            </router-link>
          </div>
        </div>
      </div>
    </Disclosure>
  </div>

  <router-view></router-view>

  <footer class="bg-white">
    <div class="mx-auto max-w-7xl p-4">
      <div class="mt-8 md:order-1 md:mt-0">
        <p class="text-center text-xs leading-5 text-gray-500">&copy; 2023 Filipe Sousa.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'

  import { RouterLink } from 'vue-router'
</script>