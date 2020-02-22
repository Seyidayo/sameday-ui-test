<template>
  <b-nav vertical id="side-bar" :class="{'hide': show}">
    <div class="m-3 toggle" @click="show = !show">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <b-nav-item>
      <img src="../assets/images/time-left.svg" alt=" " height="24px" width="24px" />
      <div class="nav-item-text">Dashboard</div>
    </b-nav-item>

    <router-link to="/">
      <b-nav-item v-b-toggle.operations-menu variant="primary">
        <img src="../assets/images/time-left.svg" alt=" " height="24px" width="24px" />
        <div class="nav-item-text">Operations</div>
        <span class="dropdown-toggle"></span>
      </b-nav-item>
    </router-link>

    <b-collapse id="operations-menu" class="mt-2">
      <b-nav-item>
        <img src alt />
        <div class="nav-item-text">Orders</div>
        <span class="badge">1</span>
      </b-nav-item>

      <router-link to="/">
        <b-nav-item>
          <img src alt />
          <div class="nav-item-text">Production House</div>
          <span class="badge">1</span>
        </b-nav-item>
      </router-link>

      <b-nav-item>
        <img src alt />
        <div class="nav-item-text">Bids</div>
        <span class="badge">1</span>
      </b-nav-item>
      <b-nav-item>
        <img src alt />
        <div class="nav-item-text">Promotions/Discount</div>
      </b-nav-item>
      <b-nav-item>
        <img src alt />
        <div class="nav-item-text">Out Sourcing</div>
      </b-nav-item>
    </b-collapse>
    <b-nav-item>
      <img src="../assets/images/file.svg" alt=" " height="24px" width="24px" />
      <div class="nav-item-text">Records</div>
    </b-nav-item>
    <b-nav-item>
      <img src="../assets/images/shopping-cart-white.svg" alt=" " height="24px" width="24px" />
      <div class="nav-item-text">Supply Store</div>
    </b-nav-item>
    <b-nav-item>
      <img src="../assets/images/supply.svg" alt=" " height="24px" width="24px" />
      <div class="nav-item-text">Market Place</div>
    </b-nav-item>
    <b-nav-item>
      <img src="../assets/images/chat.svg" alt=" " height="24px" width="24px" />
      <div class="nav-item-text">Forums</div>
      <span class="badge">1</span>
    </b-nav-item>

    <b-nav-item>
      <img src="../assets/images/settings.svg" alt=" " height="24px" width="24px" />
      <div class="nav-item-text">Settings</div>
    </b-nav-item>
  </b-nav>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  }
};
</script>

<style lang="scss">
.toggle {
  display: flex;
  flex-direction: column;
  padding-block-end: 50px;
}

.toggle span {
  display: block;
  width: 30px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: #fff;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.45s ease;

  &:nth-child(1) {
    transform: rotate(45deg) translateX(3px);
  }
  &:nth-child(3) {
    transform: rotate(-45deg);
  }

  &:nth-child(2) {
    opacity: 0;
  }
}

.hide {
  .toggle span {
    transform: rotate(0deg);
    opacity: 1;
  }
}
</style>