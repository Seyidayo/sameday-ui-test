<template>
  <div class="d-grid">
    <side-bar />
    <main>
      <nav-bar />
      <section>
        <router-view />
      </section>
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

<style lang="scss" >
.d-grid {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  overflow: hidden;
}

main {
  overflow: scroll;
  overflow-x: scroll;
  scrollbar-width: none;
  position: relative;
  display: inline-block;
  width: 100%;

  section {
    padding: 1rem;
    margin-top: 1rem;
    background-color: #fcfcfc;
  }
}

main::-webkit-scrollbar {
  width: 0;
}
</style>
