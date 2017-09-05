<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  *{
    margin:0;
    padding:0;
    list-style:none;
  }
  html,body,#app{
    width:100%;
    height:100%;
  }
  a{
    text-decoration: none
  }
</style>
