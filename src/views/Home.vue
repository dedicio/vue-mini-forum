<template>
  <section>
    <div class="level">
      <div class="level-left">
        <span class="is-size-2 has-text-light">Fórum</span>
      </div>
    </div>

    <div class="threads">
      <thread-item v-for="thread in threads" :key="thread.id" :thread="thread"></thread-item>
    </div>
  </section>
</template>

<script>
import { getAllThreads } from "@/service/api";
import ThreadItem from "@/components/ThreadItem";

export default {
  components: {
    ThreadItem
  },
  data() {
    return {
      threads: ""
    };
  },
  created() {
    getAllThreads().then(({ data }) => {
      this.threads = data.data;
    });
  }
};
</script>

<style></style>
