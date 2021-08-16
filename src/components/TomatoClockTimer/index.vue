<template>
  <v-card
    class="wrapper"
    color="#1E384C"
    min-height="600px"
    :class="{ 'menu-open': menuOpen }"
  >
    <v-app-bar class="navbar" absolute flat color="rgba(0, 0, 0, 0)">
      <v-spacer></v-spacer>
      <v-btn color="white" icon @click="toggleMenu">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <div class="menu">
      <ul class="menu__list">
        <li class="menu__item">
          <a href="#" @click.prevent="start('water')">
            <svg
              id="coffee-cup"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
            >
              <title>coffee-cup-01</title>
              <path
                class="water-glass"
                d="M39.92,45H25V43.21H38.15L43.14,4l2,.2ZM25,45H10.08L4.89,4.15l2-.2,5,39.26H25Z"
              />
              <path
                class="water-glass__water"
                d="M39.09,6.88s-3.13,2-5.48,0c-4.92,2.65-7.72,0-7.72,0s-4.59,2.76-7.94,0c-4.47,3.09-7,0-7,0l3.91,33.76H35Z"
              />
            </svg>
            <span>Water break</span>
          </a>
        </li>
        <li class="menu__item">
          <a href="#" @click.prevent="start('coffee')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
              <title>coffee-cup</title>
              <path
                class="coffee-cup"
                d="M49.42,21.07a9.69,9.69,0,0,0-2.17-6.55,10.16,10.16,0,0,0-7.08-3.12c-.14-2.47-.38-4-.38-4H36.58S42,39.54,20.43,39.56C-1.87,39.57,4.16,7.37,4.16,7.37H1.07S-4.29,43,20.43,43c9.31,0,14.35-5.06,17-11.37C40.47,31.4,49.43,29.84,49.42,21.07Zm-11,7.82a49,49,0,0,0,1.81-14.83,8.13,8.13,0,0,1,5.52,2.4,6.76,6.76,0,0,1,1.49,4.63C47.29,26.71,41.58,28.39,38.45,28.89Z"
              />
              <path
                class="coffee-cup__coffee"
                d="M7.07,11.94H33.73s3.72,23.65-13.3,23.65S7.07,11.94,7.07,11.94Z"
              />
            </svg>
            <span>Coffee break</span>
          </a>
        </li>
        <li class="menu__item">
          <a href="#" @click.prevent="start('break')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
              <title>clock</title>
              <path
                class="clock"
                d="M24.62,47.08A21.88,21.88,0,1,1,46.49,25.21,21.9,21.9,0,0,1,24.62,47.08Zm0-41.75A19.88,19.88,0,1,0,44.49,25.21,19.9,19.9,0,0,0,24.62,5.33Z"
              />
              <path
                class="clock__short"
                d="M34.49,26.71H24.62a1.5,1.5,0,0,1,0-3h9.88a1.5,1.5,0,0,1,0,3Z"
              />
              <path
                class="clock__long"
                d="M24.62,26.71a1.5,1.5,0,0,1-1.5-1.5V9.54a1.5,1.5,0,0,1,3,0V25.21A1.5,1.5,0,0,1,24.62,26.71Z"
              />
            </svg>
            <span>Office Break</span>
          </a>
        </li>
        <li class="menu__item">
          <a href="#" @click.prevent="start('beer')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
              <title>beer</title>
              <path
                class="beer-glass"
                d="M45.92,15.71c-1.63-1.88-6.55-1.15-9.2-.58-.15-2.82-.25-5.46-.26-7.76h-2c0,3.69.27,8.17.55,12.92.48,8.19,1.21,20.56-.59,21.86-3.17,2.29-29,2.49-31,.23C2,40.7,2.45,23.3,3.69,7.45l-1-.08-1-.08C1.08,15.1-.69,40.8,1.95,43.72c1.39,1.54,8.15,2.19,15.27,2.19,8,0,16.56-.83,18.38-2.14,1.3-.94,1.84-3.56,2-7.66,2-.05,6.17-.29,8.09-1.36.78-.44,1.3-1.49,1.62-3.32C48,27.21,47.61,17.67,45.92,15.71Zm-.4,13.59c-.27,3.16-.85,3.7-.84,3.7-1.4.78-5,1-7.1,1.11,0-3.71-.25-8.38-.58-13.93q-.09-1.53-.17-3c3.26-.71,6.88-.93,7.58-.13S46,24.13,45.52,29.3Z"
              />
              <path
                class="beer-glass__beer"
                d="M5.9,12.92s-2.57,25.8,0,27.71,24.3,1,26.59,0S32,12.92,32,12.92Z"
              />
            </svg>
            <span>Beer Break</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="time">
      <transition-group name="timer" tag="div">
        <div v-for="time in timer" class="timer__item" :key="time.id">
          {{ time.value }}
        </div>
      </transition-group>
    </div>
    <div class="waves" :style="waveStyles">
      <div
        class="wave wave--back"
        :style="{ color: activeReminder.waveBackColor }"
      >
        <div class="water">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 350 32"
            preserveAspectRatio="none"
          >
            <title>wave2</title>
            <path d="M350,17.32V32H0V17.32C116.56,65.94,175-39.51,350,17.32Z" />
          </svg>
        </div>
        <div class="water">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 350 32"
            preserveAspectRatio="none"
          >
            <title>wave2</title>
            <path d="M350,17.32V32H0V17.32C116.56,65.94,175-39.51,350,17.32Z" />
          </svg>
        </div>
      </div>
      <div
        class="wave wave--front"
        :style="{ color: activeReminder.waveFrontColor }"
      >
        <div class="water">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 350 32"
            preserveAspectRatio="none"
          >
            <title>wave2</title>
            <path d="M350,17.32V32H0V17.32C116.56,65.94,175-39.51,350,17.32Z" />
          </svg>
        </div>
        <div class="water">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 350 32"
            preserveAspectRatio="none"
          >
            <title>wave2</title>
            <path d="M350,17.32V32H0V17.32C116.56,65.94,175-39.51,350,17.32Z" />
          </svg>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="percent">
        <transition name="percent-left" mode="out-in">
          <div :key="percentsLeft">15</div>
        </transition>
        <span>%</span>
      </div>
    </div>
    <v-btn outlined rounded x-large class="btn">开始</v-btn>
  </v-card>
</template>

<script>
import settings from "@/settings.js";
export default {
  name: "TomatoClockTimer",
  data() {
    return {
      waveStyles: "",
      activeReminder: settings.water,
      menuOpen: false,
      percentsLeft: 100,
      timer: [{id:'0',value:'25:00'},{id:'1',value:'24:59'},{id:'2',value:'24:58'}],
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      if (this.menuOpen) {
        // this.pauseTimer();
        this.waveStyles = `transform: translate3d(0,100%,0); transition-delay: .25s;`;
      } else {
        // this.continueTimer();
        this.waveStyles = `transform: translate3d(0,0,0); transition-delay: .25s;`;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$blue-dark: #1e384c;
$blue: #2c7fbe;
$blue-light: #32bafa;
$green: #02c39a;

$stage-bg: $blue-dark;
.wrapper {
  overflow: hidden;
  &.menu-open {
    .menu {
      z-index: 25;
    }
    .time {
      transform: translate3d(0, -200%, 0);
      transition: 0.5s opacity, 0.5s transform;
      opacity: 0;
    }
    .btn {
      transform: translate3d(0, 200%, 0);
      transition-delay: 0s;
      opacity: 0;
    }
    .percent {
      transition: 0.4s opacity, 0.4s transform;
      transform: translate3d(0, 50%, 0);
      opacity: 0;
    }

    .menu__item {
      opacity: 1;
      transform: translate3d(0, 0, 0);

      &:nth-child(1) {
        transition-delay: 0.2s;
      }
      &:nth-child(2) {
        transition-delay: 0.3s;
      }
      &:nth-child(3) {
        transition-delay: 0.4s;
      }
      &:nth-child(4) {
        transition-delay: 0.5s;
      }
    }
  }
}
.navbar {
  z-index: 99;
}
.content {
  z-index: 20;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.percent {
  z-index: 2;
  position: relative;
  font-size: 7em;
  font-weight: 100;
  color: rgba(#fff, 0.7);
  transition: 0.4s 0.2s opacity, 0.4s 0.2s transform;

  > div {
    display: inline-block;
  }
  > span {
    // margin-left: -0.4em;
    font-size: 0.5em;
  }
}
.percent-left-enter-active,
.percent-left-leave-active {
  transition: transform 0.1s ease;
}
.percent-left-enter,
.percent-left-leave-to {
  transform: scale(1.05);
}
.btn {
  z-index: 20;
  position: absolute;
  width: 70%;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 1.5em;
  padding: 0.6em;

  color: rgba(#fff, 0.8);
  font-size: 1.1em;
  font-weight: 300;
  letter-spacing: 1px;
  text-transform: uppercase;

  &:hover {
    background: rgba(#fff, 0.3);
    color: rgba(#000, 0.5);
  }
}

.menu {
  z-index: 10;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  &__item {
    overflow: hidden;
    opacity: 0;
    transform: translate3d(0, 100%, 0);
    transition: 0.4s transform, 0.4s opacity;

    a {
      font-size: 1.8em;
      font-weight: 300;
      display: block;
      color: rgba(#fff, 0.5);
      text-transform: uppercase;
      text-decoration: none;
      padding: 0.5em 1.5em;

      span {
        display: inline-block;
        vertical-align: middle;
        transition: transform 0.3s;
      }

      &:hover,
      &:focus {
        svg {
          transform: scale(1.2);
        }

        .water-glass__water {
          fill: $blue-light;
          transform: scale(1, 0.8);
        }
        .coffee-cup__coffee {
          fill: #bf9e87;
          transform: scale(1, 0.8);
        }
        .beer-glass__beer {
          fill: #e18e02;
          transform: scale(1, 0.8);
        }
        .clock__short {
          fill: #02c39a;
          transform-origin: 0% 50%;
          transform: rotate(20deg);
          transition: transform 1s, color 0.2s;
        }
        .clock__long {
          fill: #02c39a;
          transition: transform 1s, color 0.2s;
          transform-origin: 50% 95%;
          transform: rotate(360deg);
        }
      }
    }

    svg {
      display: inline-block;
      vertical-align: middle;
      width: 1em;
      height: 1em;
      margin-right: 1em;
      transition: transform 0.3s;

      path {
        fill: #fff;
        transition: all 0.3s;
        transform-origin: 100% 100%;
      }
    }
  }
}

.time {
  overflow: hidden;
  padding: 1em;
  font-size: 1.1em;
  text-align: center;
  transition: 0.5s 0.2s opacity, 0.5s transform 0.2s;
}

.timer__item {
  transition: all 1s;
  margin-right: 10px;
  color: rgba(#fff, 0.8);

  &:first-child,
  &:nth-child(3) {
    color: rgba(#fff, 0.2);
  }
}
.timer-enter,
.timer-leave-to {
  opacity: 0;
  transform: translate3d(0, -100%, 0);
}
.timer-leave-to {
  transition-duration: 0.5s;
}
.timer-leave-active {
  transform: translate3d(0, 0, 0);
}

.waves {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  transition: 0.4s transform ease;
  transform-origin: bottom center;

  @media (min-width: 500px) {
    border-radius: 5px;
  }
}
.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: wave 1s linear infinite;

  &--front {
    z-index: 2;
    color: $blue-light;
  }

  &--back {
    z-index: 1;
    color: $blue;
    animation-direction: reverse;
  }
}

.water {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80%;
  background: currentColor;

  svg {
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
    bottom: 99.9%;
  }
}
.water:first-of-type {
  transform: translate(-100%, 0);
}

svg {
  fill: currentColor;
}

@keyframes wave {
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(50%, 0.5em, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes pulseAway {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1.4);
  }
}
</style>