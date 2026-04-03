<script setup lang="ts">
import { useHash } from "@/composables/useHash";

const { removeHash } = useHash();

const scrollToTop = () => {
  removeHash();

  window.scrollTo({
    behavior: "smooth",
    top: 0,
  });
};
</script>

<style scoped>
h1 {
  font-family:
    "Gotham", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
</style>

<template>
  <h1 class="text-xl font-bold cursor-pointer">
    <NuxtLink @click="scrollToTop">NOBOCO</NuxtLink>
  </h1>
</template>
