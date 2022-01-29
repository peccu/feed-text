<template>
  <div>
    <div class="indicator left" @click="changeDirection">
      <div class="current">
        <div>{{ current }}</div>
      </div>
      <div class="total">
        <span>{{ max }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Indicator",
  props: {
    changeDirection: Function,
    current: Number,
    max: Number
  }
};
</script>

<style scoped>
.indicator.left {
  position: fixed;
  left: 0;
  top: 0;
  margin: 10px;
  background-color: lightblue;
  display: flex;
  font-size: x-small;
  height: 20px;
}
.indicator .current {
  background-color: white;
  width: 40px;
  text-align: center;
}
.indicator .total {
  background-color: gray;
  color: white;
  width: 40px;
  text-align: center;
}
</style>
