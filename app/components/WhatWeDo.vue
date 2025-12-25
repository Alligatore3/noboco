<style scoped>
.background-gradient {
  background: #f5f7fa;
  background: linear-gradient(
    90deg,
    rgba(245, 247, 250, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
}
</style>

<template>
  <DottedGradientSection id="consulting">
    <Container>
      <div class="px-4 py-8">
        <p class="text-blue-500 text-center md:text-left font-bold mb-2">
          {{ $t("whatWeDo.title").toUpperCase() }}
        </p>
        <h2
          class="text-4xl font-bold text-center md:text-left flex-1 relative line-before"
        >
          <span v-html="$t('whatWeDo.scope')"></span>
        </h2>

        <p
          v-html="$t('whatWeDo.description')"
          class="text-gray-500 text-center md:text-left mt-6 mb-10"
        />

        <div class="flex md:flex-row flex-wrap flex-col gap-6 justify-center">
          <ShadowBoxWithIcon
            :description="$t('whatWeDo.marketResearch.description')"
            :title="$t('whatWeDo.marketResearch.title')"
            icon="tabler:world-search"
            classes="flex-1"
          />
          <ShadowBoxWithIcon
            :description="$t('whatWeDo.operationalExecution.description')"
            :title="$t('whatWeDo.operationalExecution.title')"
            icon="tabler:building"
            classes="flex-1"
          />
          <ShadowBoxWithIcon
            :description="$t('whatWeDo.salesDistribution.description')"
            :title="$t('whatWeDo.salesDistribution.title')"
            icon="tabler:chart-area-line"
            classes="flex-1"
          />
          <ShadowBoxWithIcon
            :description="$t('whatWeDo.marketingLocalization.description')"
            :title="$t('whatWeDo.marketingLocalization.title')"
            icon="tabler:language"
            classes="flex-1"
          />
        </div>

        <div
          class="py-8 px-4 md:px-16 border border-gray-200 rounded-lg mt-20 background-gradient mx-auto max-w-5xl"
        >
          <h3
            class="text-2xl font-bold text-center md:text-left flex-1 relative line-before"
          >
            {{ $t("whatWeDo.helps") }}
          </h3>

          <p class="text-center text-blue-500 mt-8 font-semibold">
            {{ $t("whatWeDo.bridgebase") }}
          </p>
        </div>
      </div>
    </Container>
  </DottedGradientSection>
</template>
