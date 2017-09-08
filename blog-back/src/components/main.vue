<template>
    <div class="container">
        <header>
            <div class="log">
                <p>个人博客后台管理系统</p>
            </div>
            <div class="welcome">
                当前登录账户：{{username}}
            </div>
        </header>
        <main>
            <div class="pageLiat">
                <page-list></page-list>
            </div>
            <div class="pageContent">
                 <router-view ></router-view>
            </div>
        </main>
    </div>
</template>
<script>
    import pageList from './page/main_left.vue'
    export default {
        data() {
            return {
                activeNames: ['1'],
                username: ""
            };
        },
        components: {
            pageList
        },
        mounted() {
            this.username = sessionStorage.getItem("username")
        }
    }
</script>
<style scoped lang="scss">
    .container {
        width: 100%;
        height: 100%;
        header {
            width: 100%;
            height: 50px;
            line-height: 50px;
            padding: 0 10px;
            box-sizing: border-box;
            background: url("/images/backgrounds/1.jpg") no-repeat;
            background-size: 100% 100%;
            color: #fff;
            .log {
                float: left;
            }
            .welcome {
                float: right;
            }
        }
        main {
            width: 100%;
            display: flex;
            .pageLiat {
                width: 200px;
            }
            .pageContent {
                width: 1200px;
            }
        }
    }
</style>