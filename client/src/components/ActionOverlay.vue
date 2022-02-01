<template>
  <div>
    <div class="actionoverlaybg" @click="hide" v-if="showAction"></div>
    <div class="actionoverlay" v-if="showAction">
      <ActionItems :goto="goto" />
    </div>
  </div>
</template>

<script>
import ActionItems from "@/components/ActionItems.vue";
export default {
  name: "ActionOverlay",
  components: {
    ActionItems
  },
  props: {
    showAction: Boolean,
    goto: Function
  },
  methods: {
    hide() {
      this.$emit("update:showAction", false);
    }
  }
};
</script>

<style scoped>
.actionoverlaybg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(200, 200, 200, 0.4);
}
.actionoverlay {
  position: fixed;
  top: 0;
  bottom: 0;
  height: 80%;
  left: 0;
  right: 0;
  width: 70%;
  margin: auto;
  overflow-y: scroll;
  background-color: lightgreen;
}
.actionitem {
  display: flex;
  height: 40px;
  background-color: green;
  vertical-align: middle;
}
</style>
