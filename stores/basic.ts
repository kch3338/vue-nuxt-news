import { defineStore } from "pinia";

// TODO Composition API
export const useStore = defineStore('storeId', () => {
    const count = ref<number>(10);
    const doubleCount = computed(() => {
        return count.value * 2;
    });

    const doublePlusOne = computed(() => {
        return doubleCount.value + 1;
    });

    function increment() {
        count.value++;
    }

    return { count, doubleCount, doublePlusOne, increment }
})

// TODO Options API
// export const useStore = defineStore('storeId', {
//   state: () => {
//     return {
//       count: 1,
//     }
//   },
//   getters: {
//     doubleCount: (state) => state.count * 2,
//     doublePlusOne() : number {
//       return this.doubleCount + 1;
//     },
//   },
//   actions: {
//     increment() {
//       this.count++;
//     }
//   }
// })