<template>
  <section>
    <div class="mb-20">
      <Steps :model="items" :readonly="true" aria-label="Form Steps"/>
    </div>
    <nav class="flex justify-between items-center">
      <h1 class="text-xl text-slate-600 font-bold">Select a name for your Creation</h1>
      <button @click="checkStatus" :class="{'disabled': 'isAvail'}" class="bg-yellow-500 disabled:bg-yellow-500/50 px-10 py-1 rounded-lg text-lg font-semibold">Next</button>
    </nav>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isAvail: false,
      items: [
        {
            label: 'Select Type',
            to: '/step1'
        },
        {
            label: 'Select Face',
            to: '/step2'
        },
        {
            label: 'Select Body',
            to: '/step3'
        },
        {
            label: 'Name it',
            to: '/step4'
        }
      ]
    }
  },
  methods: {
    checkStatus(e) {
      e.preventDefault();
      console.log('activated');
      this.$router.push('/step2');
    }
  },
  components: {
  }
}
</script>