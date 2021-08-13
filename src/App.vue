<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <navigation-drawer-items></navigation-drawer-items>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
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
  computed: {
    title() {
      return this.$route.name;
    },
  },
};
</script>
