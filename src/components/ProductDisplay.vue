<template>
  <div>
    <img
      :src="getImageUrl"
      :alt="`Man wearing ${color} product`"
      width="45px"
      height="auto"
      :id="modalID"
    />
    <b-popover id="popover-grid" :target="modalID" triggers="hover" placement="right">
      <!-- <img
        v-for="i in 4"
        :key="i"
        :alt="`Man wearing ${color} product`"
        :src="getImageUrl"
        width="100%"
        height="100%"
        sizes="(max-width: 600px) 480px,
            800px"
      />-->
      <img :alt="`Man wearing ${color} product`" :srcset="getImageUrl" width="100%" height="100%" />
    </b-popover>
  </div>
</template>

<script>
export default {
  props: {
    color: String
  },

  computed: {
    modalID() {
      return this.$route.name == "Order"
        ? `popover-order-${this.color}`
        : `popover-${this.color}`;
    },
    getImageUrl() {
      var images = require.context(
        "../assets/images/products",
        false,
        /\.png$/
      );
      return images(`./product-sample-${this.color}-med.png`);
    }
  }
};
</script>

<style>
#popover-grid {
  background: #1a3a54;
  /* display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr; */
}
</style>