import { defineStore } from "pinia";

export const useRandom = defineStore("random", () => {
  function getRandomNumber() {
    return Math.round(Math.random() * 100);
  }

  return {
    getRandomNumber,
  };
});
