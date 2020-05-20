<!--
 * @Author: your name
 * @Date: 2020-05-19 16:20:34
 * @LastEditTime: 2020-05-20 09:55:53
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \jeft-vue-plugin\jeft-vue-confirm\examples\App.vue
--> 
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="点击我弹出confirm"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
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
