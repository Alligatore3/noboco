<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  icon: string;
}>();
</script>

<template>
  <ShadowBox class="border border-gray-200">
    <div class="flex flex-col gap-2 p-8 items-center md:items-start">
      <Icon :name="icon" class="text-blue-500 text-2xl mb-4" />

      <p class="text-xl font-semibold">{{ title }}</p>
      <p class="text-gray-500">{{ description }}</p>
    </div>
  </ShadowBox>
</template>
