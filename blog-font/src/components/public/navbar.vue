<template>
    <div>
        <nav class="navbar" role="navigation">
            <ul class="navbar-nav">
                <li>
                    <router-link to="/">首页</router-link>
                </li>
                <li v-for="i in navOne">
                    <router-link :to='i.enname'>{{i.cnname}}</router-link>
                </li>
            </ul>
            
            <div id="sb-search" class="sb-search">
                <form>
                    <input v-show="searchInp" class="sb-search-input" placeholder="Enter your search term..." type="search" name="search" id="search">
                    <!-- <input class="sb-search-submit" type="submit" value="搜索" @click="searchInp=true"> -->
                    <span class="sb-icon-search" @click="searchInp=!searchInp"></span>
                </form>
            </div>
        </nav>
    </div>
</template>

<script>
    import {mapState , mapMutations , mapActions , mapGetter} from "vuex"
    import {NAV_INDEX} from "@/store/type_mutation"
    export default {
        name: 'head',
        data () {
            return {
                routerLink:true,
                searchInp:false
            }
        },
        computed:{
            ...mapState({
                navOne:state => state.navA.navOne
            })
        },
        methods:{
            ...mapActions([
                NAV_INDEX.action_type
            ])
        },
        mounted(){
            this[NAV_INDEX.action_type](this);
            // console.log(navIndex)
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .navbar{
        width:100%;
        height:50px;
        line-height:50px;
        border-bottom:1px solid #ccc;
    }
    .navbar{
        display:flex;
        justify-content:space-between;
    }
    .sb-search{
        width:20%;
        position:relative;
        form{
            width:100%;
            height:100%;
        }
        .sb-search-input{
            height:30px;
            border-radius: 5px;
            border:1px solid #ccc;
            position: absolute;
            right:40px;
            top:10px;
            text-indent:10px;
        }
        .sb-search-submit{
            background:none;
        }
        .sb-icon-search{
            display:block;
            width:30px;
            height:45px;
            background:url('/images/search.png') no-repeat;
            position: absolute;
            top:2px;
            right:10px;
        }
    }
    a{
        text-decoration: none;
    }
    .navbar-nav{
        width:75%;
        display:flex;
        li{
            font-weight:bold;
            font-size:1.5em;
            width:20%;
            text-align:center;
        }
        li a{
            color:#666;
        }
        li a:hover{
            color:#84754e;
        }
        .router-link-active{
            color:#84754e;
        }
    }
</style>
