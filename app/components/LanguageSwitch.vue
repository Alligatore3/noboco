<script setup>
const { locales, setLocale } = useI18n();
</script>

<template>
  <select
    @change="setLocale($event.target.value)"
    class="text-sm font-medium cursor-pointer focus:ring-0 focus:outline-none"
  >
    <option
      v-for="locale in locales"
      :value="locale.code"
      :selected="locale.code === $i18n.locale"
    >
      {{ locale.name }}
    </option>
  </select>
</template>
