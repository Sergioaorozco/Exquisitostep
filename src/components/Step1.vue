<template>
  <div>
    <section>
      <div class="mb-20">
        <Steps :model="items" :readonly="true" aria-label="Form Steps"/>
      </div>
      <nav class="flex justify-between items-center">
        <h1 class="text-xl text-slate-600 font-bold">Select your pet type</h1>
        <button @click="checkStatus" :class="{'uiDisabled': 'isAvail'}" class="bg-yellow-500 disabled:bg-yellow-500/50 px-10 py-1 rounded-lg text-lg font-semibold">Next</button>
      </nav>
    </section>
    <section>
      <div class="grid grid-cols-3 mt-10 gap-4">
        <figure v-for="item in details" class="mx-auto">
          <p>{{item.name}}</p>
        </figure>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAvail: false,
      details: [
        {name:'Pollito', img:'this is an image'},
        {name:'Perro', img:'this is an image'},
        {name:'Gato', img:'this is an image'},
        {name:'Ave', img:'this is an image'},
        {name:'Oso', img:'this is an image'},
        {name:'Pato', img:'this is an image'},
      ],
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