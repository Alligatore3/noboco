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
  <section id="explore-markets">
    <Container>
      <div
        class="py-8 px-4 md:px-16 border border-gray-200 rounded-lg my-20 background-gradient mx-auto max-w-5xl"
      >
        <h3
          class="text-2xl font-bold text-center md:text-left flex-1 relative line-before"
        >
          {{ $t("exploreMarkets.title") }}
        </h3>

        <div
          class="flex md:flex-row flex-col gap-6 justify-center mt-8 items-center"
        >
          <p
            class="text-gray-500 text-center md:text-left"
            v-html="$t('exploreMarkets.description')"
          />

          <div style="flex-shrink: 0" class="md:w-fit w-full">
            <a
              href="https://scented-dinner-413.notion.site/315212cc658e80bc903ada9ae2665856?v=315212cc658e80cbaf98000c77cfbda0"
              class="block rounded-lg text-white bg-blue-700 font-medium leading-5 text-sm px-4 py-2.5 text-center"
              target="_blank"
            >
              {{ $t("exploreMarkets.serviceMenu") }}
            </a>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
