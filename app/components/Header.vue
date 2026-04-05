<script setup lang="ts">
import {
  ref,
  computed,
  watch,
  onMounted,
  onUnmounted,
} from "vue";

const NAVBAR_HEIGHT = 80;

const route = useRoute();

const router = useRouter();

const isSticky = ref(false);

const mobileMenuOpen = ref(false);

//Fixed the hydration mismatch. The issue was that route.hash can differ between server and client during SSR.
const isClient = ref(false);

const handleScroll = () => {
  isSticky.value = window.scrollY > NAVBAR_HEIGHT;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

const scrollTo = async (id: string) => {
  const element = document.getElementById(id);

  if (!element) return;

  // Update URL hash using router.replace to keep route.hash reactive
  // Using replace instead of push to avoid adding history entries
  await router.replace({ hash: `#${id}` });

  // Perform smooth scroll after hash update
  element.scrollIntoView({ behavior: "smooth" });
};

const onMobileNavClick = async (id: string) => {
  await scrollTo(id);
  closeMobileMenu();
};

const links = computed(() => [
  {
    id: "mission",
    label: $t("header.mission"),
    isActive: isClient.value && route.hash === `#mission`,
  },
  {
    id: "consulting",
    label: $t("header.consulting"),
    isActive: isClient.value && route.hash === `#consulting`,
  },
  {
    id: "crm",
    label: $t("header.crm"),
    isActive: isClient.value && route.hash === `#crm`,
  },
]);

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
  () => {
    closeMobileMenu();
  },
);

onMounted(() => {
  isClient.value = true;
  window.addEventListener("scroll", handleScroll);
  // Check initial scroll position
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("keydown", onEscape);
  if (import.meta.client) document.body.style.overflow = "";
});
</script>

<template>
  <header
    class="relative z-50 transition-all duration-300 ease-in-out"
    :class="{ 'bg-white sticky top-0 shadow-sm': isSticky }"
  >
    <Container>
      <div class="flex items-center justify-between gap-4 px-4 py-6">
        <Logo />

        <nav
          class="hidden md:block"
          :aria-label="$t('header.mobileNavLabel')"
        >
          <ul class="flex h-full items-center justify-center gap-6">
            <li
              class="cursor-pointer text-sm font-medium"
              :class="{ 'font-semibold text-blue-700': link.isActive }"
              v-for="link in links"
              :key="link.id"
            >
              <a @click="scrollTo(link.id)">{{ link.label }}</a>
            </li>
          </ul>
        </nav>

        <div class="hidden md:block">
          <LanguageSwitch />
        </div>

        <button
          type="button"
          class="-mr-2 rounded-lg p-2 text-zinc-900 hover:bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 md:hidden"
          :aria-expanded="mobileMenuOpen"
          aria-controls="mobile-nav-panel"
          :aria-label="mobileMenuOpen ? $t('header.closeMenu') : $t('header.openMenu')"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <svg
            v-if="!mobileMenuOpen"
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </Container>

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
        class="fixed inset-0 z-40 bg-zinc-900/40 md:hidden"
        aria-hidden="true"
        @click="closeMobileMenu"
      />
    </Transition>

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
        class="absolute left-0 right-0 top-full z-50 border-t border-zinc-200 bg-white shadow-lg md:hidden"
      >
        <nav
          class="px-4 pb-8 pt-2"
          :aria-label="$t('header.mobileNavLabel')"
        >
          <ul class="flex flex-col gap-1">
            <li v-for="link in links" :key="link.id">
              <a
                class="block min-h-[44px] w-full rounded-lg px-4 py-3 text-base font-medium text-zinc-900 hover:bg-zinc-50 active:bg-zinc-100"
                :class="{ 'bg-blue-50 font-semibold text-blue-700': link.isActive }"
                href="#"
                @click.prevent="onMobileNavClick(link.id)"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
          <div
            class="mt-4 border-t border-zinc-100 px-4 pt-6"
          >
            <LanguageSwitch
              class="block w-full min-h-[44px] rounded-lg border border-zinc-200 bg-white px-3 py-2 text-base font-medium"
            />
          </div>
        </nav>
      </div>
    </Transition>

    <Divider />
  </header>
</template>
