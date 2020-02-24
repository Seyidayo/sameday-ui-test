<template>
  <div>
    <section class="d-flex align-items-center justify-content-start">
      <router-link to="/" class="d-flex" style="font-family: Nunito; color: #707070">
        <div class="back-btn mr-2">
          <img src="../assets/images/right-arrow.svg" alt=" " width="18" height="18" />
        </div>Back
      </router-link>
      <h2 class="border-left px-2 mx-2">
        <img src="../assets/images/product-blue.svg" alt=" " width="32" height="32" /> Production House
      </h2>
    </section>
    <order-overview />
    <order-table />
  </div>
</template>

<script>
import OrderOverview from "@/components/OrderOverview.vue";
import OrderTable from "@/components/OrderTable.vue";
export default {
  components: {
    OrderOverview,
    OrderTable
  }
};
</script>

