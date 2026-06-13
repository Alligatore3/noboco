<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

useSeoMeta({
  title: () => t("home.seo.title"),
  ogTitle: () => t("home.seo.title"),
  description: () => t("home.seo.description"),
  ogDescription: () => t("home.seo.description"),
});

const stats = computed(() => [
  { value: "12+", label: t("home.trust.projects") },
  { value: "5", label: t("home.trust.countries") },
  { value: "4", label: t("home.trust.partners") },
]);

const problems = computed(() => [
  { icon: "map", title: t("home.problem.start.title"), description: t("home.problem.start.description") },
  { icon: "handshake", title: t("home.problem.partner.title"), description: t("home.problem.partner.description") },
  { icon: "payments", title: t("home.problem.cost.title"), description: t("home.problem.cost.description") },
  { icon: "schedule", title: t("home.problem.time.title"), description: t("home.problem.time.description") },
]);

const aboutCards = computed(() => [
  { title: t("home.about.operator.title"), description: t("home.about.operator.description") },
  { title: t("home.about.methodology.title"), description: t("home.about.methodology.description") },
  { title: t("home.about.connected.title"), description: t("home.about.connected.description") },
  { title: t("home.about.technology.title"), description: t("home.about.technology.description") },
]);

const frameworkSteps = computed(() => [
  t("home.framework.steps.ideation"),
  t("home.framework.steps.marketFit"),
  t("home.framework.steps.strategy"),
  t("home.framework.steps.setup"),
  t("home.framework.steps.compliance"),
  t("home.framework.steps.execution"),
  t("home.framework.steps.growth"),
  t("home.framework.steps.scale"),
]);

const engineCards = computed(() => [
  { icon: "psychology", title: t("home.engine.intelligence.title"), description: t("home.engine.intelligence.description") },
  { icon: "description", title: t("home.engine.documents.title"), description: t("home.engine.documents.description") },
  { icon: "hub", title: t("home.engine.matching.title"), description: t("home.engine.matching.description") },
  { icon: "query_stats", title: t("home.engine.dashboard.title"), description: t("home.engine.dashboard.description") },
]);
</script>

<template>
  <div>
    <!-- Hero -->
    <section
      class="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-primary-container"
    >
      <div class="absolute inset-0 opacity-20 pointer-events-none">
        <svg
          class="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1000 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="opacity-30"
            d="M150,250 Q250,100 400,200 T700,150 T900,300"
            fill="none"
            stroke="#f2bd71"
            stroke-width="0.5"
          />
          <circle class="pulse-point" cx="200" cy="200" fill="#f2bd71" r="3" />
          <circle class="pulse-point" cx="450" cy="350" fill="#f2bd71" r="3" style="animation-delay: 1s" />
          <circle class="pulse-point" cx="800" cy="150" fill="#f2bd71" r="3" style="animation-delay: 2s" />
        </svg>
      </div>

      <div
        class="max-w-container mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter relative z-10"
      >
        <div class="lg:col-span-6 flex flex-col justify-center space-y-8">
          <span class="text-tertiary font-label-md text-label-md tracking-widest uppercase">
            {{ t("home.hero.eyebrow") }}
          </span>
          <h1 class="font-display-lg text-display-lg leading-tight" v-html="t('home.hero.title')" />
          <p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            {{ t("home.hero.description") }}
          </p>
          <div class="flex flex-wrap gap-4 pt-4">
            <NuxtLink
              :to="localePath('/contact')"
              class="bg-[#C58A2B] text-[#162033] px-8 py-4 font-label-md text-label-md font-bold uppercase tracking-wider hover:brightness-110 transition-all"
            >
              {{ t("home.hero.cta") }}
            </NuxtLink>
          </div>
        </div>

        <!-- Floating Bridgebase Dashboard -->
        <div class="lg:col-span-6 relative mt-12 lg:mt-0">
          <div
            class="glass-card rounded-lg p-6 gold-glow shadow-2xl transition-transform hover:scale-[1.01] duration-700"
          >
            <div class="flex items-center justify-between mb-8 border-b border-outline-variant/30 pb-4">
              <div class="flex items-center gap-2">
                <span class="text-tertiary material-symbols-outlined">dashboard</span>
                <span class="font-label-md text-label-md">{{ t("home.dashboard.title") }}</span>
              </div>
              <div class="flex gap-2">
                <div class="w-3 h-3 rounded-full bg-error/40"></div>
                <div class="w-3 h-3 rounded-full bg-tertiary/40"></div>
                <div class="w-3 h-3 rounded-full bg-primary/40"></div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-primary-container p-4 border border-outline-variant">
                <span class="text-tertiary font-label-sm text-label-sm block mb-1">{{ t("home.dashboard.aiFitCheck") }}</span>
                <div class="text-headline-md font-headline-md">94%</div>
                <div class="w-full bg-outline-variant h-1 mt-2">
                  <div class="bg-tertiary h-full w-[94%]"></div>
                </div>
              </div>
              <div class="bg-primary-container p-4 border border-outline-variant">
                <span class="text-tertiary font-label-sm text-label-sm block mb-1">{{ t("home.dashboard.marketResearch") }}</span>
                <div class="text-label-md font-label-md uppercase opacity-80">{{ t("home.dashboard.marketResearchValue") }}</div>
                <div class="text-label-sm text-on-surface-variant">{{ t("home.dashboard.strategicTier") }}</div>
              </div>
              <div class="col-span-2 bg-primary-container p-4 border border-outline-variant">
                <span class="text-tertiary font-label-sm text-label-sm block mb-2">{{ t("home.dashboard.kpiTracking") }}</span>
                <div class="h-16 flex items-end gap-1">
                  <div class="flex-1 bg-tertiary/20 h-[40%]"></div>
                  <div class="flex-1 bg-tertiary/40 h-[60%]"></div>
                  <div class="flex-1 bg-tertiary/60 h-[50%]"></div>
                  <div class="flex-1 bg-tertiary/80 h-[90%]"></div>
                  <div class="flex-1 bg-tertiary h-[75%]"></div>
                </div>
              </div>
              <div class="col-span-2 flex items-center justify-between bg-primary-container/50 p-4 border border-outline-variant">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center">
                    <span class="material-symbols-outlined text-[16px]">groups</span>
                  </div>
                  <span class="text-label-sm">{{ t("home.dashboard.partnerNetwork") }}</span>
                </div>
                <span class="text-tertiary text-label-sm">{{ t("home.dashboard.verifiedNodes") }}</span>
              </div>
            </div>
          </div>
          <div class="absolute -bottom-10 -right-10 w-64 h-64 bg-tertiary/5 blur-[100px] -z-10 rounded-full"></div>
        </div>
      </div>
    </section>

    <!-- Trust -->
    <section class="py-16 bg-surface-container-lowest border-y border-outline-variant/30">
      <div class="max-w-container mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <UiStatBlock v-for="stat in stats" :key="stat.label" :value="stat.value" :label="stat.label" />
        </div>
      </div>
    </section>

    <!-- Problem -->
    <section class="py-24 bg-background">
      <div class="max-w-container mx-auto px-margin-mobile md:px-margin-desktop">
        <UiSectionHeading
          :title="t('home.problem.title')"
          align="center"
          underline
          class="mb-16"
        />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <div
            v-for="problem in problems"
            :key="problem.title"
            class="p-8 border border-outline-variant bg-surface-container-low hover:border-tertiary/50 transition-colors"
          >
            <span class="material-symbols-outlined text-tertiary mb-6 block text-4xl">{{ problem.icon }}</span>
            <h3 class="font-headline-md text-headline-md mb-4 text-[22px]">{{ problem.title }}</h3>
            <p class="text-on-surface-variant">{{ problem.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About -->
    <section class="py-24 bg-surface-container-low">
      <div class="max-w-container mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="flex flex-col lg:flex-row gap-gutter items-center">
          <div class="lg:w-1/2">
            <h2 class="font-headline-lg text-headline-lg mb-8">{{ t("home.about.title") }}</h2>
            <div class="grid grid-cols-2 gap-4">
              <div
                v-for="card in aboutCards"
                :key="card.title"
                class="p-6 bg-primary-container border border-outline-variant"
              >
                <h4 class="font-label-md text-label-md text-tertiary mb-2 uppercase">{{ card.title }}</h4>
                <p class="text-sm">{{ card.description }}</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/2 mt-12 lg:mt-0">
            <div class="relative w-full aspect-square max-w-md mx-auto">
              <div
                class="w-full h-full border-4 border-tertiary/20 p-2 bg-surface-container flex items-center justify-center"
              >
                <span class="material-symbols-outlined text-tertiary/30 text-[120px]">public</span>
              </div>
              <div class="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-tertiary"></div>
              <div class="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-tertiary"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Framework -->
    <section class="py-24 bg-background overflow-hidden">
      <div class="max-w-container mx-auto px-margin-mobile md:px-margin-desktop text-center">
        <h2 class="font-headline-lg text-headline-lg mb-16">{{ t("home.framework.title") }}</h2>
        <div class="relative py-12">
          <div class="absolute top-1/2 left-0 w-full h-px bg-tertiary/30"></div>
          <div class="flex justify-between relative z-10 overflow-x-auto pb-8">
            <div
              v-for="(step, index) in frameworkSteps"
              :key="step"
              class="flex-shrink-0 w-32 group cursor-pointer"
            >
              <div
                class="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold ring-4 ring-background"
                :class="
                  index === 0
                    ? 'bg-tertiary text-on-tertiary'
                    : 'bg-surface-container border border-outline-variant text-on-surface-variant'
                "
              >
                {{ index }}
              </div>
              <span class="text-label-sm uppercase font-bold text-on-surface-variant group-hover:text-tertiary transition-colors">
                {{ step }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bridgebase Engine Preview -->
    <section class="py-24 bg-surface-container-low border-y border-outline-variant/30">
      <div class="max-w-container mx-auto px-margin-mobile md:px-margin-desktop">
        <UiSectionHeading
          :eyebrow="t('home.engine.eyebrow')"
          :title="t('home.engine.title')"
          class="mb-16"
        />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <UiFeatureCard
            v-for="card in engineCards"
            :key="card.title"
            variant="filled"
            corner-icon
            :icon="card.icon"
            :title="card.title"
            :description="card.description"
          />
        </div>
      </div>
    </section>

    <!-- Ecosystem -->
    <section class="py-24 bg-background">
      <div class="max-w-container mx-auto px-margin-mobile md:px-margin-desktop text-center">
        <h2 class="font-headline-md text-headline-md mb-16">{{ t("home.ecosystem.title") }}</h2>
        <div class="relative flex flex-col md:flex-row items-center justify-around gap-12">
          <div class="z-10 group">
            <div class="w-32 h-32 rounded-lg bg-tertiary/10 border-2 border-tertiary flex flex-col items-center justify-center p-4 group-hover:scale-110 transition-transform">
              <span class="material-symbols-outlined text-tertiary text-4xl mb-2">corporate_fare</span>
              <span class="text-label-sm font-bold uppercase text-center">{{ t("home.ecosystem.hq") }}</span>
            </div>
          </div>
          <div class="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-tertiary to-transparent opacity-30 -z-10"></div>
          <div class="md:hidden w-1 h-12 bg-tertiary/30"></div>
          <div class="z-10 group">
            <div class="w-32 h-32 rounded-lg bg-surface-container border-2 border-outline-variant flex flex-col items-center justify-center p-4 group-hover:scale-110 transition-transform group-hover:border-tertiary">
              <span class="material-symbols-outlined text-on-surface text-4xl mb-2">diversity_3</span>
              <span class="text-label-sm font-bold uppercase text-center">{{ t("home.ecosystem.partners") }}</span>
            </div>
          </div>
          <div class="md:hidden w-1 h-12 bg-tertiary/30"></div>
          <div class="z-10 group">
            <div class="w-32 h-32 rounded-lg bg-surface-container border-2 border-outline-variant flex flex-col items-center justify-center p-4 group-hover:scale-110 transition-transform group-hover:border-tertiary">
              <span class="material-symbols-outlined text-on-surface text-4xl mb-2">precision_manufacturing</span>
              <span class="text-label-sm font-bold uppercase text-center">{{ t("home.ecosystem.smes") }}</span>
            </div>
          </div>
        </div>
        <p class="mt-12 text-on-surface-variant max-w-2xl mx-auto">{{ t("home.ecosystem.description") }}</p>
      </div>
    </section>

    <!-- Vision -->
    <section class="py-32 bg-primary-container relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50"></div>
      <div class="max-w-container mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
        <h2
          class="font-display-lg text-display-lg leading-tight text-on-surface max-w-4xl mx-auto"
          v-html="t('home.vision')"
        />
        <div class="mt-12 flex justify-center gap-2">
          <div class="w-2 h-2 rounded-full bg-tertiary"></div>
          <div class="w-2 h-2 rounded-full bg-tertiary/50"></div>
          <div class="w-2 h-2 rounded-full bg-tertiary/20"></div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <UiCtaSection
      :title="t('home.finalCta.title')"
      :button-label="t('home.finalCta.button')"
    />
  </div>
</template>
