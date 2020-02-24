<template>
  <b-navbar toggleable="md" id="nav-bar">
    <b-navbar-brand>
      <router-link to="/">
        <img src="../assets/images/logo.svg" height="100%" width="120px" alt=" " />
      </router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav class="ml-auto d-flex">
        <b-nav-item>
          <img src="../assets/images/magnifying-glass.svg" height="24" width="24" alt=" " />
        </b-nav-item>

        <b-nav-item>
          <span>
            <img src="../assets/images/mail.svg" height="24" width="24" alt=" " />
            <span class="badge">1</span>
          </span>
          Message
        </b-nav-item>
        <li class="nav-item">
          <div class="nav-link d-flex">
            <span>
              <img src="../assets/images/shopping-cart.svg" height="24" width="24" alt=" " />
              <span class="badge">1</span>
            </span>
            Market Place
            <div class="dropdown-toggle mx-2"></div>
          </div>
        </li>
        <b-nav-item>
          <span>
            <img src="../assets/images/shopping-cart.svg" height="24" width="24" alt=" " />
            <span class="badge">1</span>
          </span>
          Notifications
        </b-nav-item>
        <b-nav-item>
          <img
            src="../assets/images/profile-image.png"
            alt=" "
            width="40"
            height="40"
            class="border__blue"
          />
          <!-- <span class="d-flex">
            <p style="color: #000">Me</p>
            <div class="dropdown-toggle"></div>
          </span>-->
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
