<template>
  <div>
    <h3>
      {{ content.feed.title }}
    </h3>
    <h1>
      <a :href="content.link" target="_blank" rel="noreferrer noopener">
        {{ i + 1 }}, {{ content.title }}
      </a>
    </h1>
    <div class="description" v-html="description"></div>
  </div>
</template>

<script>
export default {
  name: "CardRSS",
  props: {
    i: Number,
    content: Object
  },
  computed: {
    description() {
      return this.content.description;
    }
  }
};
</script>

<style>
h1,
h3 {
  margin: 0;
}
</style>
