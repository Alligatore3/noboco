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

        <div class="flex md:flex-row flex-col gap-4 justify-center">
          <ShadowBoxWithIcon
            description="Data-driven market fit analysis powered by advanced Al algorithms."
            icon="ph:user-circle-gear-bold"
            title="Al Fit Assessment"
          />
          <ShadowBoxWithIcon
            description="Navigate local languages and cultural nuances seamlessly."
            title="Language & Cultural Al Hub"
            icon="zondicons:translate"
          />
          <ShadowBoxWithIcon
            description="Create comprehensive market entry reports in seconds."
            icon="mingcute:document-2-fill"
            title="Automatic Report Generation"
          />
          <ShadowBoxWithIcon
            description="Centralize and manage your global partner network efficiently."
            icon="fluent:handshake-20-filled"
            title="Partner & Deal Management"
          />
          <ShadowBoxWithIcon
            description="A fully licensable platform adapted to your brand needs."
            icon="iconamoon:shield-yes"
            title="Licensable Platform"
          />
        </div>
      </div>
    </Container>
  </section>
</template>
