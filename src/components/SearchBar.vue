<template>
  <form @submit.prevent>
    <button class="button--blue button--dropdown">
      Categories
      <div class="dropdown-toggle"></div>
    </button>
    <input type="search" placeholder="Search" />
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss">
input {
  background-color: #eeeeee;
}

.button--dropdown {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
