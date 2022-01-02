<template>
  <!-- asyncStatus_ready property from mixin -->
  <div v-show="asyncStatus_ready" class="hello"></div>
  <div v-show="!asyncStatus_ready">
    <spinner />
  </div>
</template>

<script>
import Spinner from "./Spinner.vue";
import asyncStatus from "../mixins/asyncStatus";
export default {
  components: {
    Spinner,
  },
  mixins: [asyncStatus],
  async created() {
    // fetch some data in here ...
    setTimeout(() => {
      this.asyncDataStatus_fetched(); // this method from mixin
    }, 3000);
  },
};
</script>

<style scoped></style>
