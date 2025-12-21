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
          WHAT WE DO
        </p>
        <h2
          class="text-4xl font-bold text-center md:text-left flex-1 relative line-before"
        >
          Market Entry Consulting for <br />
          SMES
        </h2>

        <p class="text-gray-500 text-center md:text-left mt-6 mb-10">
          NOBOCO bridges the gap between local ambition and global reality with
          <br />
          tailored strategies designed specifically for small and medium <br />
          enterprises ready to expand.
        </p>

        <div class="flex md:flex-row flex-wrap flex-col gap-6 justify-center">
          <ShadowBoxWithIcon
            description="Deep dive analysis into target demographics and regulatory landscapes to ensure product-market fit."
            title="Market Research & Fit"
            icon="tabler:world-search"
            classes="flex-1"
          />
          <ShadowBoxWithIcon
            description="Streamlined business entity setup, legal compliance, and operational infrastructure development."
            title="Incorporation & Ops"
            icon="tabler:building"
            classes="flex-1"
          />
          <ShadowBoxWithIcon
            description="Establishment of robust distribution channels and direct sales strategies to secure initial revenue."
            icon="tabler:chart-area-line"
            title="Sales & Distribution"
            classes="flex-1"
          />
          <ShadowBoxWithIcon
            description="Adapting brand messaging and marketing campaigns to resonate with local cultural nuances."
            title="Marketing & Localization"
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
            NOBOCO helps companies enter new markets through execution, local
            partners, and an Al-powered platform — from first analysis to first
            deal.
          </h3>

          <p class="text-center text-blue-500 mt-8 font-semibold">
            Bridgebase is the technology layer that standardizes and scales the
            entire process. →
          </p>
        </div>
      </div>
    </Container>
  </DottedGradientSection>
</template>
