<template>
    <div class="index">
        <navbar></navbar>
        <router-view></router-view>
    </div>
</template>

<script>
    import navbar from "./public/navbar";
    export default {
        name: 'home',
        data () {
            return {
              
            }
        },
        components:{
            navbar:navbar
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

</style>
