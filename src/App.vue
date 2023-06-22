<script>

export default {
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<template>
  <div class="wrapper flex flex-col justify-between h-screen py-10">
    <nav class="flex justify-between">
      <img src="Animal" alt="logoMultiStep">
      <ul class="flex justify-between gap-x-5">
        <li>About</li>
        <li>Github</li>
      </ul>
    </nav>
    <router-view></router-view>
    <footer class="flex justify-between">
      <img src="Animal" alt="logoMultiStep">
      <p>Developed by Sorozco</p>
    </footer>
  </div>
</template>

<style scoped>
</style>
