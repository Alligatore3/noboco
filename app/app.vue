<script setup lang="ts">
const { locale } = useI18n();

// Keep <html lang> in sync with the active locale.
useHead({
  htmlAttrs: {
    lang: locale,
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
