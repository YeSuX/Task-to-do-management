<template>
  <div>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6"> 任务待办 </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link :to="item.link">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "NavigationDrawerItems",
  data() {
    return {
      items: [
        { title: "今天", icon: "mdi-home-outline",link:'today' },
        { title: "待办", icon: "mdi-format-list-checks" ,link:'todo'},
        { title: "日程", icon: "mdi-calendar-today" ,link:'schedule'},
        { title: "关于", icon: "mdi-information-outline" ,link:'about'},
      ],
      right: null,
    };
  },
};
</script>

<style>
</style>