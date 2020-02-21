<template>
  <div>
    <side-bar />
    <main>
      <nav-bar />
      <router-view />
    </main>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    SideBar,
    NavBar
  }
};
</script>
