<template>
    <el-container  direction="vertical">
        <top-bar></top-bar>
        <el-main style="padding-top:90px">
            <el-row>
                <el-col :xs="24" :sm="6" :md="6" :lg="6" :offset="9">
                    <el-form :rules="rules" ref="form" :model="form" label-width="80px" label-position="left" size="medium">
                        <el-divider content-position="right"><h4>登录</h4></el-divider>
                        <el-row>
                            <el-col :xs="24" :sm="24" :md="24" :lg="24">
                                <el-form-item label="邮箱" prop="email" >
                                    <el-input v-model="form.email" placeholder="邮箱"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :xs="24" :sm="24" :md="24" :lg="24">
                                <el-form-item label="密码" prop="password">
                                    <el-input v-model="form.password" show-password  placeholder="密码"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :xs="24" :sm="24" :md="24" :lg="24">
                                <el-form-item label="验证码" prop="verificationCode">
                                    <el-input v-model="form.verificationCode"  placeholder="验证码"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>

                        <el-row>
                            <el-col :xs="24" :sm="24" :md="24" :lg="24">
                                <el-button type="primary" style="width: 100%;" size="medium"  @click="formsubmit('form')">登录</el-button>
                            </el-col>
                        </el-row>

                        <el-row>
                            <el-col :xs="24" :sm="24" :md="24" :lg="24" style="padding-top:20px">
                                <div class="pull-left">
                                    没有账号？<b><el-link :underline="false" type="primary">注册</el-link></b>
                                </div>
                                <div class="pull-right">
                                    <b><el-link :underline="false" type="primary" >找回密码</el-link></b>
                                    <b style="margin-left:10px;"><el-link :underline="false" type="primary">查找账号</el-link></b>
                                </div>
                            </el-col>
                        </el-row>
                        
                    </el-form>
                </el-col>
            </el-row>
        </el-main>
        <foot-bar></foot-bar>
    </el-container>
</template>
<script>
export default {
    data() {
        return {
            query: {
            },

            form: {
                email: "",
                password: "",
                verificationCode: "",
            },
            rules: {
                email: [
                    {required:true, message:'邮箱不能为空', trigger: 'blur'},
                    {pattern:/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, message: "请输入正确的邮箱", trigger: 'blur'}
                ],

                password: [
                    {required:true, message:'密码不能为空', trigger: 'blur'},
                    {pattern:/^[a-zA-Z0-9_-]/, message: "密码由字母和数字组成", trigger: 'blur'}
                ],

                verificationCode: [
                    {required:true, message:'图形验证码不能为空', trigger: 'blur'},
                ],
            },
        }      
    },
    created() {
    },

    mounted(){
    },
    
    methods: {

        checkForm: function (formName) {
            var result  = false;
            this.$refs[formName].validate((valid) => {
                    if (valid) {
                        result = true;
                    } else {
                        result = false;
                        return false;
                    }
            });
            return result;
        },

        formsubmit: function (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.onSubmit();
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },

        onSubmit: async function () {
            const result = await this.$axios.post('', this.form.bankList);
            if (result.success) {
               
            }
        },
    },
}
</script>
<style scoped>
</style>