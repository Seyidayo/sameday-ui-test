<template>
  <div class="home">
    <section class="d-flex">
      <h2>
        <img src="../assets/images/product-blue.svg" alt=" " width="32" height="32" srcset /> Production House
      </h2>
      <search-bar />
    </section>

    <!-- <b-table hover :items="items"></b-table> -->
    <production-table />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import SearchBar from "@/components/SearchBar.vue";
import ProductionTable from "@/components/ProductionsTable.vue";

export default {
  name: "Production",
  components: {
    // HelloWorld
    SearchBar,
    ProductionTable
  }
};
</script>

<style lang="scss" >
.d-flex {
  align-items: center;
  justify-content: center;
}
</style>
