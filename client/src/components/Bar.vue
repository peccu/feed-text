<template>
  <div>
    <div class="spark" ref="spark">
      <transition name="fade">
        <div v-if="spark"><Spark :size="size" /></div>
      </transition>
    </div>
    <div class="bar left" @click="left"></div>
    <div class="bar right" @click="right"></div>
  </div>
</template>

<script>
import Spark from "@/components/Spark.vue";
export default {
  name: "Bar",
  components: {
    Spark
  },
  props: {
    current: Number,
    direction: Number,
    scrollTo: Function,
    max: Number
  },
  data() {
    return {
      size: 80,
      spark: false,
      sparkTimer: null
    };
  },
  computed: {
    mutableCurrent() {
      return this.current;
    }
  },
  methods: {
    pickNext(num) {
      if (num <= 0) {
        return 1;
      } else if (num >= this.max) {
        return this.max;
      } else {
        return num;
      }
    },
    right(e) {
      this.showSpark(e, "right");
      this.move(this.direction);
    },
    left(e) {
      this.showSpark(e, "left");
      this.move(-this.direction);
    },
    opposite(lr) {
      return lr == "left" ? "right" : "left";
    },
    showSpark(e, lr) {
      this.spark = true;
      const it = this;
      this.sparkTimer = setTimeout(() => {
        it.spark = false;
      }, 200);
      const top = e.clientY - this.size / 2 + "px";
      this.$refs.spark.style.top = top;
      const lrpos = -((this.size * 3) / 8) + "px";
      this.$refs.spark.style[lr] = lrpos;
      this.$refs.spark.style[this.opposite(lr)] = "auto";
    },
    move(direction) {
      const tmp = this.mutableCurrent + direction;
      const current = this.pickNext(tmp);
      this.$emit("update:current", current);
      this.scrollTo("pg" + current);
    }
  }
};
</script>

<style scoped>
.bar {
  position: fixed;
  top: 0;
  width: 30pt;
  height: 100vh;
  /* background-color: rgba(200, 50, 50, 0.2); */
}
.left {
  left: 0;
}
.right {
  right: 0;
}
.spark {
  position: fixed;
}
/* https://vuejs.org/v2/guide/transitions.html#Transitioning-Single-Elements-Components */
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
