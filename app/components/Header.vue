<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
const NAVBAR_HEIGHT = 80;

const isSticky = ref(false);

const handleScroll = () => {
  isSticky.value = window.scrollY > NAVBAR_HEIGHT;
};

const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const links = [
  { id: "consulting", label: "Consulting" },
  { id: "mission", label: "Mission" },
  { id: "crm", label: "CRM" },
];

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
