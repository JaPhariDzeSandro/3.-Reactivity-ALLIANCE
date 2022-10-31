const app = Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  watch: {
    count(value) {
      if (value > 0) {
        setTimeout(() => {
          this.count = 0;
        }, 5000);
      }
    },
  },
  computed: {
    resultState() {
      if (this.count < 37) {
        return "Not there yet";
      } else if (this.count > 37) {
        return "Too much!";
      } else {
        return 37;
      }
    },
  },
  methods: {
    calculator(n) {
      this.count = this.count + n;
    },
  },
}).mount("#assignment");
