<style scoped>
/* @see https://cssgradient.io/blog/css-gradient-text/ */
.gradient-text {
  background: linear-gradient(to right, #007bff, #00bfff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>

<template>
  <section class="relative">
    <Container>
      <div class="h-[calc(100vh-80px)] px-4 md:px-0">
        <div class="flex items-center gap-4 h-full px-4 py-8">
          <div class="flex flex-1 flex-col justify-center gap-6">
            <h2 class="text-5xl font-bold text-center md:text-left">
              {{ $t("home.title.part1") }} <br />
              <span class="gradient-text"> {{ $t("home.title.part2") }} </span>
            </h2>
            <p class="text-lg text-gray-500 text-center md:text-left">
              {{ $t("home.description") }}
            </p>

            <div class="w-full flex gap-2">
              <a
                href="#crm"
                class="rounded-lg text-white bg-blue-700 font-medium leading-5 text-sm px-4 py-2.5 flex-1 md:flex-none text-center"
              >
                {{ $t("home.joinWaitlistButton") }}
              </a>
              <a
                href="#partner-with-us"
                class="rounded-lg border font-medium leading-5 text-sm px-4 py-2.5 flex-1 md:flex-none text-center"
              >
                {{ $t("home.partnerWithUsButton") }}
              </a>
            </div>
          </div>

          <div class="hidden md:block flex-1" />
        </div>
      </div>
    </Container>
  </section>
</template>
