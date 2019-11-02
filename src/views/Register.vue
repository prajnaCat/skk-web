<template>
    <el-container  direction="vertical">
        <top-bar></top-bar>
        <el-main style="padding-top:90px">
            <el-row>
                <el-col :xs="24" :sm="6" :md="6" :lg="6" :offset="9">
                    <el-form :rules="rules" ref="form" :model="form" label-width="80px" label-position="left" size="medium">
                        <el-divider content-position="right"><h4>新会员注册</h4></el-divider>
                        <el-row>
                            <el-col :xs="24" :sm="24" :md="24" :lg="24">
                                <el-form-item label="邮箱" prop="email" >
                                    <el-input v-model="form.email" placeholder="邮箱"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :xs="24" :sm="24" :md="24" :lg="24">
                                <el-form-item label="昵称" prop="nickname">
                                    <el-input v-model="form.nickname"  placeholder="昵称"></el-input>
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
                                <el-form-item label="确认密码" prop="repassword">
                                    <el-input v-model="form.repassword" show-password  placeholder="确认密码"></el-input>
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
                                <el-form-item label="" prop="readbook" style="text-align: left;">
                                    <el-checkbox v-model="form.readbook"  true-label="1" false-label="0">已阅读并同意</el-checkbox>
                                    <el-link type="warning" :underline="false"  @click="drawer = true">会员协议</el-link>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :xs="24" :sm="24" :md="24" :lg="24">
                                <el-button type="primary" style="width: 100%;"  @click="formsubmit('form')">提交</el-button>
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
        var checkRepassword = (rule, value, callback) => {
            if (value !== this.form.password) {
                callback(new Error('两次输入密码不一致!'))
            } else {
                callback()
            }
        }
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
                email: [
                    {required:true, message:'邮箱不能为空', trigger: 'blur'},
                    {pattern:/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, message: "请输入正确的邮箱", trigger: 'blur'}
                ],

                nickname: [
                    {required:true, message:'昵称不能为空', trigger: 'blur'},
                    {pattern:/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, message: "请输入合法昵称", trigger: 'blur'}
                ],

                password: [
                    {required:true, message:'密码不能为空', trigger: 'blur'},
                    {pattern:/^[a-zA-Z0-9_-]/, message: "密码由字母和数字组成", trigger: 'blur'}
                ],

                repassword: [
                    {required:true, message:'确认密码不能为空', trigger: 'blur'},
                    {required:true, validator: checkRepassword, trigger: 'blur'},
                ],

                verificationCode: [
                    {required:true, message:'图形验证码不能为空', trigger: 'blur'},
                ],

                readbook: [
                    {required:true, message:'请阅读协议并同意', trigger: 'change'},
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