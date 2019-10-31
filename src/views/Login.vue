<template>
<div style="margin:0; padding:0;">
    <top-bar></top-bar>
    <div class="container page-login">
        <div class="row">
            <div class="col-md-7 col-md-offset-2">
                <section id="loginForm">
                    <form action="/log-in?ReturnUrl=http%3A%2F%2Fwww.ituring.com.cn%2Farticle%2F506775" class="form-horizontal" method="post" role="form"><input name="__RequestVerificationToken" type="hidden" value="rEPcr2ghdJIzdq5WbwJxvfqnBKkVn9IKB1ql3Wr-_56XnYUQPNgEx7C7a54rW_o2GEfLz_gj-zUgKtLY9wDFuACpPbF835VelSeacPX2eP01" />                    
                        <div class="row">
                            <div class="col-md-7 col-md-offset-3">
                                <div class="login-title">
                                    <h4>会员登录</h4>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="Email" class="control-label col-md-3">邮箱</label>
                            <div class="col-md-7">
                                <input class="form-control" data-val="true" data-val-required="请输入Email/手机" id="Email" name="Email" placeholder="邮箱" type="text" value="" />
                                <span class="field-validation-valid text-danger" data-valmsg-for="Email" data-valmsg-replace="true"></span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-3" for="Password">密码</label>
                            <div class="col-md-7">
                                <input class="form-control" data-val="true" data-val-required="请输入密码" id="Password" name="Password" placeholder="密码" type="password" />
                                <span class="field-validation-valid text-danger" data-valmsg-for="Password" data-valmsg-replace="true"></span>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-7 col-md-offset-3">
                                <div class="flat-checkbox">
                                    <input id="RememberMe" type="checkbox" name="RememberMe" value="true" checked>
                                    <label for="RememberMe">  下次自动登录</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-offset-3 col-md-7">
                                <input type="submit" value="登 录" class="btn btn-primary" />
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-8 col-md-offset-3">
                                <div class="login-prompts">
                                    <p>
                                        您还没有账号？请点击这里<b><router-link to="/register">注册新账号</router-link></b>
                                    </p>
                                    <p>
                                        您忘记密码了？请点击这里<b><a href="/forgot-passwprd">找回密码</a></b>
                                    </p>
                                    <p>
                                        您忘记邮箱了？请点击这里<b><a href="/account/forget">查找账号</a></b>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </form>            
                </section>
            </div>
            <div class="col-md-6">
            </div>
        </div>
    </div>
    <div id="footer">
            <foot-bar></foot-bar>
    </div>
</div>
</template>

<script>
    
</script>
<style scoped>
</style>