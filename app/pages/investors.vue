<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

useSeoMeta({
  title: () => t("investors.seo.title"),
  ogTitle: () => t("investors.seo.title"),
  description: () => t("investors.seo.description"),
  ogDescription: () => t("investors.seo.description"),
});

const thesisPoints = computed(() => [
  t("investors.thesis.point1"),
  t("investors.thesis.point2"),
  t("investors.thesis.point3"),
]);

const advantages = computed(() => [
  {
    value: t("investors.advantage.stack.value"),
    label: t("investors.advantage.stack.label"),
    description: t("investors.advantage.stack.description"),
  },
  {
    value: t("investors.advantage.nbp.value"),
    label: t("investors.advantage.nbp.label"),
    description: t("investors.advantage.nbp.description"),
  },
  {
    value: t("investors.advantage.data.value"),
    label: t("investors.advantage.data.label"),
    description: t("investors.advantage.data.description"),
  },
]);

const tractionStats = computed(() => [
  { value: "142+", label: t("investors.traction.expansions") },
  { value: "28", label: t("investors.traction.countries") },
  { value: "500+", label: t("investors.traction.partners") },
  { value: "3.2x", label: t("investors.traction.growth") },
]);

const milestones = computed(() => [
  {
    active: true,
    title: t("investors.milestones.m1.title"),
    description: t("investors.milestones.m1.description"),
  },
  {
    active: false,
    title: t("investors.milestones.m2.title"),
    description: t("investors.milestones.m2.description"),
  },
  {
    active: false,
    title: t("investors.milestones.m3.title"),
    description: t("investors.milestones.m3.description"),
  },
]);
</script>

<template>
  <div>
    <!-- Hero -->
    <section
      class="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-margin-mobile md:px-margin-desktop overflow-hidden pt-20"
      style="
        background: radial-gradient(
          circle at center,
          rgba(189, 198, 224, 0.03) 0%,
          rgba(19, 19, 21, 1) 100%
        );
      "
    >
      <div class="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-outline/20 rounded-full animate-pulse"
        ></div>
      </div>
      <div class="relative z-10 max-w-4xl">
        <span
          class="font-label-md text-label-md text-tertiary tracking-[0.3em] mb-6 block"
          >{{ t("investors.hero.eyebrow") }}</span
        >
        <h1
          class="font-display-lg text-display-lg mb-8 leading-tight"
          v-html="t('investors.hero.title')"
        />
        <p
          class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12"
        >
          {{ t("investors.hero.description") }}
        </p>
        <div class="flex flex-col md:flex-row gap-gutter justify-center">
          <NuxtLink
            :to="localePath('/contact')"
            class="bg-tertiary text-on-tertiary px-10 py-4 font-label-md text-label-md hover:px-12 transition-all"
            >{{ t("investors.hero.requestDeck") }}</NuxtLink
          >
        </div>
      </div>
    </section>

    <!-- Investment Thesis -->
    <section
      class="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest"
    >
      <div class="max-w-container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <span
              class="font-label-md text-label-md text-tertiary mb-4 block"
              >{{ t("investors.thesis.eyebrow") }}</span
            >
            <h2 class="font-headline-lg text-headline-lg mb-8">
              {{ t("investors.thesis.title") }}
            </h2>
            <p class="text-on-surface-variant font-body-lg mb-8">
              {{ t("investors.thesis.description") }}
            </p>
            <div class="space-y-6">
              <div
                v-for="point in thesisPoints"
                :key="point"
                class="flex items-center gap-4"
              >
                <span class="material-symbols-outlined text-tertiary"
                  >check_circle</span
                >
                <p class="text-on-surface font-body-md font-semibold">
                  {{ point }}
                </p>
              </div>
            </div>
          </div>
          <div
            class="glass-card p-12 flex flex-col justify-center border-l-4 border-l-tertiary"
          >
            <div class="space-y-12">
              <div>
                <h3
                  class="text-on-surface font-headline-md text-headline-md mb-2"
                >
                  {{ t("investors.thesis.friction.title") }}
                </h3>
                <p class="text-on-surface-variant">
                  {{ t("investors.thesis.friction.description") }}
                </p>
              </div>
              <div class="w-full h-px bg-outline-variant/30"></div>
              <div>
                <h3
                  class="text-tertiary font-headline-md text-headline-md mb-2"
                >
                  {{ t("investors.thesis.catalyst.title") }}
                </h3>
                <p class="text-on-surface-variant">
                  {{ t("investors.thesis.catalyst.description") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Strategic Advantage -->
    <section class="py-24 px-margin-mobile md:px-margin-desktop">
      <div class="max-w-container mx-auto">
        <div class="text-center mb-16">
          <h2 class="font-headline-lg text-headline-lg mb-4">
            {{ t("investors.advantage.title") }}
          </h2>
          <p class="text-on-surface-variant max-w-xl mx-auto">
            {{ t("investors.advantage.description") }}
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="adv in advantages"
            :key="adv.label"
            class="p-10 border border-outline-variant bg-surface-container-high group hover:border-tertiary transition-all"
          >
            <div class="font-display-lg text-tertiary mb-4 text-4xl">
              {{ adv.value }}
            </div>
            <h4 class="font-label-md text-label-md tracking-widest mb-4">
              {{ adv.label }}
            </h4>
            <p class="text-on-surface-variant text-sm">{{ adv.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Traction & Milestones -->
    <section
      class="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low border-y border-outline-variant/30"
    >
      <div class="max-w-container mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-12 text-center mb-24">
          <div v-for="stat in tractionStats" :key="stat.label">
            <div class="font-display-lg text-display-lg text-tertiary mb-2">
              {{ stat.value }}
            </div>
            <div class="font-label-md text-label-md text-on-surface-variant">
              {{ stat.label }}
            </div>
          </div>
        </div>
        <div class="max-w-3xl mx-auto">
          <h3 class="font-headline-md text-headline-md text-center mb-12">
            {{ t("investors.milestones.title") }}
          </h3>
          <div class="space-y-8 relative">
            <div
              class="absolute left-4 top-0 bottom-0 w-px bg-outline-variant"
            ></div>
            <div v-for="m in milestones" :key="m.title" class="relative pl-12">
              <div
                class="absolute left-3 w-3 h-3 rounded-full -translate-x-1/2 mt-2"
                :class="m.active ? 'bg-tertiary' : 'bg-outline'"
              ></div>
              <h4 class="font-bold text-lg">{{ m.title }}</h4>
              <p class="text-on-surface-variant">{{ m.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final Vision -->
    <section
      class="py-32 px-margin-mobile md:px-margin-desktop bg-background relative overflow-hidden border-t border-outline-variant/30"
    >
      <div class="absolute inset-0 opacity-5">
        <div class="grid grid-cols-12 h-full w-full">
          <div
            v-for="n in 12"
            :key="n"
            class="border-r border-outline-variant h-full"
          ></div>
        </div>
      </div>
      <div class="max-w-container mx-auto text-center relative z-10">
        <span
          class="font-label-md text-label-md text-tertiary tracking-[0.3em] mb-8 block"
          >{{ t("investors.vision.eyebrow") }}</span
        >
        <h2
          class="font-display-lg text-4xl md:text-6xl leading-tight mb-12"
          v-html="t('investors.vision.title')"
        />
        <NuxtLink
          :to="localePath('/contact')"
          class="inline-block bg-tertiary text-on-tertiary px-12 py-5 font-label-md text-label-md text-lg hover:px-16 transition-all duration-500"
          >{{ t("investors.vision.cta") }}</NuxtLink
        >
      </div>
    </section>
  </div>
</template>
