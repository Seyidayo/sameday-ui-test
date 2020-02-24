<template>
  <div class="d-grid">
    <side-bar />
    <main>
      <nav-bar />
      <section>
        <transition name="fade" appear>
          <router-view />
        </transition>
      </section>
      <Footer />
    </main>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    SideBar,
    NavBar,
    Footer
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
  overflow-x: scroll;
  scrollbar-width: none;
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 0;
}

main::-webkit-scrollbar {
  width: 0;
}
</style>

<style lang="scss" scoped>
section {
  padding: 1rem;
  margin-top: 100px;
  background-color: #fcfcfc;
  min-height: 1000px;
}
</style>