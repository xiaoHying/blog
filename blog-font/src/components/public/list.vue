<template>
    <div class="articles">
        <div class="article" v-for="i in article">
            <div class="article-left">
                <a href="javascript:;"><img src="images/article1.jpg"></a>
            </div>
            <div class="article-right">
                <div class="article-title">
                    <a class="title" href="javascript:;">{{i.article_name}}</a>
                </div>
                <p class="article-text">{{i.daodu}}</p>
                <a href="javascript:;" class="more"><img src="images/more.png" alt=""></a>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState , mapMutations , mapActions , mapGetter} from "vuex"
    import {SHOW_ARTICLE} from "@/store/type_mutation"
    export default {
        name:"list",
        data(){
            return {
                
            }
        },
        computed:{
            ...mapState({
                article:state => state.navA.article
            })
        },
        methods:{
            ...mapActions([
                SHOW_ARTICLE.action_type
            ])
        },
        createdd(){
            
        },
        mounted(){
            this[SHOW_ARTICLE.action_type](this);
            // console.log(navIndex)
        }
    }
</script>

<style scoped lang='scss'>
    .article {
        border-bottom: 1px solid #eee;
        margin-top: 3.5em;
        padding-bottom: 3em;
        display:flex;
        .article-left {
            width: 40%;
            margin-right: 3%;
            img {
                width: 100%;
                opacity: 0.8;
                transition: 0.5s all;
                transition: 0.5s all;
            }
            img:hover {
                opacity: 1;
                transition: 0.5s all;
                transition: 0.5s all;
            }
        }
        .article-right {
            width: 57%;
            position: relative;
            .more{
                position: absolute;
                bottom:0;
                right:20px;
            }
        }
    }
    .article:last-child {
        border: none;
    }

    a.title {
        font-size: 1.9em;
        color: #000;
        text-decoration:none;
    }

    a.title:hover {
        color: #84754e;
        text-decoration:underline;
    }

    .article-title{
        color: #B5B3B3;
        font-size: 0.875em;
        margin: 0.5em 0;
        text-transform: uppercase;
    }

</style>
