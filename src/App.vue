<template>
  <router-view v-show="showPage" @ready="onPageReady" />
  <spinner v-show="!showPage" />
</template>

<script>
import Spinner from "./components/Spinner.vue";
import NProgress from "nprogress";

export default {
  components: {
    Spinner,
  },
  data() {
    return {
      showPage: false,
    };
  },
  methods: {
    onPageReady() {
      this.showPage = true;
      NProgress.done();
    },
  },
  created() {
    // this.fetchAuthUser();
    NProgress.configure({ speed: 200, showSpinner: false });
    this.$router.beforeEach(() => {
      // reset the showPage everytime the page is change
      this.showPage = false;
      NProgress.start();
    });
  },
};
</script>

<style>
@import "~nprogress/nprogress.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
