<script setup lang="ts">
import { countries } from "@/constants/countries";

const model = defineModel(undefined);

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
const options = computed(() =>
  countries.map(({ code: value, name: label }) => ({
    value,
    label,
  }))
);
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
      v-model="model"
      :name="selectId"
      :id="selectId"
    >
      <option value="undefined" selected>Choose a country</option>
      <option v-for="option in options" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>
