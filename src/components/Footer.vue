<template>
  <footer>
    <section>
      <h5>Download App</h5>
      <ul>
        <li class="download-btn">
          <img src="../assets/images/apple.svg" width="32" height="32" alt=" " />
        </li>

        <li class="download-btn">
          <img src="../assets/images/google-play-store.svg" width="32" height="32" alt=" " />
        </li>
      </ul>
    </section>
    <article>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur</p>
      <ul>
        <li>
          <a href="#">Lorem ipsum dolor sit</a>
        </li>
        <li>
          <a href="#">Lorem ipsum dolor sit</a>
        </li>
        <li>
          <a href="#">Lorem ipsum dolor sit</a>
        </li>
      </ul>
    </article>
    <section>
      <h6>Connect with us</h6>
      <ul class="mt-4">
        <li>
          <img src="../assets/images/twitter.svg" alt=" " width="28" height="28" />
        </li>
        <li>
          <img src="../assets/images/facebook.svg" alt=" " width="28" height="28" />
        </li>
        <li>
          <img src="../assets/images/instagram.svg" alt=" " width="28" height="28" />
        </li>
      </ul>
    </section>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
footer {
  padding: 60px 1rem;
  background-color: #f4f7f6;

  ul {
    display: flex;
    list-style-type: none;
    li {
      margin-inline-end: 1.5rem;

      &.download-btn {
        width: 65px;
        height: 65px;
        border-radius: 50%;
        background-color: #e6e6e6;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      a {
        text-decoration: underline;
      }
    }

    &.mt-4 {
      justify-content: space-between;
    }
  }
}
</style>
