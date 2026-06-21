<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

useSeoMeta({
  title: () => t("consulting.seo.title"),
  ogTitle: () => t("consulting.seo.title"),
  description: () => t("consulting.seo.description"),
  ogDescription: () => t("consulting.seo.description"),
});

const services = computed(() => [
  { icon: "map", title: t("consulting.services.strategy.title"), description: t("consulting.services.strategy.description") },
  { icon: "analytics", title: t("consulting.services.research.title"), description: t("consulting.services.research.description") },
  { icon: "hub", title: t("consulting.services.distributor.title"), description: t("consulting.services.distributor.description") },
  { icon: "handshake", title: t("consulting.services.scouting.title"), description: t("consulting.services.scouting.description") },
  { icon: "translate", title: t("consulting.services.localization.title"), description: t("consulting.services.localization.description") },
  { icon: "trending_up", title: t("consulting.services.bizdev.title"), description: t("consulting.services.bizdev.description") },
  { icon: "ads_click", title: t("consulting.services.marketing.title"), description: t("consulting.services.marketing.description") },
  { icon: "account_tree", title: t("consulting.services.pm.title"), description: t("consulting.services.pm.description") },
]);

const oneShots = computed(() => [
  { tag: t("consulting.oneShot.fit.tag"), title: t("consulting.oneShot.fit.title"), description: t("consulting.oneShot.fit.description") },
  { tag: t("consulting.oneShot.gtm.tag"), title: t("consulting.oneShot.gtm.title"), description: t("consulting.oneShot.gtm.description") },
  { tag: t("consulting.oneShot.target.tag"), title: t("consulting.oneShot.target.title"), description: t("consulting.oneShot.target.description") },
]);

const processSteps = computed(() => [
  { n: "01", title: t("consulting.process.discovery.title"), description: t("consulting.process.discovery.description") },
  { n: "02", title: t("consulting.process.research.title"), description: t("consulting.process.research.description") },
  { n: "03", title: t("consulting.process.matching.title"), description: t("consulting.process.matching.description") },
  { n: "04", title: t("consulting.process.structuring.title"), description: t("consulting.process.structuring.description") },
  { n: "05", title: t("consulting.process.launch.title"), description: t("consulting.process.launch.description") },
]);

const industries = computed(() => [
  { icon: "restaurant", title: t("consulting.industries.food.title"), description: t("consulting.industries.food.description") },
  { icon: "diamond", title: t("consulting.industries.fashion.title"), description: t("consulting.industries.fashion.description") },
  { icon: "precision_manufacturing", title: t("consulting.industries.industrial.title"), description: t("consulting.industries.industrial.description") },
  { icon: "cloud", title: t("consulting.industries.saas.title"), description: t("consulting.industries.saas.description") },
]);
</script>

<template>
  <div>
    <!-- Hero -->
    <section
      class="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-margin-mobile md:px-margin-desktop py-24 overflow-hidden pt-32"
    >
      <div class="absolute inset-0 z-0 opacity-20">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#202C46_0%,transparent_70%)]"></div>
      </div>
      <div class="relative z-10 max-w-4xl mx-auto">
        <span class="font-label-md text-label-md text-tertiary mb-6 block tracking-[0.2em] uppercase">{{ t("consulting.hero.eyebrow") }}</span>
        <h1 class="font-display-lg text-display-lg md:text-[80px] leading-tight mb-8" v-html="t('consulting.hero.title')" />
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">{{ t("consulting.hero.description") }}</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink :to="localePath('/contact')" class="border border-outline px-10 py-4 font-label-md text-label-md font-bold tracking-widest uppercase text-on-surface hover:bg-surface-variant transition-all">{{ t("consulting.hero.cta") }}</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Core Services Bento -->
    <section class="py-24 px-margin-mobile md:px-margin-desktop max-w-container mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div class="max-w-xl">
          <h2 class="font-headline-lg text-headline-lg mb-4">{{ t("consulting.services.title") }}</h2>
          <p class="text-on-surface-variant">{{ t("consulting.services.subtitle") }}</p>
        </div>
        <div class="h-px flex-grow bg-outline-variant/30 mx-8 hidden md:block"></div>
        <div class="font-label-md text-label-md text-tertiary whitespace-nowrap">{{ t("consulting.services.pillarLabel") }}</div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="service in services"
          :key="service.title"
          class="bg-primary-container p-8 border border-outline-variant hover:border-tertiary transition-colors group"
        >
          <span class="material-symbols-outlined text-tertiary text-3xl mb-6">{{ service.icon }}</span>
          <h3 class="font-headline-md text-headline-md mb-3 text-on-surface">{{ service.title }}</h3>
          <p class="text-on-surface-variant text-body-md mb-6">{{ service.description }}</p>
          <div class="h-1 w-0 group-hover:w-full bg-tertiary transition-all duration-500"></div>
        </div>
      </div>
    </section>

    <!-- One-Shot Services -->
    <section class="py-24 bg-surface-container-lowest border-y border-outline-variant/30">
      <div class="px-margin-mobile md:px-margin-desktop max-w-container mx-auto">
        <div class="text-center mb-16">
          <h2 class="font-headline-lg text-headline-lg mb-4">{{ t("consulting.oneShot.title") }}</h2>
          <p class="text-on-surface-variant font-body-lg max-w-2xl mx-auto">{{ t("consulting.oneShot.subtitle") }}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="card in oneShots"
            :key="card.title"
            class="bg-background border border-outline-variant p-10 hover:shadow-2xl hover:shadow-tertiary/5 transition-all"
          >
            <div class="flex justify-end items-start mb-8">
              <span class="bg-tertiary-container text-tertiary px-3 py-1 text-xs font-bold uppercase tracking-widest">{{ card.tag }}</span>
            </div>
            <h4 class="font-headline-md text-headline-md mb-4">{{ card.title }}</h4>
            <p class="text-on-surface-variant mb-8 font-body-md">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="py-32 px-margin-mobile md:px-margin-desktop max-w-container mx-auto overflow-hidden">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 relative">
        <div class="absolute top-1/2 left-0 w-full h-px bg-outline-variant/30 -z-10 hidden lg:block"></div>
        <div
          v-for="(step, index) in processSteps"
          :key="step.n"
          class="flex flex-col items-center lg:items-start"
        >
          <div
            class="w-16 h-16 bg-primary-container flex items-center justify-center font-headline-md text-headline-md mb-6 relative"
            :class="index === 0 ? 'border border-tertiary text-tertiary' : 'border border-outline text-on-surface'"
          >
            {{ step.n }}
            <div v-if="index === 0" class="absolute -bottom-2 -right-2 w-full h-full border border-tertiary/30 -z-10"></div>
          </div>
          <h5 class="font-bold text-on-surface mb-2">{{ step.title }}</h5>
          <p class="text-sm text-on-surface-variant text-center lg:text-left">{{ step.description }}</p>
        </div>
      </div>
    </section>

    <!-- Industries -->
    <section class="py-24 px-margin-mobile md:px-margin-desktop max-w-container mx-auto">
      <h2 class="font-headline-lg text-headline-lg text-center mb-16">{{ t("consulting.industries.title") }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="industry in industries"
          :key="industry.title"
          class="relative h-[450px] group overflow-hidden border border-outline-variant bg-surface-container-low"
        >
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#202C46_0%,transparent_70%)] transition-transform duration-700 group-hover:scale-110 flex items-center justify-center">
            <span class="material-symbols-outlined text-tertiary/30 text-[96px]">{{ industry.icon }}</span>
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
          <div class="absolute bottom-0 p-8 w-full">
            <h4 class="font-headline-md text-headline-md mb-2 text-on-surface">{{ industry.title }}</h4>
            <p class="text-on-surface-variant text-sm transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">{{ industry.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-32 px-margin-mobile md:px-margin-desktop">
      <div class="max-w-container mx-auto bg-primary-container p-12 md:p-24 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-1/3 h-full bg-tertiary/5 skew-x-[-20deg] translate-x-1/2"></div>
        <div class="relative z-10 max-w-2xl">
          <h2 class="font-display-lg text-headline-lg md:text-[56px] leading-tight mb-8" v-html="t('consulting.cta.title')" />
          <p class="font-body-lg text-body-lg text-on-surface-variant mb-12">{{ t("consulting.cta.description") }}</p>
          <div class="flex flex-wrap gap-6">
            <NuxtLink :to="localePath('/contact')" class="bg-tertiary text-on-tertiary px-12 py-5 font-label-md text-label-md font-bold tracking-widest uppercase hover:scale-105 transition-transform">{{ t("consulting.cta.button") }}</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
