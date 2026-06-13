<script setup lang="ts">
defineProps<{
  title: string;
  buttonLabel: string;
  to?: string;
}>();

const localePath = useLocalePath();
</script>

<template>
  <section class="py-24 bg-surface-container-lowest">
    <div class="max-w-container mx-auto px-margin-mobile md:px-margin-desktop">
      <div
        class="bg-primary-container border border-outline-variant p-12 md:p-20 text-center relative overflow-hidden"
      >
        <div class="absolute top-0 left-0 w-2 h-full bg-tertiary"></div>
        <h2 class="font-headline-lg text-headline-lg mb-8" v-html="title" />
        <NuxtLink
          :to="localePath(to || '/contact')"
          class="inline-block bg-tertiary text-on-tertiary px-12 py-5 font-label-md text-label-md font-extrabold uppercase tracking-widest hover:scale-105 transition-transform gold-glow"
        >
          {{ buttonLabel }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
