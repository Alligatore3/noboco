<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: () => t("bridgebase.seo.title"),
  ogTitle: () => t("bridgebase.seo.title"),
  description: () => t("bridgebase.seo.description"),
  ogDescription: () => t("bridgebase.seo.description"),
});

const smallModules = computed(() => [
  { icon: "travel_explore", title: t("bridgebase.modules.research.title"), description: t("bridgebase.modules.research.description") },
  { icon: "edit_note", title: t("bridgebase.modules.plan.title"), description: t("bridgebase.modules.plan.description") },
  { icon: "description", title: t("bridgebase.modules.proposal.title"), description: t("bridgebase.modules.proposal.description") },
  { icon: "work", title: t("bridgebase.modules.project.title"), description: t("bridgebase.modules.project.description") },
  { icon: "dashboard", title: t("bridgebase.modules.kpi.title"), description: t("bridgebase.modules.kpi.description") },
  { icon: "view_kanban", title: t("bridgebase.modules.gantt.title"), description: t("bridgebase.modules.gantt.description") },
  { icon: "folder_shared", title: t("bridgebase.modules.documents.title"), description: t("bridgebase.modules.documents.description") },
]);

const tiers = computed(() => [
  { icon: "apartment", filled: true, title: t("bridgebase.architecture.hq.title"), description: t("bridgebase.architecture.hq.description") },
  { icon: "handshake", filled: false, title: t("bridgebase.architecture.partners.title"), description: t("bridgebase.architecture.partners.description") },
  { icon: "storefront", filled: false, title: t("bridgebase.architecture.sme.title"), description: t("bridgebase.architecture.sme.description") },
]);
</script>

<template>
  <div>
    <!-- Hero -->
    <header
      class="pt-40 pb-32 px-margin-mobile md:px-margin-desktop relative"
      style="background: radial-gradient(circle at center, rgba(189, 198, 224, 0.03) 0%, rgba(19, 19, 21, 1) 100%)"
    >
      <div class="max-w-container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-8">
          <div class="inline-flex items-center space-x-2 px-3 py-1 rounded border border-tertiary/30 bg-tertiary/5">
            <span class="material-symbols-outlined text-tertiary text-sm">account_tree</span>
            <span class="text-tertiary font-label-sm text-label-sm">{{ t("bridgebase.hero.eyebrow") }}</span>
          </div>
          <h1 class="font-display-lg text-display-lg max-w-xl" v-html="t('bridgebase.hero.title')" />
          <p class="font-body-lg text-body-lg text-on-surface-variant max-w-lg">{{ t("bridgebase.hero.description") }}</p>
        </div>
        <div class="relative group">
          <div class="absolute -inset-4 bg-tertiary/10 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
          <div class="relative glass-card rounded-xl overflow-hidden shadow-2xl gold-glow p-8">
            <div class="flex items-center justify-between mb-8 border-b border-outline-variant/30 pb-4">
              <div class="flex items-center gap-2">
                <span class="text-tertiary material-symbols-outlined">monitoring</span>
                <span class="font-label-md text-label-md">{{ t("bridgebase.hero.mockTitle") }}</span>
              </div>
              <div class="flex gap-2">
                <div class="w-3 h-3 rounded-full bg-error/40"></div>
                <div class="w-3 h-3 rounded-full bg-tertiary/40"></div>
                <div class="w-3 h-3 rounded-full bg-primary/40"></div>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-3 mb-4">
              <div class="bg-primary-container p-4 border border-outline-variant">
                <span class="text-tertiary font-label-sm text-label-sm block mb-1">ROI</span>
                <div class="text-headline-md font-headline-md">3.2x</div>
              </div>
              <div class="bg-primary-container p-4 border border-outline-variant">
                <span class="text-tertiary font-label-sm text-label-sm block mb-1">MARKETS</span>
                <div class="text-headline-md font-headline-md">28</div>
              </div>
              <div class="bg-primary-container p-4 border border-outline-variant">
                <span class="text-tertiary font-label-sm text-label-sm block mb-1">PARTNERS</span>
                <div class="text-headline-md font-headline-md">500+</div>
              </div>
            </div>
            <div class="bg-primary-container p-4 border border-outline-variant">
              <span class="text-tertiary font-label-sm text-label-sm block mb-2">EXPANSION VELOCITY</span>
              <div class="h-20 flex items-end gap-1.5">
                <div class="flex-1 bg-tertiary/20 h-[30%]"></div>
                <div class="flex-1 bg-tertiary/40 h-[55%]"></div>
                <div class="flex-1 bg-tertiary/50 h-[45%]"></div>
                <div class="flex-1 bg-tertiary/70 h-[70%]"></div>
                <div class="flex-1 bg-tertiary/80 h-[85%]"></div>
                <div class="flex-1 bg-tertiary h-[95%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Positioning -->
    <section class="py-32 bg-surface-container-lowest border-y border-outline-variant/30">
      <div class="max-w-container mx-auto px-margin-mobile md:px-margin-desktop text-center">
        <h2 class="font-headline-lg text-headline-lg mb-6">{{ t("bridgebase.positioning.line1") }}</h2>
        <h2 class="font-headline-lg text-headline-lg text-tertiary">{{ t("bridgebase.positioning.line2") }}</h2>
        <p class="mt-8 font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">{{ t("bridgebase.positioning.description") }}</p>
      </div>
    </section>

    <!-- Capabilities Bento -->
    <section class="py-32 px-margin-mobile md:px-margin-desktop">
      <div class="max-w-container mx-auto">
        <div class="mb-16">
          <h3 class="font-headline-md text-headline-md mb-2">{{ t("bridgebase.modules.title") }}</h3>
          <p class="text-on-surface-variant">{{ t("bridgebase.modules.subtitle") }}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <!-- AI Fit Check (wide) -->
          <div class="lg:col-span-2 glass-card p-8 rounded-xl flex flex-col justify-between group hover:border-tertiary transition-colors">
            <div>
              <span class="material-symbols-outlined text-tertiary mb-4">analytics</span>
              <h4 class="font-headline-md text-headline-md mb-4">{{ t("bridgebase.modules.fitCheck.title") }}</h4>
              <p class="text-on-surface-variant font-body-md text-body-md">{{ t("bridgebase.modules.fitCheck.description") }}</p>
            </div>
            <div class="mt-8 flex justify-end">
              <span class="text-tertiary font-label-md text-label-md group-hover:translate-x-1 transition-transform">{{ t("bridgebase.modules.fitCheck.link") }}</span>
            </div>
          </div>

          <!-- First two small -->
          <div
            v-for="mod in smallModules.slice(0, 2)"
            :key="mod.title"
            class="glass-card p-8 rounded-xl flex flex-col group hover:border-tertiary transition-colors"
          >
            <span class="material-symbols-outlined text-tertiary mb-4">{{ mod.icon }}</span>
            <h4 class="font-label-md text-label-md font-bold mb-2">{{ mod.title }}</h4>
            <p class="text-on-surface-variant text-sm">{{ mod.description }}</p>
          </div>

          <!-- Proposal Generator small -->
          <div class="glass-card p-8 rounded-xl flex flex-col group hover:border-tertiary transition-colors">
            <span class="material-symbols-outlined text-tertiary mb-4">{{ smallModules[2].icon }}</span>
            <h4 class="font-label-md text-label-md font-bold mb-2">{{ smallModules[2].title }}</h4>
            <p class="text-on-surface-variant text-sm">{{ smallModules[2].description }}</p>
          </div>

          <!-- GTM Planner (wide, feature) -->
          <div class="lg:col-span-2 glass-card p-8 rounded-xl flex flex-col group hover:border-tertiary transition-colors bg-gradient-to-br from-primary-container to-surface-container">
            <div class="flex items-start justify-between">
              <div>
                <span class="material-symbols-outlined text-tertiary mb-4">map</span>
                <h4 class="font-headline-md text-headline-md mb-4">{{ t("bridgebase.modules.gtm.title") }}</h4>
                <p class="text-on-surface-variant font-body-md text-body-md">{{ t("bridgebase.modules.gtm.description") }}</p>
              </div>
              <div class="w-32 h-32 opacity-20 hidden sm:block">
                <span class="material-symbols-outlined text-[120px]">insights</span>
              </div>
            </div>
          </div>

          <!-- Remaining small (project, kpi, gantt, documents) -->
          <div
            v-for="mod in smallModules.slice(3)"
            :key="mod.title"
            class="glass-card p-8 rounded-xl flex flex-col group hover:border-tertiary transition-colors"
          >
            <span class="material-symbols-outlined text-tertiary mb-4">{{ mod.icon }}</span>
            <h4 class="font-label-md text-label-md font-bold mb-2">{{ mod.title }}</h4>
            <p class="text-on-surface-variant text-sm">{{ mod.description }}</p>
          </div>

          <!-- Partner Database (wide) -->
          <div class="lg:col-span-2 glass-card p-8 rounded-xl flex flex-col group hover:border-tertiary transition-colors">
            <span class="material-symbols-outlined text-tertiary mb-4">groups</span>
            <h4 class="font-headline-md text-headline-md mb-4">{{ t("bridgebase.modules.database.title") }}</h4>
            <p class="text-on-surface-variant font-body-md text-body-md">{{ t("bridgebase.modules.database.description") }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Platform Architecture -->
    <section class="py-32 bg-surface-container-low overflow-hidden">
      <div class="max-w-container mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <h3 class="font-headline-lg text-headline-lg mb-8" v-html="t('bridgebase.architecture.title')" />
            <div class="space-y-12">
              <div v-for="tier in tiers" :key="tier.title" class="flex space-x-6">
                <div
                  class="w-12 h-12 rounded flex items-center justify-center flex-shrink-0"
                  :class="tier.filled ? 'bg-tertiary' : 'border border-outline'"
                >
                  <span class="material-symbols-outlined" :class="tier.filled ? 'text-on-tertiary' : 'text-tertiary'">{{ tier.icon }}</span>
                </div>
                <div>
                  <h5 class="font-label-md text-label-md font-bold mb-2">{{ tier.title }}</h5>
                  <p class="text-on-surface-variant text-sm">{{ tier.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Architecture diagram -->
          <div class="relative">
            <div class="p-8 border border-outline-variant rounded-xl bg-background/50 relative z-10">
              <div class="flex flex-col items-center space-y-12">
                <div class="w-32 py-4 bg-tertiary text-on-tertiary text-center rounded shadow-lg font-bold text-sm">{{ t("bridgebase.architecture.hqTerminal") }}</div>
                <div class="w-px h-12 bg-outline-variant relative">
                  <div class="absolute -bottom-2 -left-1 w-2 h-2 rounded-full bg-tertiary"></div>
                </div>
                <div class="flex flex-wrap justify-center gap-4 md:gap-8">
                  <div class="w-28 py-3 border border-outline text-center rounded text-xs">UK</div>
                  <div class="w-28 py-3 border border-tertiary text-center rounded text-xs bg-tertiary/10">US</div>
                  <div class="w-28 py-3 border border-outline text-center rounded text-xs">APAC</div>
                </div>
                <div class="flex space-x-4">
                  <div class="grid grid-cols-2 gap-2">
                    <div class="w-12 h-8 bg-surface-container rounded-sm border border-outline-variant"></div>
                    <div class="w-12 h-8 bg-surface-container rounded-sm border border-outline-variant"></div>
                  </div>
                  <div class="grid grid-cols-3 gap-2">
                    <div class="w-12 h-8 bg-tertiary/20 rounded-sm border border-tertiary"></div>
                    <div class="w-12 h-8 bg-tertiary/20 rounded-sm border border-tertiary"></div>
                    <div class="w-12 h-8 bg-tertiary/20 rounded-sm border border-tertiary"></div>
                  </div>
                  <div class="grid grid-cols-2 gap-2">
                    <div class="w-12 h-8 bg-surface-container rounded-sm border border-outline-variant"></div>
                    <div class="w-12 h-8 bg-surface-container rounded-sm border border-outline-variant"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
