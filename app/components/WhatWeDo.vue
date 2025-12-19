<template>
  <DottedGradientSection>
    <Container>
      <div class="px-4 py-8">
        <h2
          class="text-4xl font-bold text-center md:text-left flex-1 relative line-before"
        >
          Market Entry Consulting for <br />
          SMES
        </h2>

        <p class="text-gray-500 text-center md:text-left mt-4 mb-8">
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
      </div>
    </Container>
  </DottedGradientSection>
</template>
