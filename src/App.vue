<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  html{
    overflow: hidden;
    font-size: 16px;
  }
  body{
    box-sizing: border-box;
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
