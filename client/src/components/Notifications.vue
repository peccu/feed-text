<template>
  <div class="indicator right">
    <Notification :title="n" :key="i" v-for="(n, i) in notifications" />
  </div>
</template>

<script>
import Notification from "@/components/Notification.vue";
export default {
  name: "Notifications",
  components: {
    Notification
  },
  props: {
    notifications: Array
  }
};
</script>

<style scoped>
.indicator.right {
  position: fixed;
  right: 20px;
  top: 10px;
}
</style>
