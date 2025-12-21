<script setup lang="ts">
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
</script>

<template>
  <header>
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
  </header>
</template>
