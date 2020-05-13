<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item is-size-4" data-test="voltar">RandomAware</router-link>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <RouterLink to="/" class="navbar-item" data-test="voltar">Home</RouterLink>
          </div>
        </div>
      </div>
    </nav>

    <main class="container">
      <RouterView />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Fórum"
    };
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  margin-bottom: 1em;
}
</style>
