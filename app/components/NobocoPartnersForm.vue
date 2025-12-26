<script setup lang="ts">
const submitForm = () => {
  console.log("submitForm");
};
</script>

<template>
  <div id="partner-with-us" class="flex flex-col items-center gap-4 py-4">
    <div class="mx-auto">
      <div
        class="text-2xl rounded-full bg-blue-200 w-10 h-10 flex items-center justify-center"
      >
        🌍
      </div>
    </div>
    <h2 class="text-3xl font-semibold text-center">
      {{ $t("joinForms.nobocoPartners.title") }}
    </h2>

    <p
      v-html="$t('joinForms.nobocoPartners.description')"
      class="text-sm text-gray-500 text-center"
    />

    <ShadowBox class="w-full">
      <div class="p-4">
        <form class="flex flex-col gap-4" @submit.prevent="submitForm">
          <div>
            <label
              for="name-company"
              class="block mb-2.5 text-sm font-medium text-heading"
              >{{ $t("joinForms.nobocoPartners.nameCompanyLabel") }}</label
            >
            <div class="flex shadow-xs rounded-base">
              <span
                class="inline-flex items-center px-3 text-sm text-body bg-neutral-tertiary border rounded-e-0 border-default-medium border-e-0 rounded-s-base"
              >
                🏦
              </span>
              <input
                class="rounded-none rounded-e-base block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand placeholder:text-body"
                :placeholder="
                  $t('joinForms.nobocoPartners.nameCompanyPlaceholder')
                "
                id="name-company"
                type="text"
                required
              />
            </div>
          </div>

          <div>
            <label
              for="email"
              class="block mb-2.5 text-sm font-medium text-heading"
              >{{ $t("joinForms.nobocoPartners.emailAddressLabel") }}</label
            >
            <div class="flex shadow-xs rounded-base">
              <span
                class="inline-flex items-center px-3 text-sm text-body bg-neutral-tertiary border rounded-e-0 border-default-medium border-e-0 rounded-s-base"
              >
                📩
              </span>
              <input
                class="rounded-none rounded-e-base block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand placeholder:text-body"
                placeholder="name@company.com"
                type="email"
                id="email"
                required
              />
            </div>
          </div>

          <CountriesSelect
            :label="$t('joinForms.nobocoPartners.countryLabel')"
          />

          <div class="flex flex-col items-center gap-3 py-2">
            <button
              aria-label="Apply as a partner"
              title="Apply as a partner"
              class="mx-auto rounded-lg text-white bg-blue-700 font-medium leading-5 text-sm px-4 py-2.5"
              type="submit"
            >
              {{ $t("joinForms.nobocoPartners.applyAsPartnerButton") }}
            </button>

            <p class="text-xs text-gray-500 text-center">
              {{ $t("joinForms.nobocoPartners.dataPrivacy") }}
            </p>
          </div>
        </form>
      </div>
    </ShadowBox>
  </div>
</template>
