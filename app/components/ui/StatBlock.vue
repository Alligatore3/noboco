<script setup lang="ts">
defineProps<{
  value: string;
  label: string;
}>();
</script>

<template>
  <div class="space-y-2 text-center">
    <div class="font-display-lg text-display-lg text-tertiary">{{ value }}</div>
    <div
      class="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant"
    >
      {{ label }}
    </div>
  </div>
</template>
