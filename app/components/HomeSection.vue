<style scoped>
.gradient-text {
  background: linear-gradient(to right, #007bff, #00bfff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>

<template>
  <section>
    <Container>
      <div class="h-[calc(100vh-80px)]">
        <div class="flex items-center gap-4 h-full">
          <div class="flex flex-1 flex-col justify-center gap-6">
            <h2 class="text-5xl font-bold">
              Your Gateway to <br />
              <span class="gradient-text"> Global Markets </span>
            </h2>
            <p class="text-lg text-gray-500">
              Streamline your international expansion with NOBOCO's Al-driven
              market entry strategies and integrated CRM solutions. Connect with
              the right partners, faster.
            </p>

            <div class="w-full flex gap-2">
              <a
                href="#join-waitlist"
                class="rounded-lg text-white bg-blue-700 font-medium leading-5 text-sm px-4 py-2.5"
              >
                Join waitlist 👉
              </a>
              <a
                href="#partner-with-us"
                class="rounded-lg border font-medium leading-5 text-sm px-4 py-2.5"
              >
                Partner with us
              </a>
            </div>
          </div>

          <div class="flex-1" />
        </div>
      </div>
    </Container>

    <Divider />
  </section>
</template>
