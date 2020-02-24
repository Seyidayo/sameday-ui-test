<template>
  <section style="overflow-x: auto; margin-top: 3rem">
    <section style="width: 100%" class="d-flex border-bottom my-2">
      <ul class="table-tabs">
        <li class="pb-2 active">
          All Productions
          <div class="badge badge--no-bg">192</div>
        </li>
        <li class="pb-2">
          Awaiting Production
          <div class="badge badge--red">19</div>
        </li>
        <li class="pb-2">Completed</li>
      </ul>

      <form class="d-flex">
        <button class="button--white">Print worksheet</button>
        <select name disabled>
          <option value>Mark as Completed</option>
        </select>
        <button class="button--gray">Save</button>
      </form>
    </section>
    <table cell>
      <thead>
        <tr>
          <th>
            <input type="checkbox" name id @change="clickAll" />
          </th>
          <th>Order #</th>
          <th>Item #</th>
          <th>Details</th>
          <th>Color</th>
          <th>QTY</th>
          <th>Print Type</th>
          <th>Delivery Method</th>
          <th>Delivery Time</th>
          <th>Production Status</th>
        </tr>
      </thead>
      <tbody>
        <tr @click="changeRoute(index)" v-for="(item, index) in productions" :key="index">
          <td>
            <input type="checkbox" name="checkbox" />
          </td>
          <td>{{ item.orderNo }}</td>
          <td>{{ item.itemNo }}</td>
          <td class="d-flex">
            <product-display :color="item.color.name" />
            <p style="width: 150px">{{ item.details.description }}</p>
          </td>
          <td>
            <span
              class="color-button"
              :style="{ 'background-color': item.color.code }"
            >{{ item.color.name }}</span>
          </td>
          <td>
            <span v-for="qty in item.qty" :key="qty">L x {{ qty }}</span>
          </td>
          <td>{{ item.printType }}</td>
          <td
            :class="{
              royal: item.deliveryMethod === 'pickup',
              fail: item.deliveryMethod === 'rush'
            }"
          >
            <img
              src="../assets/images/clock.svg"
              alt=" "
              width="24"
              height="24"
              v-if="item.deliveryMethod === 'rush'"
            />
            {{ item.deliveryMethod | formatDeliveryMethod }}
          </td>
          <td class="d-flex--column">
            <p>{{ item.deliveryTime.date }}</p>
            <p style="color: #C1C1C1">
              Time Left:
              <span class="success">{{ item.deliveryTime.left }}</span>
            </p>
          </td>
          <td class="success">Running {{ item.status.done }} of {{ item.status.total }}</td>
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
      productions: [
        {
          orderNo: "#232JODJSDKN2",
          itemNo: "#232JODJSDKN2",
          details: {
            description:
              "No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)",
            color: "product-sample.png"
          },
          color: {
            name: "pink",
            code: "#FFC0CB"
          },
          qty: { l: 2 },
          printType: "DTG Print",
          deliveryMethod: "rush",
          deliveryTime: {
            date: "23-June-2019",
            left: "10:00:00"
          },
          status: {
            done: 2,
            total: 5
          }
        },
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
            code: "#000000"
          },
          qty: { l: 2 },
          printType: "DTG Print",
          deliveryMethod: "rush",
          deliveryTime: {
            date: "23-June-2019",
            left: "10:00:00"
          },
          status: {
            done: 2,
            total: 5
          }
        },
        {
          orderNo: "#232JODJSDKN2",
          itemNo: "#232JODJSDKN2",
          details: {
            description:
              "No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)",
            color: "product-sample.png"
          },
          color: {
            name: "red",
            code: "#FF0000"
          },
          qty: { l: 4 },
          printType: "DTG Print",
          deliveryMethod: "pickup",
          deliveryTime: {
            date: "27-June-2019",
            left: "05:00:00"
          },
          status: {
            done: 4,
            total: 5
          }
        }
      ]
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
</style>

<style lang="scss" scoped>
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
</style>
