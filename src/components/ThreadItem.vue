<template>
  <div class="box has-background-light" data-test="thread">
    <div class="content">
      <p class="title">
        <router-link :to="threadUrl" data-test="link">{{ thread.title }}</router-link>
      </p>
      <p class="subtitle has-text-grey">
        {{ thread.body | summary }}
        <small>
          <router-link :to="threadUrl" data-test="link">Continuar lendo &raquo;</router-link>
        </small>
      </p>
      <div class="media">
        <figure class="media-left">
          <p class="image is-48x48">
            <img class="is-rounded" src="https://bulma.io/images/placeholders/48x48.png" />
          </p>
        </figure>
        <div class="media-content">
          <p>
            <strong>{{ thread.user.name }}</strong>
            <br />
            <span class="has-text-grey-light">
              <i class="fas fa-calendar-alt"></i>
              {{ thread.created_at | formatedDate }}
            </span>
          </p>
        </div>
        <div class="media-right">
          <router-link :to="threadUrl" data-test="link">
            <i class="fas fa-comment-dots"></i>
            {{ thread.total_replies }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    thread: Object
  },
  filters: {
    summary(text) {
      return text.slice(0, 50) + "...";
    }
  },
  computed: {
    threadUrl() {
      return {
        name: "threadDetail",
        params: {
          slug: this.thread.slug
        }
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  margin-bottom: 2em;
  position: relative;
  padding-right: 3em;
}
.answers {
  position: absolute;
  right: 1em;
  top: 1em;
}
.media {
  align-items: flex-end;
}
.media-left,
.content .media-left {
  margin: 0 1rem 0 0;
}
.media-right {
  margin-right: -2em;
}
</style>
