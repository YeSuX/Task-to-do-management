<template>
  <v-card class="mx-auto" max-width="500">
    <v-card-title>目标任务</v-card-title>
    <v-list shaped class="wrapper" max-height="600px">
      <v-list-item-group v-model="model" multiple>
        <template v-for="n in 3">
          <v-list-item
            :key="n"
            :value="n"
            active-class="deep-purple--text text--accent-4"
          >
            <template v-slot:default="{ active }">
              <v-list-item-content>
                <v-list-item-title v-text="n"></v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-checkbox
                  :input-value="active"
                  color="deep-purple accent-4"
                ></v-checkbox>
              </v-list-item-action>
            </template>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
    <v-divider />
    <v-card-title>待办任务</v-card-title>
    <v-list shaped class="wrapper" max-height="600px">
      <v-list-item-group v-model="model" multiple>
        <template v-for="n in 6">
          <v-list-item
            :key="n"
            :value="n"
            active-class="deep-purple--text text--accent-4"
          >
            <template v-slot:default="{ active }">
              <v-list-item-content>
                <v-list-item-title v-text="n"></v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-checkbox
                  :input-value="active"
                  color="deep-purple accent-4"
                ></v-checkbox>
              </v-list-item-action>
            </template>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "ToDo",
  data() {
    return {
      items: ["Dog Photos", "Cat Photos", "", "Potatoes", "Carrots"],
      model: ["Carrots"],
    };
  },
};
</script>

<style>
</style>