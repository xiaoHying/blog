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

<style>
    *{
      margin:0;
      padding:0;
      font-family:"Microsoft YaHei"
    }
    html,body，#app{
      width:100%;
      height:100%;
    }
    li{
      list-style: none;
    }
    input,button{
      outline:none;
      border:none;
    }
</style>
