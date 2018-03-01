<template>
  <div class="login">
    <div class="login-bg">
      <div class="l-box">
        <img src="../../assets/logo.png" alt="">
        <h3>社保公积金业务管理系统</h3>
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm formbox">
          <el-form-item label="" prop="nickname" label-width='0'>
            <el-input type="text" v-model="ruleForm2.nickname" auto-complete="off" placeholder="请输入用户名称"></el-input>
          </el-form-item>
          <el-form-item label="" prop="pass" label-width='0'>
            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="请输入登录密码"></el-input>
          </el-form-item>
          <el-form-item class="submit">
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="l-b">
      <p>Copyright © https://www.sclonsee.com, All Rights Reserved.<br>
      Email : 281250541@qq.com QQ: 281250541 手机：18040332820</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    var validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm2: {
        nickname: '',
        pass: ''
      },
      rules2: {
        nickname: [
          { validator: validateName, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.post('/admin/admin-login', {
            name: this.ruleForm2.nickname,
            pass: this.ruleForm2.pass
          }).then((res) => {
            if (res.data.status === 200) {
              this.$message({
                message: '登录成功',
                type: 'success'
              })
              // this.$router.push({ path: '/' })
            } else {
              this.$message({
                message: res.data.message,
                type: 'info'
              })
            }
          })
            .catch((err) => {
              console.log(err)
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style>
.login{
  height: 100%;
}
.login-bg{
  background: url('../../assets/bg.png') no-repeat 100% 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.l-box{
  background-color: #fff;
  text-align: center;
  padding: 20px 50px;
}
.submit .el-form-item__content{
  margin-left: 0 !important
}
.l-b{
  text-align: center;
  font-size: 12px;
  color: #999;
}
</style>
