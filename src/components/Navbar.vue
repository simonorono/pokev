<template>
  <div class="w-full px-2 sm:px-6 lg:px-8 mb-5 bg-primary-800">
    <div class="flex justify-between h-16">
      <div class="flex-shrink-0 flex items-center">
        <img
          class="sm:hidden h-10 w-auto drop-shadow-logo"
          src="../assets/logo-small.png"
          alt="RDex logo"
        />
        <img
          class="hidden sm:block h-10 w-auto drop-shadow-logo"
          src="../assets/logo-wide.png"
          alt="RDex logo"
        />
      </div>

      <!-- Navbar Buttons -->
      <div class="flex items-center justify-between">
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
  name: 'Navbar',
})
</script>
