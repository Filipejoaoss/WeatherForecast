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

            <div v-show="isLoggedIn" class="hidden lg:ml-6 lg:flex lg:space-x-8">
              <router-link to="/Weather" class="inline-flex items-center border-b-2 border-sky-900 px-1 pt-1 text-sm font-medium text-sky-900">Weather</router-link>
            </div>
          </div>

          <div v-show="!isLoggedIn" class="hidden lg:ml-4 lg:flex lg:items-center justify-end">
            <router-link to="/Register">
              <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-sky-900 px-4 py-2  text-sm font-medium text-white shadow-sm hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-900 focus:ring-offset-2 mr-2">Register</button>
            </router-link>
            <router-link to="/Login">
              <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-sky-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-900 focus:ring-offset-2 mr-2">Log In</button>
            </router-link>
          </div>

          <div v-show="isLoggedIn" class="hidden lg:ml-4 lg:flex lg:items-center justify-end">
            <router-link to="/">
              <button @click="logout" type="button" class="inline-flex items-center rounded-md border border-transparent bg-sky-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-900 focus:ring-offset-2 mr-2">Log Out</button>
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
  import { Disclosure } from '@headlessui/vue'
  import { RouterLink } from 'vue-router'
  import { useStore } from 'vuex'
  import {computed, inject} from "vue"
  import router from "./router/index.js"

  const toast = inject('toast')
  const store = useStore()
  const isLoggedIn = computed(() => store.state.isLoggedIn)

  const logout = () => {
    store.dispatch('logout')
        .then(() => {
          toast.success('You have successfully logged out!')
        })
  }
</script>