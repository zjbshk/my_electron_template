<template>
  <div id="wrapper">
    <div id="particles-js"></div>

    

  </div>
</template>

<script>
  import 'particles.js'
  import particlesJson from '../assets/particles.json'

  export default {
    name: 'landing-page',
    data() {
      return {
      }
    },
    methods: {

    },
    mounted() {
      window.particlesJS('particles-js', particlesJson)
    }
  }
</script>

<style>
  #wrapper {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  #particles-js {
    background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576910407506&di=94c5e27462f320c2f024a1c472b1edfd&imgtype=0&src=http%3A%2F%2Fwww.jiahengfei.cn%2Frequest%2Fimg%2Fbgok%2Fbgok.jpg');
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    position: absolute;
    left: 0;
    top: 0;
  }

  canvas {
    height: 99.5% !important;
  }
</style>
