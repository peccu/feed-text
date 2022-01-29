<template>
  <div>
    <div>
      <div v-html="text"></div>
      <!-- <div>{{ text }}</div> -->
      <!-- <pre>{{ text }}</pre> -->
      <div class="media" v-if="content.entities.media">
        <div :key="i" v-for="(m, i) in media">
          <img :src="m.media_url_https" />
        </div>
      </div>
      <div>
        <a
          :href="'https://twitter.com/' + content.user.screen_name + '/status/' + content.id_str"
          target="_blank"
          rel="noreferrer noopener"
        >{{ new Date(content.created_at) }}
        </a>
      </div>
      <div>
        <a
          :href="'https://twitter.com/' + content.user.screen_name"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img :src="content.user.profile_image_url_https" />
          @{{ content.user.screen_name }} ({{ content.user.name }})
        </a>
      </div>
      <div>
        {{ content.user.description }}
      </div>
      <pre>{{ JSON.stringify(sortedEntities, null, 2) }}</pre>
    </div>
    <h1>{{ i + 1 }} : {{ content.feedTextType || "no type" }}</h1>
    <pre>{{ JSON.stringify(content, null, 2) }}</pre>
  </div>
</template>

<script>
export default {
  name: "CardTwitter",
  props: {
    i: Number,
    content: Object
  },
  computed: {
    media() {
      return this.content.extended_entities.media || this.content.entities.media
    },
    sortedEntities() {
      const sorter = (a, b) => {
        return b.indices[0] - a.indices[0];
      };
      let entities = [
        "hashtags",
        "symbols",
        "user_mentions",
        "urls",
        "media"
      ].filter(k => this.content.entities[k]).flatMap(k =>
        this.content.entities[k].flatMap(e => {
          e.ent_type = k;
          return e;
        })
      );
      return entities.sort(sorter);
    },
    text() {
      let text = this.content.text;
      let ent = this.sortedEntities;
      if(ent.length == 0){
        return text.replaceAll('\n', '<br/>');
      }
      return ent.reduce((a, e) => {
        const splitted = this.pickEntities(a, e.indices);
        console.log("entity type: " + e.ent_type, splitted);
        console.log('with', e);
        const ret = this["link_" + e.ent_type](splitted, e);
        console.log('text', ret);
        return ret.replaceAll('\n', '<br/>');
      }, text);
    }
  },
  methods: {
    pickEntities(text, indices) {
      // const i = entity.hashtags[0].indices;
      const start = indices[0];
      const left = text.slice(0, start);
      const end = indices[1];
      const right = text.slice(end);
      const mid = text.slice(start, end);
      return { left, mid, right };
    },
    link_hashtags(text) {
      return (
        text.left +
        '<a href="https://twitter.com/hashtag/' +
        text.mid.slice(1) +
        '" target="_blank" rel="noopener">' +
        text.mid +
        "</a>" +
        text.right
      );
    },
    link_symbols(text) {
      return (
        text.left +
        '<a href="https://twitter.com/search?q=%24' +
        text.mid.slice(1) +
        '" target="_blank" rel="noopener">' +
        text.mid +
        "</a>" +
        text.right
      );
    },
    link_user_mentions(text, ent) {
      return (
        text.left +
        '<a href="https://twitter.com/' +
        ent.screen_name +
        '" target="_blank" rel="noopener">' +
        text.mid +
        "</a>" +
        text.right
      );
    },
    link_urls(text, ent) {
      return (
        text.left +
        '<a href="' +
        ent.expanded_url +
        '" target="_blank" rel="noopener">' +
        ent.expanded_url +
        "</a>" +
        text.right
      );
    },
    link_media(text, ent) {
      return (
        text.left +
        '<a href="' +
        ent.expanded_url.replace(/\.jpg/, '?format=jpg&name=large') +
        '" target="_blank" rel="noopener">' +
        'media' +
        "</a>" +
        text.right
      );
    }
  }
};
</script>

<style scoped>
  .media {
    width: 100vw;
    margin: 0 -1em;
  }
  img {
    max-width: 100vw;
  }
</style>
