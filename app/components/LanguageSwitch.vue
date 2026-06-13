<script setup>
const { locales, setLocale } = useI18n();
</script>

<template>
  <select
    @change="setLocale($event.target.value)"
    class="bg-transparent text-on-surface-variant hover:text-on-surface text-label-md font-label-md cursor-pointer focus:ring-0 focus:outline-none"
  >
    <option
      v-for="locale in locales"
      :key="locale.code"
      :value="locale.code"
      :selected="locale.code === $i18n.locale"
      class="bg-surface-container text-on-surface"
    >
      {{ locale.name }}
    </option>
  </select>
</template>
