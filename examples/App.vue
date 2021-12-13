<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    {{ txt }}
  </div>
<!--  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import test from '../src/index'
export default defineComponent({
  name: "App",
  components: {
    // HelloWorld,
  },
  setup(){
    const txt = test;
    return {
      txt
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
