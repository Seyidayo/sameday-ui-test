<template>
  <section class="table-responsive">
    <section class="d-flex border-bottom my-2">
      <ul class="table-tabs">
        <li class="pb-2 active">Product Details</li>
        <li class="pb-2">History/Notes</li>
      </ul>

      <form class="d-flex">
        <select name class="success" v-model="isInvoice">
          <option value="false">Worksheet</option>
          <option value="true">Invoice</option>
        </select>

        <button disabled class="button--blue">Print</button>
        <button class="button--white">Add Note</button>
        <b-dropdown
          text="Complete Production"
          class="button--blue"
          variant="primary"
          style="color: white"
        >
          <b-dropdown-item href="#">An item</b-dropdown-item>
          <b-dropdown-item href="#">Another item</b-dropdown-item>
        </b-dropdown>
      </form>
    </section>

    <div class="d-flex gray-bg p-2">
      <h5>Product</h5>
      <button class="button--blue">Download Artwork</button>
    </div>

    <div class="d-grid" style="width: 100%">
      <div>
        <img src="../assets/images/products/product-sample-red-med.png" width="80%" height="80%" />
        <p>Front</p>
      </div>
      <div>
        <img src="../assets/images/products/product-sample-black-med.png" width="80%" height="80%" />
        <p>Back</p>
      </div>
      <div>
        <img src="../assets/images/products/product-sample-pink-med.png" width="80%" height="80%" />
        <p>Side</p>
      </div>
      <div>
        <img src="../assets/images/products/product-sample-black-med.png" width="80%" height="80%" />
        <p>Side</p>
      </div>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th>
            <input type="checkbox" name id @change="clickAll" />
          </th>
          <th>Item #</th>
          <th>Details</th>
          <th>Production Type</th>
          <th>Color</th>
          <th>Quantity</th>
          <th>Paid</th>
        </tr>
      </thead>
      <tbody>
        <tr @click="changeRoute(index)" v-for="(item, index) in order" :key="index">
          <td>
            <input type="checkbox" name="checkbox" />
          </td>
          <td>{{ item.itemNo }}</td>
          <td class="d-flex" style="justify-content: space-around">
            <product-display :color="item.color.name" />
            <p style="width: 150px">{{ item.details.description }}</p>
          </td>
          <td class="fail">{{ item.printType }}</td>
          <td>
            <span
              class="color-button"
              :style="{ 'background-color': item.color.code }"
            >{{ item.color.name }}</span>
          </td>
          <td>
            <span v-for="qty in item.qty" :key="qty">L x {{ qty }}</span>
          </td>
          <td class="success">
            <div class="stamp"></div>
            {{ item.paid }}
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import ProductDisplay from "@/components/ProductDisplay.vue";
export default {
  data() {
    return {
      order: [
        {
          orderNo: "#232JODJSDKN2",
          itemNo: "#232JODJSDKN2",
          details: {
            description:
              "No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)",
            color: "product-sample.png"
          },
          color: {
            name: "black",
            code: "#000"
          },
          qty: { l: 2 },
          printType: "DTG Print",
          deliveryMethod: "rush",
          deliveryTime: {
            date: "23-June-2019",
            left: "10:00:00"
          },
          paid: "Paid in full",
          status: {
            done: 2,
            total: 5
          }
        }
      ],
      isInvoice: false
    };
  },
  components: {
    ProductDisplay
  },
  filters: {
    formatDeliveryMethod(value) {
      switch (value) {
        case "rush":
          return "Rush Shipping";
        case "pickup":
          return "Pickup Order";
        default:
          break;
      }
      //   return value.toUpperCase();
    }
  },
  methods: {
    clickAll({ target }) {
      document
        .querySelectorAll("[type='checkbox']")
        .forEach(input => (input.checked = target.checked));
    },

    changeRoute() {
      this.$router.push({ path: "/order" });
    }
  }
};
</script>

<style>
.color-button {
  background-color: inherit;
  width: 75px;
  height: 35px;
  color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  text-transform: capitalize;
}

.white-card {
  background: #ffffff;
  box-shadow: 0px 3px 50px #0000000f;
  border-radius: 10px;
}

.dropdown-toggle {
  margin: 0;
}
</style>

<style lang="scss" scoped>
.d-grid {
  inline-size: 100%;
  block-size: 300px;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
  gap: 1rem;
}
section.d-flex {
  padding: 0;
  justify-content: space-between;
  align-items: center !important;
}

form {
  * {
    margin-inline-start: 0.5rem;
  }

  button {
    width: 100px;
    height: 35px;
    padding: 0.25rem;
    font-size: 0.9em;
  }
}

.gray-bg {
  background-color: #eeeeee;
  // padding: 1rem;
  // margin-block-end: 0.25rem;
  width: 100%;

  button {
    background-color: transparent;
    color: #007bff;
    border-color: #007bff;
  }
}
</style>
