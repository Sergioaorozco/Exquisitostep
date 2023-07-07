<template>
  <section>
    <p class="text-5xl text-slate-600 text-center font-bold">Final Step</p>
    <div class="flex justify-center flex-col items-center mt-10">
      <p class="text-3xl font-semibold text-slate-600">Name: <span class="text-orange-500">{{ cadStore.completeBody.name }}</span> </p>
      <p class="text-2xl text-slate-600">{{ cadStore.completeBody.character }} + {{ cadStore.completeBody.body }} + {{ cadStore.completeBody.face }}</p>
    </div>
    <button @click="Restart()" class="bg-yellow-500 hover:bg-yellow-400 transition-colors duration-200 disabled:bg-yellow-500/50 px-10 py-1 rounded-lg text-lg font-semibold absolute bottom-40">Restart</button>
  </section>
</template>

<script>
import { useCadStore } from '../stores/infoStore'

export default
{
  data() {
    return {
      cadStore: useCadStore(),
    }
  },
  methods: {
    Restart(){
      this.cadStore.completeBody.name = ''
      this.cadStore.completeBody.character = ''
      this.cadStore.completeBody.body = ''
      this.cadStore.completeBody.face = ''
      this.$router.push('/')
    }
  }
}
</script>