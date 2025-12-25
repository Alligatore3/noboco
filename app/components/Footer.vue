<template>
  <footer class="mb-12">
    <Container>
      <div class="px-4 py-6">
        <div
          class="flex flex-col md:flex-row items-center gap-2 justify-between"
        >
          <Logo />

          <nav>
            <ul class="flex items-center gap-4 mt-4 md:mt-0">
              <li>
                <a href="#" class="text-sm text-gray-500">{{
                  $t("footer.privacyPolicy")
                }}</a>
              </li>
              <li>
                <a href="#" class="text-sm text-gray-500">{{
                  $t("footer.termsOfService")
                }}</a>
              </li>
              <li>
                <a href="#" class="text-sm text-gray-500">{{
                  $t("footer.contactUs")
                }}</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Divider />
      <p class="py-4 text-sm text-center text-gray-500">
        {{ $t("footer.copyright") }}
      </p>
    </Container>
  </footer>
</template>
