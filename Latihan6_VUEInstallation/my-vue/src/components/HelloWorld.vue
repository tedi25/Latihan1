<template>
  <!-- <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener">pwa</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">vuex</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div> -->
  <header>
    <h1>MyWebsite</h1>
    <menu>
      <ul>
        <li><a href="">home</a></li>
        <li><a href="">about</a></li>
        <li><a href="">products</a></li>
        <li><a href="">services</a></li>
        <li><a href="">contact</a></li>
      </ul>
    </menu>
  </header>
  <section>
    <img src="https://source.unsplash.com/7TmkMlSPesk" />
  </section>
  <main>
    <div class="title">
      <h1>Judul Artikel</h1>
      <p><b>ditulis</b> oleh pembuat pada 1 januari 2050</p>
    </div>
    <div class="text">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        sagittis dolor gravida sollicitudin tincidunt. Mauris eros magna,
        posuere quis felis tempus, eleifend iaculis leo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        sagittis dolor gravida sollicitudin tincidunt. Mauris eros magna,
        posuere quis felis tempus, eleifend iaculis leo. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin
        sit amet porttitor nulla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        sagittis dolor gravida sollicitudin tincidunt. Mauris eros magna,
        posuere quis felis tempus, eleifend iaculis leo. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin
        sit amet porttitor nulla. Nulla sollicitudin eget nibh sit amet
        ultricies. Etiam est orci, ultrices molestie massa ac, auctor pharetra
        elit. Fusce gravida lorem lacus, eu ornare eros pharetra imperdiet. Sed
        ultrices commodo dignissim.
      </p>
    </div>
  </main>
  <footer>
    <p><b>Copyright 2016.</b> Name_blog all rights reserved</p>
  </footer>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// h3 {
//   margin: 40px 0 0;
// }
// ul {
//   list-style-type: none;
//   padding: 0;
// }
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
// a {
//   color: #42b983;
// }
ul {
  list-style: none;
}

li {
  border-right: 2px solid black;
  display: inline-block;
  padding: 5px;
}

li:last-child {
  border: none;
}

img {
  width: 100%;
  object-fit: contain;
  background-size: contain;
}

section {
  background-size: cover;
}

p {
  line-height: 1.2rem;
  margin-bottom: 20px;
}

header {
  padding: 0 20px;
}

main {
  padding: 0 20px;
}

footer {
  width: 100%;
  height: 50px;
  background-color: black;
  color: white;
  text-align: center;
  padding: 10px;
}
</style>
