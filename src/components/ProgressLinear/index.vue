<template>
  <v-progress-linear value="15" height="20px" rounded>
    <template v-slot:default="{ value }">
      <strong>{{ Math.ceil(value) }}%</strong>
    </template>
  </v-progress-linear>
</template>

<script>
export default {
  name:'ProgressLinear'
};
</script>

<style>
</style>