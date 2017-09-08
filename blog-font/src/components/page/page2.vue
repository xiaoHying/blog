<template>
    <div class="main">
        <list></list>
        <article-list></article-list>
    </div>
</template>

<script>
    import list from "../public/list";
    import articleList from "../article_list";
    export default {
        name: 'index',
        data () {
            return {
              
            }
        },
        components:{
            list:list,
            articleList:articleList
        }
    }
</script>
<style scoped lang='scss'>
    .main{
      width:100%;
      height:100%;
      display:flex;
      margin-top:2%;
      justify-content:space-around;
    }
</style>