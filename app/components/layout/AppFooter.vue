<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const navLinks = [
  { to: "/consulting", key: "nav.consulting" },
  { to: "/bridgebase", key: "nav.bridgebase" },
  { to: "/partners", key: "nav.partners" },
  { to: "/investors", key: "nav.investors" },
  { to: "/contact", key: "nav.contact" },
];
</script>

<template>
  <footer
    class="bg-surface-container-lowest border-t border-outline-variant/30"
  >
    <div
      class="max-w-container mx-auto px-margin-mobile md:px-margin-desktop py-16"
    >
      <div
        class="flex flex-col gap-10 md:flex-row md:items-start md:justify-between"
      >
        <div class="space-y-4 max-w-sm">
          <NuxtLink
            :to="localePath('/')"
            class="font-headline-md text-headline-md font-bold tracking-tight text-on-background"
          >
            NOBOCO Inc.
          </NuxtLink>
        </div>

        <nav
          class="flex flex-wrap gap-x-8 gap-y-3"
          :aria-label="t('footer.navLabel')"
        >
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="localePath(link.to)"
            class="font-label-md text-label-md text-on-surface-variant hover:text-tertiary transition-colors"
          >
            {{ t(link.key) }}
          </NuxtLink>
        </nav>
      </div>

      <div
        class="mt-12 pt-8 border-t border-outline-variant/30 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
      >
        <p class="text-on-surface-variant text-label-md">
          {{ t("footer.copyright") }}
        </p>
        <div class="flex flex-wrap gap-x-6 gap-y-2">
          <a
            href="/docs/NOBOCO_Privacy_Policy.pdf"
            class="text-on-surface-variant hover:text-on-surface text-label-md transition-colors"
          >
            {{ t("footer.privacyPolicy") }}
          </a>
          <a
            href="/docs/NOBOCO_Terms_of_Service.pdf"
            class="text-on-surface-variant hover:text-on-surface text-label-md transition-colors"
          >
            {{ t("footer.termsOfService") }}
          </a>
          <NuxtLink
            :to="localePath('/contact')"
            class="text-on-surface-variant hover:text-on-surface text-label-md transition-colors"
          >
            {{ t("footer.contactUs") }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
