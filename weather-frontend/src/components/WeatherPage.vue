<template>
  <div class="max-w-md mx-auto">
    <Listbox as="div" v-model="selected">
      <div class="relative mt-8">
        <ListboxButton class="relative w-full cursor-default rounded-md border border-sky-900 bg-white py-2  text-left shadow-sm focus:border-sky-900 focus:outline-none focus:ring-1 focus:ring-sky-900 sm:text-sm">
          <span class="block truncate pl-3">{{ selected.name }}</span>
          <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </ListboxButton>

        <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
          <ListboxOptions class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-sky-900 ring-opacity-5 focus:outline-none sm:text-sm">
            <ListboxOption as="template" v-for="city in cities" :key="city.id" :value="city" v-slot="{ active, selected }">
              <li :class="[active ? 'text-white bg-sky-900' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
                <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">{{ city.name }}</span>

                <span v-if="selected" :class="[active ? 'text-white' : 'text-sky-900', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>

  <div class="container flex items-center justify-center gap-40 columns-2 my-20">
    <img v-if="selected.name === 'Lisboa'" class="w-72" src="public/lisboa.png" alt="Lisboa City">
    <img v-else-if="selected.name === 'Leiria'" class="w-72" src="public/leiria.png" alt="Leiria City">
    <img v-else-if="selected.name === 'Coimbra'" class="w-72" src="public/coimbra.png" alt="Coimbra City">
    <img v-else-if="selected.name === 'Porto'" class="w-72" src="public/porto.png" alt="Porto City">
    <img v-else class="w-72" src="public/faro.png" alt="Faro City">

    <div class="px-6 lg:px-8">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-xl font-bold text-sky-900">{{ selected.name}}</h1>
          <p class="mt-2 text-sm font-semibold text-sky-900">Weather Forecast for the day 16th February, last update at 17:00.</p>
        </div>
      </div>
      <div class="-mx-6 mt-8 sm:-mx-0">
        <table class="min-w-full divide-y divide-gray-300">
          <tbody class="divide-y divide-gray-200 bg-white">
          <tr>
            <td class="w-full max-w-0 py-4 pl-6 pr-3 text-sm font-medium text-sky-900 sm:w-auto sm:max-w-none sm:pl-0">Temperature</td>
            <td class="hidden px-3 py-4 text-sm text-sky-900 lg:table-cell">ºC</td>
          </tr>
          <tr>
            <td class="w-full max-w-0 py-4 pl-6 pr-3 text-sm font-medium text-sky-900 sm:w-auto sm:max-w-none sm:pl-0">Maximum Temperature</td>
            <td class="hidden px-3 py-4 text-sm text-sky-900 lg:table-cell">ºC</td>
          </tr>
          <tr>
            <td class="w-full max-w-0 py-4 pl-6 pr-3 text-sm font-medium text-sky-900 sm:w-auto sm:max-w-none sm:pl-0">Minimum Temperature</td>
            <td class="hidden px-3 py-4 text-sm text-sky-900 lg:table-cell">ºC</td>
          </tr>
          <tr>
            <td class="w-full max-w-0 py-4 pl-6 pr-3 text-sm font-medium text-sky-900 sm:w-auto sm:max-w-none sm:pl-0">Humidity</td>
            <td class="hidden px-3 py-4 text-sm text-sky-900 lg:table-cell">%</td>
          </tr>
          <tr>
            <td class="w-full max-w-0 py-4 pl-6 pr-3 text-sm font-medium text-sky-900 sm:w-auto sm:max-w-none sm:pl-0">Atmospheric pressure</td>
            <td class="hidden px-3 py-4 text-sm text-sky-900 lg:table-cell">hPa</td>
          </tr>
          <tr>
            <td class="w-full max-w-0 py-4 pl-6 pr-3 text-sm font-medium text-sky-900 sm:w-auto sm:max-w-none sm:pl-0">Sea Level</td>
            <td class="hidden px-3 py-4 text-sm text-sky-900 lg:table-cell">m</td>
          </tr>
          <tr>
            <td class="w-full max-w-0 py-4 pl-6 pr-3 text-sm font-medium text-sky-900 sm:w-auto sm:max-w-none sm:pl-0">Visibility</td>
            <td class="hidden px-3 py-4 text-sm text-sky-900 lg:table-cell">km</td>
          </tr>
          <tr>
            <td class="w-full max-w-0 py-4 pl-6 pr-3 text-sm font-medium text-sky-900 sm:w-auto sm:max-w-none sm:pl-0">Wind</td>
            <td class="hidden px-3 py-4 text-sm text-sky-900 lg:table-cell">m/s</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

const cities = [
  {id:'2267056', name: 'Lisboa'},
  {id:'2267094', name: 'Leiria'},
  {id:'2740636', name: 'Coimbra'},
  {id:'2735941', name: 'Porto'},
  {id:'2268337', name: 'Faro'},
]

const selected = ref(cities[1])


</script>