<template>
  <div>
    <h1>{{ i + 1 }} : {{ content.feedTextType || "no type" }}</h1>
    <pre>{{ JSON.stringify(content, null, 2) }}</pre>
  </div>
</template>

<script>
export default {
  name: "CardDefault",
  props: {
    i: Number,
    content: Object
  }
};
</script>

<style scoped></style>
