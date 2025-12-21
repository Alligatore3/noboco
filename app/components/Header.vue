<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

const NAVBAR_HEIGHT = 80;

const route = useRoute();
const router = useRouter();
const isSticky = ref(false);

const handleScroll = () => {
  isSticky.value = window.scrollY > NAVBAR_HEIGHT;
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

const links = computed(() => [
  { id: "mission", label: "Mission", isActive: route.hash === `#mission` },
  {
    id: "consulting",
    label: "Consulting",
    isActive: route.hash === `#consulting`,
  },
  { id: "crm", label: "CRM", isActive: route.hash === `#crm` },
]);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  // Check initial scroll position
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    class="transition-all duration-300 ease-in-out"
    :class="{ 'bg-white sticky top-0 z-50 shadow-sm': isSticky }"
  >
    <Container>
      <div class="px-4 py-6 flex align-center justify-between">
        <Logo />

        <nav>
          <ul class="flex h-full items-center justify-center gap-4">
            <li
              class="text-sm font-medium cursor-pointer"
              :class="{ 'font-semibold text-blue-700': link.isActive }"
              v-for="link in links"
              :key="link.id"
            >
              <a @click="scrollTo(link.id)">{{ link.label }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </Container>

    <Divider />
  </header>
</template>
