<template>
  <div class="min-h-screen bg-background text-on-background font-body-md overflow-x-hidden">
    <LayoutAppNav />

    <main>
      <slot />
    </main>

    <LayoutAppFooter />
  </div>
</template>
