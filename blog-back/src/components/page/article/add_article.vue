<template>
    <div style="width:700px">
        <el-form :model="ruleForm" :rules="rules2" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <h3>修改接口文档</h3>
            <el-form-item label="标题" prop="title">
                <el-input type="text" v-model="ruleForm.title" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="一级分类" prop="backorfont">
                <el-select v-model="ruleForm.classList" placeholder="请选择">
                    <el-option v-for="item in classListOne" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="二级分类" prop="type">
                <el-select v-model="ruleForm.type" placeholder="请选择">
                    <el-option v-for="item in classListTwo" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="是否推荐" prop="type">
                <el-radio class="radio" v-model="radio" label="1">是</el-radio>
                <el-radio class="radio" v-model="radio" label="0">否</el-radio>
            </el-form-item>
            <el-form-item label="是否显示" prop="type">
                <el-radio class="radio" v-model="radio" label="1">是</el-radio>
                <el-radio class="radio" v-model="radio" label="0">否</el-radio>
            </el-form-item>
            <el-form-item label="作者" prop="">
                <el-input v-model.number="ruleForm.editor"></el-input>
            </el-form-item>
            <el-form-item label="导读" prop="" >
                <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="ruleForm2.sendparams" :autosize='{ minRows: 2, maxRows: 10 }'></el-input>
            </el-form-item>
            <el-form-item label="时间" prop="">
                <el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0"></el-date-picker>
            </el-form-item>
            <el-form-item label="内容" prop="">
                <quill-editor></quill-editor>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                classListOne: [],
                classListTwo: [],
                ruleForm: {
                    title: "",
                    editor: "",
                    backorfont: "",
                    type: "",
                    sendparams: "",
                    getparams: "",
                },
                rules2: {
                    title: [{
                        required: true,
                        message: '请输入标题',
                        trigger: 'blur'
                    }],
                    editor: [{
                        required: true,
                        message: '请输入作者',
                        trigger: 'blur'
                    }],
                    classList: [{
                        required: true,
                        message: '请选择接口归属类型',
                        trigger: 'blur'
                    }],
                    type: [{
                        required: true,
                        message: '请选择接口请求类型',
                        trigger: 'blur'
                    }],
                    sendparams: [{
                        required: true,
                        message: '请输入接口发送参数',
                        trigger: 'blur'
                    }],
                    getparams: [{
                        required: true,
                        message: '请输入接口返回参数',
                        trigger: 'blur'
                    }]
                }
            };
        },
        created() {
            // console.log(this.$route)
            // this.ruleForm2 = this.$route.params
            this.axios.get("/api/back_article/getClass").then(function(data){
                console.log(data);
            })
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.axios.post("/api/apilist/amend", this.ruleForm2).then(function(data) {
                            if (data.data.code == "2022") {
                                this.open2()
                                this.$router.go(-1)
                            } else {
                                this.open4()
                            }
                        }.bind(this))
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            // 成功消息提示
            open2() {
                this.$message({
                    message: '恭喜你，修改消息成功',
                    type: 'success'
                });
            },
            // 失败消息提示
            open4() {
                this.$message.error('不好意思，修改失败');
            }
        }
    }
</script>

<style scoped>
    h3 {
        margin: 20px 0 20px 40px
    }
    
    .textarea {
        width: 400px;
        height: 500px;
    }
</style>