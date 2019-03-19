import "./styles.css";
import Vue from "vue";
import navbar from "./components/navbar.vue";

new Vue({
  render: h => h(cp_navbar)
}).$mount(`#navapp`);

