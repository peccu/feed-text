<template>
  <svg
    :width="size"
    :height="size"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <filter id="blurMe" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
    </filter>

    <circle
      :cx="size / 2"
      :cy="size / 2"
      :r="size / 4"
      fill="white"
      filter="url(#blurMe)"
    />
  </svg>
</template>

<script>
export default {
  name: "Spark",
  props: {
    size: {
      type: Number,
      default: 80
    }
  }
};
</script>

<style scoped></style>
