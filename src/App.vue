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
  <div class="wrapper flex flex-col justify-between h-screen py-10 px-10 lg:px-0">
    <section>
      <nav class="flex justify-between mb-20">
        <router-link to="/"><img src="Animal" alt="logoMultiStep"></router-link>
        <ul class="flex justify-between gap-x-5">
          <li>About</li>
          <li>Github</li>
        </ul>
      </nav>
      <router-view></router-view>
    </section>
    <footer class="flex justify-between">
      <router-link to="/"><img src="Animal" alt="logoMultiStep"></router-link>
      <p>Developed by Sorozco</p>
    </footer>
  </div>
</template>

<style scoped>
</style>
