<template>
  <div class="Settings">
    <h1>This is a Settings page</h1>
    <div v-for="cat in cats" :key="cat.id">
      ID: {{ cat.id }}
      <div>
        <span><label :for="'Name' + cat.id">Name</label></span>
        <span><input :id="'Name' + cat.id" v-model="cat.name" required/></span>
      </div>
      <div>
        <span><label :for="'Age' + cat.id">Age</label></span>
        <span
          ><input
            v-model="cat.age"
            :id="'Age' + cat.id"
            required
            type="numeric"
            min="0"
            max="30"
        /></span>
      </div>
      <button color="green" @click="deleteCat(cat)">Delete Cat</button>
    </div>
    <button color="green" @click="save">Save Cat</button>
    <div>
      <div>
        <span><label for="Name">Name</label></span>
        <span><input id="Name" v-model="newcat.name" required/></span>
      </div>
      <div>
        <span><label for="Age">Age</label></span>
        <span
          ><input
            v-model="newcat.age"
            id="Age"
            required
            type="numeric"
            min="0"
            max="30"
        /></span>
      </div>
      <button color="green" @click="add">Add Cat</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cat: null,
      newcat: { name: "", age: 0 }
    };
  },
  created() {
    this.$store.dispatch("getCats");
  },
  computed: {
    cats() {
      const cats = this.$store.state.cats;
      console.log("cats", cats);
      return cats;
    }
  },
  methods: {
    async deleteCat(cat) {
      console.log("delete", cat.id);
      await this.$store.dispatch("deleteCat", cat);
      this.$store.dispatch("getCats");
    },
    async save() {
      await this.$store.dispatch("saveCat", this.cat);
      console.log("back");
      this.$router.push("/");
    },
    async add() {
      console.log("adding... ", this.newcat);
      await this.$store.dispatch("saveCat", this.newcat);
      await this.$store.dispatch("getCats");
    }
  }
};
</script>
