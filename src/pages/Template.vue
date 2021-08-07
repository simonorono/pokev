<template>
  <div class="flex flex-col min-h-screen">
    <header>
      <Navbar />
    </header>

    <main class="flex-grow">
    </main>

    <footer>
    </footer>
  </div>
</template>

<script>
import { defineComponent } from "vue"
import Navbar from "../components/Navbar.vue"

export default defineComponent({
  name: "Template",
  components: { Navbar },
})
</script>
