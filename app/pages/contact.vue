<script setup lang="ts">
import { generateContactEmail } from "@/utils/generateContactEmail";

const { t } = useI18n();

useSeoMeta({
  title: () => t("contact.seo.title"),
  ogTitle: () => t("contact.seo.title"),
  description: () => t("contact.seo.description"),
  ogDescription: () => t("contact.seo.description"),
});

const form = reactive({
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  inquiry: "",
  message: "",
});

const inquiryOptions = computed(() => [
  { value: "sme", label: t("contact.form.inquiry.sme") },
  { value: "partner", label: t("contact.form.inquiry.partner") },
  { value: "investor", label: t("contact.form.inquiry.investor") },
  { value: "bridgebase", label: t("contact.form.inquiry.bridgebase") },
  { value: "other", label: t("contact.form.inquiry.other") },
]);

const submitted = ref(false);

const submitForm = () => {
  if (
    !form.name ||
    !form.company ||
    !form.email ||
    !form.country ||
    !form.inquiry ||
    !form.message
  ) {
    return;
  }

  const inquiryLabel =
    inquiryOptions.value.find((o) => o.value === form.inquiry)?.label ||
    form.inquiry;

  generateContactEmail({
    name: form.name,
    company: form.company,
    email: form.email,
    phone: form.phone,
    country: form.country,
    inquiry: form.inquiry,
    inquiryLabel,
    message: form.message,
  });

  submitted.value = true;
};
</script>

<template>
  <main class="pt-32 pb-20">
    <!-- Hero -->
    <section class="max-w-container mx-auto px-margin-mobile md:px-margin-desktop mb-16 text-center">
      <div class="max-w-4xl mx-auto">
        <span class="text-tertiary font-label-md text-label-md uppercase tracking-[0.2em] mb-4 block">{{ t("contact.hero.eyebrow") }}</span>
        <h1 class="font-display-lg text-display-lg text-on-background leading-tight mb-8">{{ t("contact.hero.title") }}</h1>
      </div>
    </section>

    <!-- Form -->
    <section class="max-w-container mx-auto px-margin-mobile md:px-margin-desktop">
      <div class="max-w-4xl mx-auto">
        <div class="bg-surface-container p-8 md:p-12 rounded-xl border border-outline-variant/30 shadow-2xl">
          <form class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6" @submit.prevent="submitForm">
            <!-- Name -->
            <div class="flex flex-col gap-2">
              <label class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider" for="name">{{ t("contact.form.name") }}</label>
              <input
                v-model="form.name"
                id="name"
                type="text"
                required
                :placeholder="t('contact.form.namePlaceholder')"
                class="bg-surface-container-low border border-outline-variant/40 rounded-lg p-3 text-on-background focus:ring-1 focus:ring-tertiary focus:border-tertiary transition-all outline-none"
              />
            </div>
            <!-- Company -->
            <div class="flex flex-col gap-2">
              <label class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider" for="company">{{ t("contact.form.company") }}</label>
              <input
                v-model="form.company"
                id="company"
                type="text"
                required
                :placeholder="t('contact.form.companyPlaceholder')"
                class="bg-surface-container-low border border-outline-variant/40 rounded-lg p-3 text-on-background focus:ring-1 focus:ring-tertiary focus:border-tertiary transition-all outline-none"
              />
            </div>
            <!-- Email -->
            <div class="flex flex-col gap-2">
              <label class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider" for="email">{{ t("contact.form.email") }}</label>
              <input
                v-model="form.email"
                id="email"
                type="email"
                required
                placeholder="john@company.com"
                class="bg-surface-container-low border border-outline-variant/40 rounded-lg p-3 text-on-background focus:ring-1 focus:ring-tertiary focus:border-tertiary transition-all outline-none"
              />
            </div>
            <!-- Phone -->
            <div class="flex flex-col gap-2">
              <label class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider" for="phone">{{ t("contact.form.phone") }}</label>
              <input
                v-model="form.phone"
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                class="bg-surface-container-low border border-outline-variant/40 rounded-lg p-3 text-on-background focus:ring-1 focus:ring-tertiary focus:border-tertiary transition-all outline-none"
              />
            </div>
            <!-- Country -->
            <div class="flex flex-col gap-2">
              <label class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider" for="country">{{ t("contact.form.country") }}</label>
              <input
                v-model="form.country"
                id="country"
                type="text"
                required
                :placeholder="t('contact.form.countryPlaceholder')"
                class="bg-surface-container-low border border-outline-variant/40 rounded-lg p-3 text-on-background focus:ring-1 focus:ring-tertiary focus:border-tertiary transition-all outline-none"
              />
            </div>
            <!-- Inquiry Type -->
            <div class="flex flex-col gap-2">
              <label class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider" for="inquiry">{{ t("contact.form.inquiry.label") }}</label>
              <select
                v-model="form.inquiry"
                id="inquiry"
                required
                class="bg-surface-container-low border border-outline-variant/40 rounded-lg p-3 text-on-background focus:ring-1 focus:ring-tertiary focus:border-tertiary transition-all outline-none appearance-none"
              >
                <option disabled value="">{{ t("contact.form.inquiry.placeholder") }}</option>
                <option v-for="opt in inquiryOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
              </select>
            </div>
            <!-- Message -->
            <div class="flex flex-col gap-2 md:col-span-2">
              <label class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider" for="message">{{ t("contact.form.message") }}</label>
              <textarea
                v-model="form.message"
                id="message"
                required
                :placeholder="t('contact.form.messagePlaceholder')"
                class="bg-surface-container-low border border-outline-variant/40 rounded-lg p-3 text-on-background focus:ring-1 focus:ring-tertiary focus:border-tertiary transition-all outline-none min-h-[150px] resize-none"
              ></textarea>
            </div>
            <!-- Submit -->
            <div class="md:col-span-2 mt-4">
              <button
                type="submit"
                class="w-full bg-tertiary hover:bg-tertiary/90 text-on-tertiary font-label-md text-label-md uppercase tracking-[0.2em] py-5 px-8 transition-all duration-300 shadow-lg shadow-tertiary/20 flex items-center justify-center gap-3"
              >
                <span>{{ submitted ? t("contact.form.sent") : t("contact.form.send") }}</span>
                <span class="material-symbols-outlined">{{ submitted ? "check_circle" : "send" }}</span>
              </button>
              <p v-if="submitted" class="mt-4 text-center text-on-surface-variant text-label-md">
                {{ t("contact.form.sentHint") }}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>
