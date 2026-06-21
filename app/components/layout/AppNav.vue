<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from "vue";

const { t } = useI18n();
const localePath = useLocalePath();
const route = useRoute();

const isScrolled = ref(false);
const mobileMenuOpen = ref(false);

const links = computed(() => [
  { to: "/", label: t("nav.home") },
  { to: "/consulting", label: t("nav.consulting") },
  { to: "/bridgebase", label: t("nav.bridgebase") },
  { to: "/partners", label: t("nav.partners") },
  { to: "/investors", label: t("nav.investors") },
]);

const isActive = (to: string) => {
  const target = localePath(to);
  if (to === "/") return route.path === target;
  return route.path === target || route.path.startsWith(`${target}/`);
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

const onEscape = (e: KeyboardEvent) => {
  if (e.key === "Escape") closeMobileMenu();
};

watch(mobileMenuOpen, (open) => {
  if (!import.meta.client) return;
  document.body.style.overflow = open ? "hidden" : "";
  if (open) window.addEventListener("keydown", onEscape);
  else window.removeEventListener("keydown", onEscape);
});

watch(
  () => route.fullPath,
  () => closeMobileMenu(),
);

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
});

onUnmounted(() => {
  if (!import.meta.client) return;
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("keydown", onEscape);
  document.body.style.overflow = "";
});
</script>

<template>
  <nav
    class="fixed top-0 w-full z-50 backdrop-blur-md border-b border-outline-variant/30 transition-colors duration-300"
    :class="isScrolled ? 'bg-background/95' : 'bg-background/80'"
  >
    <div
      class="max-w-container mx-auto px-margin-mobile md:px-margin-desktop h-20 flex justify-between items-center"
    >
      <NuxtLink
        :to="localePath('/')"
        class="font-headline-md text-headline-md font-bold tracking-tight text-on-background"
      >
        NOBOCO Inc.
      </NuxtLink>

      <!-- Desktop navigation -->
      <div class="hidden md:flex items-center gap-8">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="localePath(link.to)"
          class="font-label-md text-label-md transition-colors pb-1"
          :class="
            isActive(link.to)
              ? 'text-tertiary border-b-2 border-tertiary'
              : 'text-on-surface-variant hover:text-on-surface'
          "
        >
          {{ link.label }}
        </NuxtLink>
      </div>

      <div class="hidden md:flex items-center gap-6">
        <LanguageSwitch />
        <NuxtLink
          :to="localePath('/contact')"
          class="bg-tertiary text-on-tertiary px-6 py-2.5 font-label-md text-label-md font-bold hover:scale-105 transition-transform"
        >
          {{ t("nav.contact") }}
        </NuxtLink>
      </div>

      <!-- Mobile hamburger -->
      <button
        type="button"
        class="md:hidden -mr-2 rounded-lg p-2 text-on-surface hover:bg-surface-container focus:outline-none focus-visible:ring-2 focus-visible:ring-tertiary"
        :aria-expanded="mobileMenuOpen"
        aria-controls="mobile-nav-panel"
        :aria-label="mobileMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <span class="material-symbols-outlined">
          {{ mobileMenuOpen ? "close" : "menu" }}
        </span>
      </button>
    </div>

    <!-- Mobile overlay -->
    <Transition
      enter-active-class="transition-opacity duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="mobileMenuOpen"
        class="fixed inset-0 top-20 z-40 bg-background/60 md:hidden"
        aria-hidden="true"
        @click="closeMobileMenu"
      />
    </Transition>

    <!-- Mobile panel -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="-translate-y-2 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-2 opacity-0"
    >
      <div
        v-if="mobileMenuOpen"
        id="mobile-nav-panel"
        class="absolute left-0 right-0 top-full z-50 border-t border-outline-variant/30 bg-background shadow-lg md:hidden"
      >
        <nav class="px-margin-mobile pb-8 pt-2" :aria-label="t('nav.menuLabel')">
          <ul class="flex flex-col">
            <li v-for="link in links" :key="link.to">
              <NuxtLink
                :to="localePath(link.to)"
                class="block min-h-[44px] w-full px-2 py-3 font-label-md text-base"
                :class="
                  isActive(link.to)
                    ? 'text-tertiary'
                    : 'text-on-surface-variant hover:text-on-surface'
                "
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
          <div class="mt-4 flex flex-col gap-4 border-t border-outline-variant/30 pt-6">
            <NuxtLink
              :to="localePath('/contact')"
              class="bg-tertiary text-on-tertiary text-center px-6 py-3 font-label-md text-label-md font-bold"
            >
              {{ t("nav.contact") }}
            </NuxtLink>
            <LanguageSwitch />
          </div>
        </nav>
      </div>
    </Transition>
  </nav>
</template>
