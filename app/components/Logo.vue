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
  <div class="flex items-center gap-2">
    <div
      class="bg-blue-700 rounded-lg w-8 h-8 flex items-center justify-center"
    >
      <button @click="scrollToTop">
        <Icon name="bx:bxs-planet" class="text-white" />
      </button>
    </div>

    <h1 class="text-xl font-bold">NOBOCO</h1>
  </div>
</template>
