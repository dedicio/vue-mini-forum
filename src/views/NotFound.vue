<template>
  <section>
    <div class="hero is-medium is-dark has-text-centered">
      <div class="hero-body">
        <span class="is-size-1">
          <i class="fas fa-exclamation-circle"></i>
        </span>
        <h1 class="title">{{ message.title }}</h1>
        <h2 class="subtitle">{{ message.subtitle }}</h2>
        <p>
          <router-link to="/" class="button is-light" data-test="voltar">{{ message.button }}</router-link>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      message: {
        title: "Não encontrado!",
        subtitle: "O conteúdo que tentou acessar não existe",
        button: "Voltar para página inicial"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.subtitle {
  margin-bottom: 3em;
}
</style>