<script setup lang="ts">
const scrollToTop = () => {
  window.scrollTo({
    behavior: "smooth",
    top: 0,
  });
};
</script>

<template>
  <div class="flex items-center gap-2 justify-between">
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
    <nav>
      <ul class="flex items-center gap-4">
        <li><a href="#" class="text-sm text-gray-500">Privacy Policy</a></li>
        <li><a href="#" class="text-sm text-gray-500">Terms of Service</a></li>
        <li><a href="#" class="text-sm text-gray-500">Contact us</a></li>
      </ul>
    </nav>
  </div>
</template>
