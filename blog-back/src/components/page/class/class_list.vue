<template>
    <div>
        <el-row v-for="i in classList">
            <el-col :span="6">
                <div class="grid-content bg-purple">一级类名：{{i.onedata.cnname}}</div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-light">标识：{{i.onedata.enname}}</div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">文章数量：0</div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-light">
                    <button>修改</button>
                    <button>删除</button>
                </div>
            </el-col>
            <el-row v-for="j in i.twodata">
                <el-col :span="6">
                    <div class="grid-content bg-purple">二级类名：{{j.cnname}}</div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple-light">标识：{{j.enname}}</div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">文章数量：0</div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple-light">
                        <button>修改</button>
                        <button @click="del()">删除</button>
                    </div>
                </el-col>
            </el-row>
        </el-row>
    </div>
</template>
<script>
    export default {
        name:"class-list",
        data(){
            return {
                classList:null
            }
        },
        mounted(){
            var _this = this;
            this.axios.get("/api/back_class/class_list").then(function(data){
                _this.classList = data.data.data;
                if(data.data.code==="1043"){
                    _this.$message({
                        message:data.data.msg,
                        type:"success"
                    })
                }else{
                    _this.$message({
                        message:data.data.msg,
                        type:"error"
                    })
                }
            },function(err){
                console.log(err);
            })
        },
        methods:{
            del(){

            }
        }
    }    
</script>
<style scoped lang="scss">
    .el-row {
        margin-bottom: 20px;
        &:last-child {
        margin-bottom: 0;
        }
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
        line-height:36px;
        text-align:left;
        text-indent:20px;
    }
</style>