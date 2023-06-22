<template>
  <section>
    <nav class="flex justify-between items-center">
      <h1 class="text-xl text-slate-600 font-bold">Select your pet type</h1>
      <button @click="checkStatus" :class="{'disabled': 'isAvail'}" disabled class="bg-yellow-500 disabled:bg-yellow-500/50 px-10 py-1 rounded-lg text-lg font-semibold">Next</button>
    </nav>
  </section>
</template>

<script>
export default {
  date() {
    return {
      isAvail: false
    }
  },
  methods: {
    checkStatus() {
      this.$router.push('/step2');
      console.log('activated');
    }
  }
}
</script>