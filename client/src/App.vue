<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js"></script>
<script>

export default {
  name: 'App',
  data(){
  }
}
</script>

<style>
  #app{
    overflow: hidden;
  }
</style>

