<template>
  <section id="crm" class="relative bg-gray-100">
    <Container>
      <div class="px-4 py-8">
        <h2 class="text-6xl font-bold text-center">
          Bridgebase - The Market Entry <br />
          CRM
        </h2>

        <p class="text-xl font-semibold text-center my-4">
          Powered by Al. Built for global expansion.
        </p>

        <p class="text-gray-500 text-center px-2 md:px-36">
          Bridgebase centralizes all your market-entry activities, replacing
          fragmented spreadsheets with a unified intelligent platform designed
          for growth.
        </p>

        <ShadowBox class="my-16">
          <Dashboard />
        </ShadowBox>

        <div class="flex md:flex-row flex-col gap-6 justify-center">
          <ShadowBoxWithIcon
            description="Leveraging on-the-ground knowledge to navigate new markets effectively."
            icon="tabler:message-language"
            title="Local Expertise"
          />
          <ShadowBoxWithIcon
            description="Streamlined processes to ensure efficient, compliant, and rapid market entry."
            title="Operational Execution"
            icon="iconoir:language"
          />
          <ShadowBoxWithIcon
            description="Data-driven insights to make global expansion predictable and measurable."
            icon="streamline-ultimate:analytics-board-graph-line"
            title="Intelligent CRM"
          />
        </div>
      </div>
    </Container>
  </section>
</template>
