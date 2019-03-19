<template>
  <div id="index_cp_navbar">
    <a href="./index.html">
      <div id="welcome"><p>Welcome, Cyrus</p></div>
    </a>

    <div id="logos">
      <a href="./dashboard.html"><img id="db_logo" src="../assets/dashboard_logo.png" alt="dashboard"/></a>
      <a href="./modules.html"><img id="md_logo" src="../assets/modules_logo.png" alt="modules"/></a>
      <a href="./planner.html"><img id="pn_logo" src="../assets/planner_logo.png" alt="planner"/></a>
      <a href="./settings.html" ><img id="st_logo" src="../assets/settings_logo.png" alt="settings"/></a>
      <a href=""><img id="lo_logo" src="../assets/logout_logo.png" alt="settings"/></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "index_cp_navbar"
};
</script>

<style>
#index_cp_navbar {
  background-color: black;
}

#welcome {
  float: left;
  height: 45px;
  vertical-align: middle;
  font-family: calibri light;
  font-size: 15px;
  color: white;
  padding-left: 10px;
}

#logos {
  text-align: right;
  padding-right: 10px;
}

#db_logo {
  height: 45px;
  width: 45px;
}

#md_logo {
  margin-bottom: 7px;
  height: 30px;
  width: 30px;
}

#pn_logo {
  height: 22px;
  width: 22px;
  margin-bottom: 12px;
  margin-left: 17px;
}

#st_logo {
  height: 22px;
  width: 22px;
  margin-bottom: 12px;
  margin-left: 14px;
}

#lo_logo {
  height: 30px;
  width: 30px;
  margin-bottom: 8px;
  margin-left: 10px;
}
</style>
