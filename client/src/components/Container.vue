<template>
  <div ref="container" class="container x mandatory-scroll-snapping" :dir="dir">
    <div
      class="content"
      :key="i"
      v-for="(content, i) in contents"
      :id="'pg' + (i + 1)"
      dir="ltr"
    >
      <Card :i="i" :message="message" :content="content" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  name: "Container",
  components: { Card },
  props: {
    contents: Array,
    direction: Number,
    mes: Array,
    current: Number
  },
  computed: {
    dir() {
      return this.direction > 0 ? "rtl" : "ltr";
    },
    message() {
      return this.mes.join("<br>");
    },
    max() {
      return this.contents.length;
    }
  },
  methods: {
    handleScroll() {
      // console.log(e);
      const scroll = this.$refs.container.scrollLeft;
      const width = this.$refs.container.firstElementChild.clientWidth;
      //console.log("scroll, width", scroll, width);
      //console.log("scroll, ceil(abs(scroll)/width)+1", scroll, Math.ceil(Math.abs(scroll) / width) + 1)
      this.current = Math.ceil(Math.abs(scroll) / width) + 1;
      this.$emit("update:current", this.current);
    }
  },
  mounted() {
    this.$refs.container.addEventListener("scroll", this.handleScroll);
    if (!window.location.hash.match(/^#/)) {
      return;
    }
    this.current = parseInt(window.location.hash.slice(1), 10);
    scrollTo("pg" + this.current);
  },
  unmounted() {
    this.$refs.container.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
.container {
  background-color: #333;
  color: #ccc;
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  display: flex;
  flex: none;
  flex-flow: row nowrap;
}
.content {
  flex: none;
  scroll-snap-align: start;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-wrap: break-word;
}
</style>
