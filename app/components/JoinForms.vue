<template>
  <section class="relative py-8">
    <!-- Ref: https://bg.ibelick.com/ -->
    <div
      class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"
    />
    <div
      class="absolute inset-0 z-[-1] h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
    />
    <Container>
      <div
        class="z-10 flex items-center flex-col lg:flex-row w-full justify-evenly"
      >
        <SMEWaitListForm />
        <NobocoPartnersForm />
      </div>
    </Container>
  </section>
</template>
