<template>
  <div>
    <router-link to="/">
      <div class="actionitem">
        <span class="actionicon">*</span>
        <span class="actiontitle">Home</span>
      </div>
    </router-link>
    <router-link to="/settings">
      <div class="actionitem">
        <span class="actionicon">*</span>
        <span class="actiontitle">Settings</span>
      </div>
    </router-link>
    <div class="actionitem" @click="reload">
      <a class="actionicon">*</a>
      <a class="actiontitle">Reload</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActionItems",
  methods: {
    reload() {
      location.reload();
    }
  }
};
</script>

<style scoped>
.actionitem {
  display: flex;
  height: 40px;
  background-color: green;
  vertical-align: middle;
}
</style>
