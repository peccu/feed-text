<template>
  <transition name="fade">
    <div class="notification" v-if="show">
      {{ title }}
    </div>
  </transition>
</template>

<script>
export default {
  name: "Notification",
  props: {
    title: String
  },
  data() {
    return {
      show: true
    };
  },
  mounted() {
    const self = this;
    setTimeout(() => {
      self.show = false;
    }, 1000);
  }
};
</script>

<style scoped>
.notification {
  padding: 1px 5px;
  font-size: small;
  background-color: lightblue;
}
.fade-leave-active {
  transition: opacity 1s;
}
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
