<template>
  <div>
    <div class="toolbox center">
      <div class="button center" @click="rblg">
        <span class="textcenter">rblg</span>
      </div>
      <div class="button center" @click="like">
        <span class="textcenter">like</span>
      </div>

      <div class="button center" @click="pin">
        <span class="textcenter">pin</span>
      </div>

      <div class="button center" @click="action">
        <span class="textcenter">action</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Toolbox",
  props: {
    msg: String,
    showAction: Boolean,
    pin: Function,
    like: Function,
    rblg: Function
  },
  methods: {
    action() {
      this.$emit("update:showAction", true);
    }
  }
};
</script>

<style scoped>
.center {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}
.textcenter {
  margin: auto;
}
.toolbox {
  position: fixed;
  bottom: 5%;
  width: 70%;
  height: 40px;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.button {
  width: 40px;
  height: 40px;
  background-color: #222;
  color: #bbb;
  border-radius: 10px;
  cursor: pointer;
}
</style>
