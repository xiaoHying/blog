<template>
    <div>
        <el-table :data="classList" style="width: 100%">
            <el-table-column type="expand">
                <template scope="props">
                    <el-table :data="props.row.twodata" style="width: 100%">
                        <el-table-column label="二级类名" prop="cnname"></el-table-column>
                        <el-table-column label="二级标识" prop="enname"></el-table-column>
                        <el-table-column label="操作" prop="">
                            <template scope="scope">
                                <el-button size="small" @click="handleEditTwo(scope.$index, scope.row)">编辑</el-button>
                                <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row, 'two')">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </template>
            </el-table-column>
            <el-table-column label="一级类名" prop="onedata.cnname"></el-table-column>
            <el-table-column label="一级标识" prop="onedata.enname"></el-table-column>
            <el-table-column label="操作" prop="">
                <template scope="scope">
                    <el-button size="small" @click="handleEditOne(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row, 'one')">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
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
        methods: {
            // 修改
            handleEditOne(index, row) {
                this.$router.push({
                    name:"amend_class",
                    params:{
                        data:row,
                        type:"one"
                    }
                })
            },
            handleEditTwo(index, row) {
                this.$router.push({
                    name:"amend_class",
                    params:{
                        data:row,
                        type:"two"
                    }
                })
            },
            // 删除弹出框
            handleDelete(index, row, type) {
                console.log(row)
                console.log(row.id)     
                console.log(type)
                this.$confirm('此操作将永久删除, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    var sendDel = {},
                        url = ""
                    if(type === 'one'){
                        sendDel = {
                            id: row.onedata.id,
                            enname_one: row.onedata.enname
                        }
                        url = "/api/back_class/delete_one"
                    }else{
                        console.log(row.id)
                        sendDel = {
                            oneId: row.parent_id,
                            twoId: row.id,
                            enname_one: row.enname
                        }
                        url = "/api/back_class/delete_two"
                    }
                    
                    this.axios.post(url, sendDel).then(function(data){
                        if(data.data.code == "1071"){
                            this.$message({
                                type: 'success',
                                message: data.data.msg
                            });
                            this.$router.go(0);
                        }else{
                            this.$message({
                                type: 'error',
                                message: data.data.msg
                            });
                        }
                    }.bind(this))
                }).catch((err) => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });          
                    console.log(err);
                });
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