<template>
    <div class="wenzhnag-list">
        <accordion></accordion>
    </div>
</template>

<script>
    import accordion from "./public/accordion";
    export default {
        name:"article-list",
        data(){
            return {

            }
        },
        components:{
            accordion:accordion
        }
    }
</script>

<style scope lang="scss">
    .wenzhnag-list{
        width:25%;
        height:100%;
    }
</style>