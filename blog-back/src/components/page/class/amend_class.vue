<template>
    <el-form :model="ruleForm" :rules="rules2" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <h3>{{typeData.label}}</h3>
        <el-form-item label="中文类名" prop="cn">
            <el-input type="text" v-model="ruleForm.cnname_one" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="英文类名" prop="en">
            <el-input v-model.number="ruleForm.enname_one"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        data() {
            var en = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入英文标识'));
                } else {
                    console.log(this.ruleForm.enname_one)
                    if (/^[A-Za-z]+$/.test(this.ruleForm.enname_one)) {
                        callback();
                    } else {
                        callback(new Error('请输入英文'));
                    }
                }
            };
            return {
                typeData:{
                    label: "",
                    url: ""
                },
                ruleForm: {
                    cnname_one: "",
                    enname_one: ""
                },
                sendForm:{
                    oldenname_one: "",
                    oldenname_two: ""
                },
                rules2: {
                    cn: [{
                        validator: "",
                        trigger: 'blur'
                    }],
                    en: [{
                        validator: en,
                        trigger: 'blur'
                    }]
                }
            };
        },
        created(){
            console.log(this.$route.params)
            console.log(this.$route.params.type)
            if(this.$route.params.type == "one"){
                this.typeData.label = "修改一级类名";
                this.typeData.url = "/api/back_class/amend_class_one";
                this.ruleForm.cnname_one = this.$route.params.data.onedata.cnname;
                this.ruleForm.enname_one = this.$route.params.data.onedata.enname;
                this.sendForm.oldenname_one = this.$route.params.data.onedata.enname;
            }else{
                this.typeData.label = "修改二级类名";
                this.typeData.url = "/api/back_class/amend_class_two";
                this.ruleForm.cnname_one = this.$route.params.data.cnname;
                this.ruleForm.enname_one = this.$route.params.data.enname;
                this.sendForm.oldenname_two = this.$route.params.data.enname;
            }
        },
        methods: {
            submitForm(formName) {
                var _this=this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        var sendData = {};
                        if(_this.$route.params.type == "one"){
                            sendData = _this.ruleForm;
                        }else{
                            sendData.cnname_two = _this.ruleForm.cnname_one;
                            sendData.enname_two = _this.ruleForm.enname_one;
                        }
                        Object.assign(_this.sendForm, sendData);
                        _this.axios.post(_this.typeData.url, _this.sendForm).then(function(data){
                             if(data.data.code==="1052" || data.data.code==="1062"){
                                _this.$message({
                                    message: data.data.msg,
                                    type: "success"
                                })
                            }else{
                                _this.$message({
                                    message : data.data.msg,
                                    type : "error"
                                })
                            }
                        })
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
    h3 {
        margin: 20px 0 20px 40px
    }
    
    .el-input{
        width:300px;
    }
</style>