import "./styles.css";
import Vue from "vue";
import index_cp_navbar from "./components/index_cp_navbar.vue";

new Vue({
  render: h => h(index_cp_navbar)
}).$mount(`#index_cp_navbar`);