<script setup lang="ts">
const { label, isRequired } = defineProps({
  label: {
    type: String,
    required: true,
  },
  isRequired: {
    type: Boolean,
    required: false,
    default: true,
  },
});

const selectId = computed(() => label.toLowerCase().replaceAll(/ /g, "-"));
</script>

<template>
  <div>
    <label
      :for="selectId"
      class="block mb-2.5 text-sm font-medium text-heading"
      >{{ label }}</label
    >
    <select
      class="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
      :required="isRequired"
      :name="selectId"
      :id="selectId"
    >
      <option value="" selected>Choose a country</option>
      <option value="US">United States</option>
      <option value="CA">Canada</option>
      <option value="FR">France</option>
      <option value="DE">Germany</option>
    </select>
  </div>
</template>
