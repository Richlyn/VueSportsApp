<template>
  <div>
    <div class="filters">
      <div v-for="item in items" :key="item.id">
        <b-dropdown split text="Teams" id="dropdown" class="m-2">
          <b-dropdown-item href="#">{{first_name}}</b-dropdown-item>
          <b-dropdown-item href="#">{{id}}</b-dropdown-item>
          <b-dropdown-item href="#">{{last_name}}</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
    <div class="overflow-auto">
      <b-table id="my-table" :items="items" :per-page="perPage" :current-page="currentPage" small></b-table>
      <p class="mt-3">Current Page: {{ currentPage }}</p>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "games",
  mounted() {
    this.$root.$on("bv::dropdown::show", bvEvent => {
      console.log("Dropdown is about to be shown", bvEvent);
    });
  },
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      items: [
        { id: 1, first_name: "Fred", last_name: "Flintstone" },
        { id: 2, first_name: "Wilma", last_name: "Flintstone" },
        { id: 3, first_name: "Barney", last_name: "Rubble" },
        { id: 4, first_name: "Betty", last_name: "Rubble" },
        { id: 5, first_name: "Pebbles", last_name: "Flintstone" },
        { id: 6, first_name: "Bamm Bamm", last_name: "Rubble" },
        { id: 7, first_name: "The Great", last_name: "Gazzoo" },
        { id: 8, first_name: "Mr", last_name: "Slate" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" }
      ]
    };
  },
  computed: {
    rows() {
      return this.items.length;
    }
  }
};
</script>

<style>
#dropdown {
  width: 10%;
  display: flex;
  justify-items: end;
}
</style>
