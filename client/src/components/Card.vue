<template>
  <article class="inner">{{ content.feedTextType }}
    <CardRSS v-if="content.feedTextType == 'rss'" :i="i" :content="content" />
    <CardTwitter
      v-if="content.feedTextType == 'twitter'"
      :i="i"
      :content="content"
    />
    <CardDefault v-else :i="i" :content="content" />
    <div v-html="message"></div>
  </article>
</template>

<script>
import CardDefault from "@/components/CardDefault.vue";
import CardRSS from "@/components/CardRSS.vue";
import CardTwitter from "@/components/CardTwitter.vue";
export default {
  name: "Card",
  props: {
    i: Number,
    content: Object,
    message: String
  },
  components: {
    CardDefault,
    CardRSS,
    CardTwitter
  }
};
</script>

<style scoped>
.inner {
  padding: 40px 1em;
  /*height: 100%;*/
}
</style>
