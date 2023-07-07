import { defineStore } from 'pinia';

export const useCadStore = defineStore('character', {
  state: () => {
    return {
      completeBody: {
        character: "",
        body: "",
        face: "",
      },
    }
  }
})