<template>
  <div id="app">
     <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@import './assets/styles.css';
  html, body{
    width: 100vw;
    height: 100vh;
    padding: 0px;
    margin: 0px;
  }
  .container{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
</style>
