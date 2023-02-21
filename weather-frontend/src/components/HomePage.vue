<template>
  <!-- Map img-->
  <div class="container flex items-center justify-center gap-40 columns-2 my-20">
    <img class="w-72" src="public/portugal.png">

    <div class="px-6 lg:px-8">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-xl font-bold text-sky-900">Forecasts</h1>
          <p class="mt-2 text-sm font-semibold text-sky-900">Weather Forecast for {{ updateTime }}.</p>
        </div>
      </div>
      <div class="-mx-6 mt-8 sm:-mx-0">
        <table class="min-w-full divide-y divide-gray-300">
          <thead>
          <tr>
            <th scope="col" class="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-sky-900 sm:pl-0">City</th>
            <th scope="col" class="hidden pl-36 py-3.5 text-left text-sm font-semibold text-sky-900 lg:table-cell">Temperature</th>
          </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 bg-white">
          <tr v-for="city in cities" :key="city.id">
            <td class="w-full max-w-0 py-4 pl-6 pr-3 text-sm font-medium text-sky-900 sm:w-auto sm:max-w-none sm:pl-0">{{ city.name }}</td>
            <td class="hidden pl-36 py-4 text-sm text-sky-900 lg:table-cell">{{ city.temperature }} ºC</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed, watch } from 'vue'
  import axios from 'axios'

  const baseUrl = import.meta.env.VITE_BASE_URL

  const cities = ref([
    { id: '2267056', name: 'Lisboa', temperature: '' },
    { id: '2267094', name: 'Leiria', temperature: '' },
    { id: '2740636', name: 'Coimbra', temperature: '' },
    { id: '2735941', name: 'Porto', temperature: '' },
    { id: '2268337', name: 'Faro', temperature: '' },
  ]);

  //Get the time when the page is open
  const currentTime = ref(new Date())

  setInterval(() => {
    currentTime.value = new Date()
  }, 30 * 60 * 1000)

  const updateTime = computed(() => {
    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }
    return currentTime.value.toLocaleString('en-US', options)
  })

  //GET method to get the temperature of different cities
  watch(cities, async (tempCities) => {
    try {
      const promises = tempCities.map((city) =>
          axios.get(`${baseUrl}/api/forecast/${city.id}`)
      )
      const responses = await Promise.all(promises)
      responses.forEach((response, index) => {
        tempCities[index].temperature = response.data[0].temperature
      })
    } catch (error) {
      console.error(error)
    }
  }, { immediate: true })
</script>