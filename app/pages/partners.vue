<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

useSeoMeta({
  title: () => t("partners.seo.title"),
  ogTitle: () => t("partners.seo.title"),
  description: () => t("partners.seo.description"),
  ogDescription: () => t("partners.seo.description"),
});

const benefits = computed(() => [
  { icon: "hub", title: t("partners.benefits.bridgebase.title"), description: t("partners.benefits.bridgebase.description") },
  { icon: "account_tree", title: t("partners.benefits.methodology.title"), description: t("partners.benefits.methodology.description") },
  { icon: "psychology", title: t("partners.benefits.aiTools.title"), description: t("partners.benefits.aiTools.description") },
  { icon: "description", title: t("partners.benefits.templates.title"), description: t("partners.benefits.templates.description") },
  { icon: "verified", title: t("partners.benefits.certification.title"), description: t("partners.benefits.certification.description") },
  { icon: "gavel", title: t("partners.benefits.governance.title"), description: t("partners.benefits.governance.description") },
]);

const revenueStreams = computed(() => [
  { title: t("partners.revenue.license.title"), description: t("partners.revenue.license.description") },
  { title: t("partners.revenue.share.title"), description: t("partners.revenue.share.description") },
  { title: t("partners.revenue.support.title"), description: t("partners.revenue.support.description") },
]);
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative min-h-[85vh] flex items-center overflow-hidden pt-20">
      <div class="absolute inset-0 z-0">
        <div class="w-full h-full bg-[radial-gradient(circle_at_70%_50%,#202C46_0%,transparent_60%)] opacity-60"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
      </div>
      <div class="relative z-10 max-w-container mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-gutter">
        <div class="space-y-8">
          <span class="inline-block px-3 py-1 bg-primary-container border border-outline-variant text-tertiary font-label-sm text-label-sm tracking-widest">{{ t("partners.hero.eyebrow") }}</span>
          <h1 class="font-display-lg text-display-lg max-w-xl">{{ t("partners.hero.title") }}</h1>
          <div class="font-body-lg text-body-lg max-w-lg leading-relaxed text-on-background space-y-2">
            <p class="font-bold">{{ t("partners.hero.lead") }}</p>
            <p>{{ t("partners.hero.description") }}</p>
          </div>
          <div class="flex gap-4">
            <NuxtLink :to="localePath('/contact')" class="bg-tertiary text-on-tertiary px-8 py-4 font-label-md text-label-md hover:brightness-110 active:scale-95 transition-all">{{ t("partners.hero.cta") }}</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Partner -->
    <section class="py-32 bg-surface-container-low">
      <div class="max-w-container mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div class="lg:col-span-5">
            <h2 class="font-headline-lg text-headline-lg mb-8">{{ t("partners.why.title") }}</h2>
            <div class="space-y-6">
              <div class="p-8 border border-outline-variant bg-background">
                <p class="font-headline-md text-headline-md italic text-tertiary leading-snug">{{ t("partners.why.quote") }}</p>
              </div>
              <p class="font-body-md text-body-md text-on-surface-variant">{{ t("partners.why.description") }}</p>
            </div>
          </div>
          <div class="lg:col-span-6 lg:col-start-7 grid grid-cols-2 gap-4">
            <div class="space-y-4">
              <div class="h-64 bg-primary-container border border-outline-variant p-6 flex flex-col justify-end">
                <span class="font-label-sm text-label-sm text-tertiary mb-2">{{ t("partners.why.efficiency.label") }}</span>
                <p class="font-headline-md text-headline-md text-on-surface">+300%</p>
                <p class="font-label-sm text-label-sm text-on-surface-variant">{{ t("partners.why.efficiency.caption") }}</p>
              </div>
            </div>
            <div class="space-y-4 pt-12">
              <div class="h-48 bg-surface-container-high border border-outline-variant p-6 flex flex-col justify-end">
                <span class="font-label-sm text-label-sm text-tertiary mb-2">{{ t("partners.why.network.label") }}</span>
                <p class="font-headline-md text-headline-md text-on-surface">4</p>
                <p class="font-label-sm text-label-sm text-on-surface-variant">{{ t("partners.why.network.caption") }}</p>
              </div>
              <div class="h-64 bg-primary-container border border-outline-variant p-6 flex flex-col justify-end">
                <span class="font-label-sm text-label-sm text-tertiary mb-2">{{ t("partners.why.automation.label") }}</span>
                <p class="font-headline-md text-headline-md text-on-surface">80%</p>
                <p class="font-label-sm text-label-sm text-on-surface-variant">{{ t("partners.why.automation.caption") }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="py-32">
      <div class="max-w-container mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="text-center mb-20">
          <h2 class="font-headline-lg text-headline-lg mb-4">{{ t("partners.benefits.title") }}</h2>
          <p class="text-on-surface-variant max-w-2xl mx-auto">{{ t("partners.benefits.subtitle") }}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div
            v-for="benefit in benefits"
            :key="benefit.title"
            class="group relative overflow-hidden border border-outline-variant bg-surface-container p-8 hover:bg-primary-container transition-colors"
          >
            <span class="material-symbols-outlined text-tertiary text-4xl mb-6">{{ benefit.icon }}</span>
            <h3 class="font-headline-md text-headline-md mb-4">{{ benefit.title }}</h3>
            <p class="text-on-surface-variant font-body-md">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Revenue Model -->
    <section class="py-32 bg-surface-container-lowest">
      <div class="max-w-container mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div>
            <h2 class="font-headline-lg text-headline-lg mb-8">{{ t("partners.revenue.title") }}</h2>
            <p class="font-body-lg text-body-lg text-on-surface-variant mb-12">{{ t("partners.revenue.description") }}</p>
            <div class="space-y-8">
              <div v-for="(stream, index) in revenueStreams" :key="stream.title" class="flex items-start gap-6">
                <div class="w-12 h-12 rounded-full border border-tertiary flex items-center justify-center text-tertiary shrink-0">{{ index + 1 }}</div>
                <div>
                  <h4 class="font-label-md text-label-md text-on-surface mb-1">{{ stream.title }}</h4>
                  <p class="text-on-surface-variant font-body-md">{{ stream.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-32 relative overflow-hidden">
      <div class="absolute inset-0 bg-primary-container z-0 opacity-50"></div>
      <div class="max-w-container mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div class="max-w-4xl">
          <h2 class="font-display-lg text-display-lg mb-8">{{ t("partners.cta.title") }}</h2>
          <p class="font-body-lg text-body-lg mb-12 max-w-2xl text-on-background">{{ t("partners.cta.description") }}</p>
          <NuxtLink :to="localePath('/contact')" class="inline-block bg-tertiary text-on-tertiary px-12 py-5 font-label-md text-label-md hover:brightness-110 active:scale-95 transition-all">{{ t("partners.cta.button") }}</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
