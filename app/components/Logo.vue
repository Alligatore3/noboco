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
  <div class="flex flex-col items-center gap-1">
    <h1 class="text-xl font-bold cursor-pointer">
      <NuxtLink @click="scrollToTop">NOBOCO</NuxtLink>
    </h1>
    <h3 class="text-xs font-bold cursor-pointer">
      <NuxtLink @click="scrollToTop">NO BORDER CONSULTING</NuxtLink>
    </h3>
  </div>
</template>
