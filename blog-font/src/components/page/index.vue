<template>
    <div class="main">
        <article-tui></article-tui>
        <article-list></article-list>
    </div>
</template>

<script>
    import articleTui from "../article_tui";
    import articleList from "../article_list";
    export default {
        name: 'index',
        data () {
            return {
              
            }
        },
        components:{
            articleTui:articleTui,
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