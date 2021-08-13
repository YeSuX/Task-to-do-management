<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <navigation-drawer-items></navigation-drawer-items>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>今天</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavigationDrawerItems from "@/views/NavigationDrawerItems";
export default {
  name: "App",
  components: {
    NavigationDrawerItems,
  },
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
