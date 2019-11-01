<template>
    <el-container  direction="vertical">
        <top-bar></top-bar>
        <el-main>
            <el-row>
                <el-col :xs="24" :sm="8" :md="8" :lg="8" :offset="8">
                    <el-form :rules="rules" ref="form" :model="form" label-width="80px" label-position="right" size="medium">
                        <el-divider content-position="right"><h4>新会员注册</h4></el-divider>
                        <el-row>
                            <el-col :xs="24" :sm="16" :md="16" :lg="16">
                                <el-form-item label="邮箱" prop="email" >
                                    <el-input v-model="form.email" placeholder="邮箱"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :xs="24" :sm="16" :md="16" :lg="16">
                                <el-form-item label="昵称" prop="userName">
                                    <el-input v-model="form.nickname"  placeholder="昵称"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :xs="24" :sm="16" :md="16" :lg="16">
                                <el-form-item label="密码" prop="userIdNo">
                                    <el-input v-model="form.password"  placeholder="密码"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :xs="24" :sm="16" :md="16" :lg="16">
                                <el-form-item label="确认密码" prop="userIdNo">
                                    <el-input v-model="form.repassword"  placeholder="确认密码"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>

                        <el-row>
                            <el-col :xs="24" :sm="16" :md="16" :lg="16">
                                <el-form-item label="验证码" prop="verificationCode">
                                    <el-input v-model="form.verificationCode"  placeholder="验证码"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>

                        <el-row>
                            <el-col :xs="24" :sm="16" :md="16" :lg="16">
                                <el-form-item label="" prop="verificationCode" style="text-align: left;">
                                    <el-checkbox v-model="form.readbook"  true-label="1" false-label="0">已阅读并同意</el-checkbox>
                                    <el-link type="warning" :underline="false"  @click="drawer = true">会员协议</el-link>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        
                        <el-button type="primary" @click="formsubmit('form')">提交</el-button>
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
                nickname: "",
                password: "",
                repassword: "",
                verificationCode: "",
                readbook: ""
            },
            rules: {
                
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