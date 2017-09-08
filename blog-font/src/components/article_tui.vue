<template>
    <div class="bozhu-tuijian">
        <carousel></carousel>
        <title-head></title-head>
        <list></list>
    </div>
</template>

<script>
    import carousel from "./public/carousel";
    import titleHead from "./public/title";
    import list from "./public/list";
    export default {
        name:"article",
        data(){
            return {

            }
        },
        components:{
            carousel:carousel,
            titleHead:titleHead,
            list:list
        }
    }
</script>

<style scope lang="scss">
    .bozhu-tuijian{
        width:65%;
        height:100%;
        border-bottom:1px solid #ccc;
    }
</style>