<template>
  <div class="wrapper">
    <v-row class="total-duration-progress-bar">
      <v-col>
        <progress-linear></progress-linear>
      </v-col>
    </v-row>
    <v-row class="pompdprp-wrapper">
      <v-col cols="12" sm="6" class="tomatoContainer">
        <tomato-clock-timer></tomato-clock-timer>
      </v-col>
      <v-col cols="12" sm="6" class="todoContainer">
        <to-do></to-do>
      </v-col>
    </v-row>
    <v-row class="time-record">
      <v-col> time record </v-col>
    </v-row>
  </div>
</template>

<script>
import ProgressLinear from "@/components/ProgressLinear";
import TomatoClockTimer from "@/components/TomatoClockTimer";
import ToDo from "@/components/ToDo";

export default {
  components: {
    ProgressLinear,
    TomatoClockTimer,
    ToDo
  },
  data() {
    return {
      value: 0,
    };
  },
};
</script>

<style>
</style>