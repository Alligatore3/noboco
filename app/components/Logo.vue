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

<template>
  <h1 class="text-xl font-bold cursor-pointer">
    <NuxtLink @click="scrollToTop">NOBOCO</NuxtLink>
  </h1>
</template>
