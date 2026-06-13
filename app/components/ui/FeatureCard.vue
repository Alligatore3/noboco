<script setup lang="ts">
withDefaults(
  defineProps<{
    icon?: string;
    title?: string;
    description?: string;
    /** Visual style: "bordered" (problem cards) or "filled" (bento). */
    variant?: "bordered" | "filled";
    /** Show the icon faintly in the top-right corner (bento style). */
    cornerIcon?: boolean;
  }>(),
  {
    variant: "bordered",
    cornerIcon: false,
  },
);
</script>

<template>
  <div
    class="relative overflow-hidden p-8 border border-outline-variant transition-colors"
    :class="
      variant === 'filled'
        ? 'bg-primary-container'
        : 'bg-surface-container-low hover:border-tertiary/50'
    "
  >
    <div
      v-if="cornerIcon && icon"
      class="absolute top-0 right-0 p-4 opacity-10 pointer-events-none"
    >
      <span class="material-symbols-outlined text-6xl">{{ icon }}</span>
    </div>

    <span
      v-if="icon && !cornerIcon"
      class="material-symbols-outlined text-tertiary mb-6 block text-4xl"
      >{{ icon }}</span
    >

    <h3
      v-if="title"
      class="font-label-md text-label-md text-tertiary uppercase mb-4"
    >
      {{ title }}
    </h3>

    <p v-if="description" class="text-sm text-on-surface-variant">
      {{ description }}
    </p>

    <slot />
  </div>
</template>
