<template>
  <section>
    <div class="mb-20">
      <Steps :model="items" :readonly="true" aria-label="Form Steps"/>
    </div>
    <nav class="flex justify-between items-center">
      <h1 class="text-xl text-slate-600 font-bold">Select a name for your Creation</h1>
      <button @click="checkStatus" :class="{'disabled': 'isAvail'}" class="bg-yellow-500 disabled:bg-yellow-500/50 px-10 py-1 rounded-lg text-lg font-semibold">Finish</button>
    </nav>
    <section>
      <input @change="saveName($event.target)" class="border-2 w-full mt-5 border-slate-100 rounded-lg py-3 px-4" type="text">
    </section>
  </section>
</template>

<script>
import { useCadStore } from '../stores/infoStore'

export default {
  data() {
    return {
      isAvail: false,
      cadStore: useCadStore(),
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
      this.$router.push('/finalStep');
    },
    saveName(e) {
      this.cadStore.completeBody.name = e.value
    }
  },
  components: {
  }
}
</script>