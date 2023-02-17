<template>
  <main class="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
    <div class="text-center">
      <p class="text-base font-semibold text-sky-900">404</p>
      <h1 class="mt-4 text-3xl font-bold tracking-tight text-sky-900 sm:text-5xl">Page not found</h1>
      <p class="mt-6 text-base leading-7 text-sky-900">Sorry, we couldn’t find the page you’re looking for.</p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <router-link to="/" class="rounded-md bg-sky-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</router-link>
      </div>
    </div>
  </main>
</template>


<script>
export default {
  name: "NotFound"
}
</script>

<style scoped>

</style>