<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string;
    title?: string;
    align?: "left" | "center";
    underline?: boolean;
  }>(),
  {
    align: "left",
    underline: false,
  },
);
</script>

<template>
  <div :class="align === 'center' ? 'text-center' : ''">
    <span
      v-if="eyebrow"
      class="text-tertiary font-label-md text-label-md uppercase tracking-widest block mb-2"
    >
      {{ eyebrow }}
    </span>
    <h2
      v-if="title"
      class="font-headline-lg text-headline-lg"
      v-html="title"
    />
    <slot v-else name="title" />
    <div
      v-if="underline"
      class="w-24 h-1 bg-tertiary mt-4"
      :class="align === 'center' ? 'mx-auto' : ''"
    />
    <slot />
  </div>
</template>
