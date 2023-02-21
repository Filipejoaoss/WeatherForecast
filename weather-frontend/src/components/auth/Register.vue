<template>
  <div class="flex min-h-full flex-col justify-center pt-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md flex items-center justify-center">
      <img src="public/weather.png" class="w-32 h-32 mt-2" alt="Logo">
      <router-link to="/">
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-sky-900">Weather Forecast</h2>
      </router-link>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit="handleSubmit">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <div class="mt-1">
              <input id="name" name="mane" type="name" v-model="credentials.name" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-sky-900 focus:outline-none focus:ring-sky-900 sm:text-sm" />
            </div>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <div class="mt-1">
              <input id="email" name="email" type="email" autocomplete="email" v-model="credentials.email" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-sky-900 focus:outline-none focus:ring-sky-900 sm:text-sm" />
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <div class="mt-1">
              <input id="password" name="password" type="password" autocomplete="current-password" v-model="credentials.password" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-sky-900 focus:outline-none focus:ring-sky-900 sm:text-sm" />
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password Confirmation</label>
            <div class="mt-1">
              <input id="password" name="password" type="password" autocomplete="current-password" v-model="credentials.password_confirmation" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-sky-900 focus:outline-none focus:ring-sky-900 sm:text-sm" />
            </div>
          </div>

          <div>
            <button type="submit" class="flex w-full justify-center rounded-md border border-transparent bg-sky-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-900 focus:ring-offset-2">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
  import axios from "axios"
  import {inject, ref} from "vue"
  import router from "../../router/index.js";

  const baseUrl = import.meta.env.VITE_BASE_URL
  const toast = inject('toast')
  const credentials = ref({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      if (credentials.value.password !== credentials.value.password_confirmation) {
        toast.error('The password and the Password Confirmation don´t match')
        return
      }

      const response = await axios.post(`${baseUrl}/api/register`, {
        name: credentials.value.name,
        email: credentials.value.email,
        password: credentials.value.password,
        password_confirmation: credentials.value.password_confirmation
      })

      if (response.status === 201) {
        toast.success('User created successfully!')
        router.push({ name: 'HomePage' })
      }
    } catch (error) {
      if (error.response && error.response.status === 422 && error.response.data.error === 'Invalid email') {
        toast.error('Invalid email!')
      } else {
        toast.error('An error occurred')
      }
    }
  }
</script>