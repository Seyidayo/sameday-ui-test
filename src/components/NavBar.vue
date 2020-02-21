<template>
  <b-navbar toggleable="md">
    <b-navbar-brand>
      <router-link to="/">
        <img src="../assets/images/logo.svg" height="87px" width="277px" alt=" " />
      </router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav class="ml-auto d-flex">
        <b-nav-item>
          <img src="../assets/images/magnifying-glass.svg" height="42px" width="31px" alt=" " />
        </b-nav-item>

        <b-nav-item>
          <i>
            <img src="../assets/images/mail.svg" height="42px" width="31px" alt=" " />
            <span class="badge">1</span>
          </i>
          Message
        </b-nav-item>
        <b-nav-item>
          <i>
            <img src="../assets/images/shopping-cart.svg" height="42px" width="31px" alt=" " />
            <span class="badge">1</span>
          </i>
          Market Place
        </b-nav-item>
        <b-nav-item>
          <i>
            <img src="../assets/images/shopping-cart.svg" height="42px" width="31px" alt=" " />
            <span class="badge">1</span>
          </i>
          Notifications
        </b-nav-item>
        <b-nav-item>
          <img src="../assets/images/profile-image.png" alt=" " class="border__blue" />
          <span class="d-flex">
            <p style="color: #000">Me</p>
            <div class="dropdown-toggle"></div>
          </span>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style>
.dropdown {
  position: relative;
}

.border__blue {
  border: 2px solid #196bd8;
  border-radius: 50%;
}
</style>
