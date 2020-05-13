<script>
export default {
  //
};
</script>

<template>
  <div class="wrapper has-background-dark">
    <RouterView />
  </div>
</template>

<style lang="scss">
@import "~bulma";

html,
body,
.wrapper {
  min-height: 100vh;
}
.wrapper {
  padding-bottom: 1em;
}
</style>
