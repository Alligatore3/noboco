<style scoped>
.line-before::before {
  @apply hidden md:block bg-blue-500 absolute -top-[10px] left-0 w-[50px] h-[4px] rounded;
  content: "";
}
</style>

<template>
  <section id="mission" class="relative bg-gray-100">
    <Container>
      <div class="px-4 py-8">
        <div class="flex flex-col md:flex-row gap-6 py-12">
          <h2
            class="text-4xl font-bold text-center md:text-left flex-1 relative line-before"
          >
            {{ $t("mission.title") }}
          </h2>

          <div class="flex flex-col gap-6 flex-[2]">
            <p
              class="text-2xl text-blue-500 font-semibold text-center md:text-left"
            >
              {{ $t("mission.scale") }}
            </p>
            <p class="text-gray-500 text-center md:text-left">
              {{ $t("mission.description") }}
            </p>
          </div>
        </div>

        <Divider />

        <div class="flex flex-col gap-2 my-12">
          <p class="text-xl font-semibold text-center md:text-left">
            {{ $t("mission.corePillars.title") }}
          </p>
          <p class="text-gray-500 text-center md:text-left">
            {{ $t("mission.corePillars.description") }}
          </p>
        </div>

        <div class="flex md:flex-row flex-col gap-6 justify-center">
          <ShadowBoxWithIcon
            :description="$t('mission.localExpertise.description')"
            :title="$t('mission.localExpertise.title')"
            icon="tabler:message-language"
          />
          <ShadowBoxWithIcon
            :description="$t('mission.operationalExecution.description')"
            :title="$t('mission.operationalExecution.title')"
            icon="iconoir:language"
          />
          <ShadowBoxWithIcon
            :description="$t('mission.intelligentCRM.description')"
            :title="$t('mission.intelligentCRM.title')"
            icon="streamline-ultimate:analytics-board-graph-line"
          />
        </div>
      </div>
    </Container>
  </section>
</template>
