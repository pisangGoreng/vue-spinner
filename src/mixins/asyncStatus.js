// mixins -> asyncStatus.js
export default {
  data() {
    return {
      asyncStatus_ready: false,
    };
  },
  methods: {
    asyncDataStatus_fetched() {
      this.asyncStatus_ready = true;
      this.$emit("ready");
    },
  },
};
