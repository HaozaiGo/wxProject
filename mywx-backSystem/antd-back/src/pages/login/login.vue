<template>
  <div>
    <img src="@/assets/images/loginBg.jpg" alt="" class="loginBg" />
    <div class="loginBox">
      <div class="welcome">Welcome</div>

      <a-form
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        ref="ruleForm"
        :model="form"
        :rules="rules"
       
      >
        <a-form-item name="name">
          <a-input v-model:value="form.name" placeholder="请输入账号">
            <template #prefix><user-outlined type="user" /></template>
          </a-input>
        </a-form-item>
        <a-form-item name="password">
          <a-input-password
            v-model:value="form.password"
            placeholder="输入您的密码"
          >
            <template #prefix><UnlockOutlined /></template>
          </a-input-password>
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 24, offset: 6 }">
          <a-button type="primary" @click="onSubmit" html-type="submit"> 登录 </a-button>
          <a-button style="margin-left: 2vw" @click="resetFields">
            重置
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import { useForm } from "@ant-design-vue/use";
import { UserOutlined, UnlockOutlined } from "@ant-design/icons-vue";
import { login } from "@/api/api";
export default {
  components: {
    UserOutlined,
    UnlockOutlined,
  },
  data() {
    return {
      labelCol: { span: 2 },
      wrapperCol: { span: 20, offset: 2 },
      form: {
        name: "",
        password: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please input username",
          },
        ],
        password: [
          {
            required: true,
            message: "Please input password",
          },
          {
            min: 3,
            max: 10,
            message: "Length should be 3 to 5",
            trigger: "blur",
          },
        ],
      },
    };
  },

  methods: {
    // loginMethod(formData){
    //   login(formData).then((res)=>{
    //     console.log(res)
    //   })
    // },
    async loginMethod(formData) {

      const logining = await login(formData)
      console.log(logining)
    },
    onSubmit() {
      const Data = { username : this.form.name , password : this.form.password};
      this.$refs.ruleForm
        .validate()
        .then(() => {
          this.loginMethod(Data);
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
  onLoad() {
  
  },
};
</script>

<style scoped>
.loginBg {
  height: 100vh;
  width: 100%;
}
.loginBox {
  position: absolute;
  width: 25vw;
  height: 450px;
  top: 20%;
  right: 22%;
  padding: 60px 3vw 100px 3vw;
  background: rgba(0, 0, 0, 0.3);
}
.welcome {
  color: #8ebfd0;
  font-size: 48px;
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #8ebfd0;
  margin-bottom: 80px;
}
</style>