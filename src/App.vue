<template>
  <div id="app">
    <top-nav />
    <div class="container main">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";

export default {
  name: "Covid19IndiaApp",
  components: {
    TopNav,
    Footer
  }
};
</script>

<style lang="scss">
body {
  background-color: #ebf0f2;
}
.container.main {
  min-height: 90vh;
}
</style>
