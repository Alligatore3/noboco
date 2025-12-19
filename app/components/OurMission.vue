<style scoped>
.line-before::before {
  @apply hidden md:block bg-blue-500 absolute -top-[10px] left-0 w-[50px] h-[4px] rounded;
  content: "";
}
</style>

<template>
  <section class="relative bg-gray-100">
    <Container>
      <div class="px-4 py-8">
        <div class="flex flex-col md:flex-row gap-6 py-12">
          <h2
            class="text-4xl font-bold text-center md:text-left flex-1 relative line-before"
          >
            Our Mission
          </h2>

          <div class="flex flex-col gap-6 flex-[2]">
            <p
              class="text-2xl text-blue-500 font-semibold text-center md:text-left"
            >
              Standardize and scale global market entry.
            </p>
            <p class="text-gray-500 text-center md:text-left">
              We believe international expansion should not depend on luck,
              personal networks, or ad-hoc consulting. NOBOCO makes global
              growth predictable, operational, and scalable — for companies and
              partners alike.
            </p>
          </div>
        </div>

        <Divider />

        <div class="flex flex-col gap-2 my-12">
          <p class="text-xl font-semibold text-center md:text-left">
            Core pillars
          </p>
          <p class="text-gray-500 text-center md:text-left">
            How we make it happen:
          </p>
        </div>

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
