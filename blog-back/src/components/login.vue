<template>
  <div class="login">
    <div class="login-box">
      <p><img src="/images/logo-big.png" /></p>
      <h3>欢迎个人博客</h3>
      <ul class="login-ul">
        <li v-focus:test="loginname">
          <p>
            <label>账号：</label>
            <input type="text" placeholder="请输入账号" v-model.lazy="loginname.val" @blur="fn(loginname)">
          </p>
          <i v-if="loginname.state">{{loginname.msg}}</i>
        </li>
        <li v-focus:required="loginpw">
          <p>
            <label>密码：</label>
            <input type="password" placeholder="请输入密码" v-model.lazy="loginpw.val" @blur="fn(loginpw)">
          </p>
          <i v-if="loginpw.state">{{loginpw.msg}}</i>
        </li>
      </ul>
      <div>
        <button class="loginBtn" @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      loginname: {
        val: "",
        msgread: "您输入的姓名不符合中文格式",
        msg: "您输入的姓名不符合中文格式",
        test: /^[a-zA-z]+$/,
        state: false
      },
      loginpw: {
        val: "",
        msgread: "您输入的密码格式不对",
        blur: false,
        msg: "您输入的密码格式不对",
        test: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/,
        state: false
      }
    }
  },
  methods: {
    login() {
      // 判断是否值是否正确
      var _this = this
      if (!this.loginpw.state && !this.loginname.state && this.loginpw.val != "" && this.loginname.val != "") {
        this.axios.post("/api/back_class", {
          loginname: this.loginname.val,
          loginpw: this.loginpw.val
        }).then(function(data) {  
          console.log(data)
          _this.$message(data.data.msg);
          if (data.data.code == "1001") {
            sessionStorage.setItem("userId", data.data.userid);
            sessionStorage.setItem("username", _this.loginname.val);
            _this.$router.push("/main")
          }
        })
      } else {
        alert("请正确填写用户名密码")
      }
    },
    // 必填项的验证
    fn(val) {
      val.blur = true
    }
  },
  directives: {
    focus: {
      componentUpdated(el, option, vnode, oldVnode) {
        var $testState = option.value.test.test(option.value.val)
        if (option.value.val != "") {
          if ($testState) {
            option.value.state = false
          } else {
            option.value.state = true
          }
          option.value.msg = option.oldValue.msgread
        } else {
          if (option.arg == "required" && option.value.blur) {
            option.value.state = true
            option.value.msg = "不能为空"
          } else {
            option.value.state = false
          }
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .login{
    width:100%;
    height:100%;
    background:url("/images/backgrounds/1.jpg") no-repeat;
    background-size:100% 100%;
  }
  .login-box{
    width:50%;
    height:100%;
    background:rgba(0,0,0,0.5);
    margin:0 auto;
    box-sizing:border-box;
    padding:5% 10%;
    img{
      display:block;
      margin:auto;
      width:70%;
    }
    h3{
      color:#fff;
      text-align:center;
      margin-top:2%;
    }
  }
  .login-ul{
    width:100%;
    margin:10% auto 5%;
    li,p{
      width:100%;
      color:#fff;
    }
    li{
      margin-top:5%;
      line-height:30px;
    }
    p{
      display:flex;
    }
    label{
      width:20%;
    }
    input{
      width:80%;
      height:30px;
      border-radius:5px;
      text-indent:10px;
      border:none;
    }
    i{
      font-style:normal;
      color:palevioletred;
      display:block
    }
  }
  .loginBtn{
    display:block;
    width:100%;
    height:30px;
    margin:30px auto;
    border:none;
    outline:none;
    background:purple;
    color:#fff;
    border-radius:5px;
  }
</style>
