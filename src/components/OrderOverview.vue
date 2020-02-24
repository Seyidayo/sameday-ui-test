<template>
  <section class="my-4">
    <div class="d-flex">
      <div>
        <h6>Order: #ADJ2322434D</h6>
        <p
          style="font-size: 0.75em; color: #007bff; font-family: Nunito"
        >Account setup > Delivery Method</p>
      </div>
      <div style="color: #007bff">
        Productions status
        <span class="success">Running 2 of 4</span>
      </div>
    </div>
    <section class="overview">
      <div class="row">
        <div class="col border-right">
          <p>
            <img src="../assets/images/shopping-cart.svg" height="18" width="18" alt /> Order Value
          </p>
          <p class="value mx-4">$40,000</p>
        </div>
        <div class="col border-right">
          <p>Order Date</p>
          <p class="value">25-June-2017</p>
        </div>
        <div class="col border-right">
          <p>Delivery Method</p>
          <div class="value d-flex">
            <span>Pickup order</span>
            <select class="success">
              <option>Can edit</option>
              <option value>Rush Shipping</option>
              <option value>Pickup Order</option>
            </select>
          </div>
        </div>
        <div class="col border-right">
          <p>Rush option</p>
          <div class="d-flex justify-content-start">
            <div class="stamp"></div>
            <p class="value">Rush</p>
          </div>
        </div>
        <div class="col border-right">
          <p>Status</p>
          <p class="value">Pending</p>
        </div>
        <div class="col border-right">
          <p>Requested by</p>
          <p class="value">25-June-2017</p>
          <p style="color: #C1C1C1">
            Time Left
            <span class="success">10:00:00</span>
          </p>
        </div>
        <div class="col">
          <p>Shipped or Picked Date</p>
          <p class="value">25-June-2017</p>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.overview {
  padding: 1rem;
  background: #ffffff;
  box-shadow: 0px 3px 50px #0000000f;
  border-radius: 10px;
  color: #1a3a54;

  > div {
    border-color: #dadce0;
  }

  .value {
    color: #007bff;
  }
}
</style>
