<template>
  <div>
    <div class="level">
      <div class="level-left">
        <router-link to="/" class="is-size-2 has-text-light" data-test="voltar">Fórum</router-link>
      </div>
      <div class="level-right">
        <router-link to="/" data-test="voltar" class="button is-black">
          <span class="icon">
            <i class="fas fa-arrow-left"></i>
          </span>
          <span>Voltar</span>
        </router-link>
      </div>
    </div>
    <article class="media" data-test="thread">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="https://bulma.io/images/placeholders/128x128.png" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <h1 class="title">{{ thread.title }}</h1>
          <p class="subtitle">
            <i class="fas fa-user-circle"></i>
            {{ thread.user.name }}
            <small class="media-content-date has-text-grey-light">
              <i class="fas fa-calendar-alt"></i>
              {{ thread.created_at | formatedDate }}
            </small>
          </p>
          <div v-html="thread.body"></div>
        </div>

        <h3 class="subtitle">{{ thread.total_replies }} respostas</h3>
        <thread-reply v-for="reply in thread.replies" :key="reply.id" :reply="reply"></thread-reply>
      </div>
    </article>
  </div>
</template>

<script>
import { getThread } from "@/service/api";
import ThreadReply from "@/components/ThreadReply";

export default {
  components: {
    ThreadReply
  },
  data() {
    return {
      thread: "",
      slug: this.$route.params.slug
    };
  },
  created() {
    getThread(this.slug)
      .then(({ data }) => {
        this.thread = data.data;
      })
      .catch(() => {
        this.$router.push({
          name: "notFound"
        });
      });
  }
};
</script>

<style lang="scss" scoped>
.media {
  background-color: #fff;
  padding: 1em;
}
.subtitle {
  margin: 1.5em 0 0.5em;
}
.media-content-date {
  margin-left: 1em;
}
</style>
