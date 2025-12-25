<template>
  <section id="crm" class="relative bg-gray-100">
    <Container>
      <div class="px-4 py-8">
        <h2
          v-html="$t('bridgeBase.title')"
          class="text-6xl font-bold text-center"
        />

        <p class="text-xl font-semibold text-center my-4">
          {{ $t("bridgeBase.description") }}
        </p>

        <p class="text-gray-500 text-center px-2 md:px-36">
          {{ $t("bridgeBase.description2") }}
        </p>

        <ShadowBox class="my-16">
          <Dashboard />
        </ShadowBox>

        <div class="flex md:flex-row flex-col gap-4 justify-center">
          <ShadowBoxWithIcon
            :description="$t('bridgeBase.features.fitAssessment.description')"
            icon="ph:user-circle-gear-bold"
            :title="$t('bridgeBase.features.fitAssessment.title')"
          />
          <ShadowBoxWithIcon
            :title="$t('bridgeBase.features.languageAndCulturalAlHub.title')"
            icon="zondicons:translate"
            :description="
              $t('bridgeBase.features.languageAndCulturalAlHub.description')
            "
          />
          <ShadowBoxWithIcon
            :title="$t('bridgeBase.features.automaticReportGeneration.title')"
            icon="mingcute:document-2-fill"
            :description="
              $t('bridgeBase.features.automaticReportGeneration.description')
            "
          />
          <ShadowBoxWithIcon
            :title="$t('bridgeBase.features.partnerAndDealManagement.title')"
            icon="fluent:handshake-20-filled"
            :description="
              $t('bridgeBase.features.partnerAndDealManagement.description')
            "
          />
          <ShadowBoxWithIcon
            :title="$t('bridgeBase.features.licensablePlatform.title')"
            icon="iconamoon:shield-yes"
            :description="
              $t('bridgeBase.features.licensablePlatform.description')
            "
          />
        </div>
      </div>
    </Container>
  </section>
</template>
