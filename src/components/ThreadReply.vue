<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-48x48">
        <img src="https://bulma.io/images/placeholders/96x96.png" />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <strong>{{ reply.user.name }}</strong>
        <br />
        <span class="has-text-grey-light">
          <i class="fas fa-calendar-alt"></i>
          {{ reply.created_at | formatedDate }}
        </span>
        <br />
        {{ reply.body }}
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    reply: Object
  }
};
</script>