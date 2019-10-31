<template>
    <div class="layout-head">
        <div class="container">
            <div id="navbar-toggles" class="navbar-toggles">
                <a href="#nav-main" class="toggle-main ryi-nav-sandwich"></a>
            </div>
            <a id="head-navbar-toggle" href="#" class="head-navbar-toggle"></a>
            <div class="head-logo"><router-link to="/">狂人日记</router-link></div>
            <ul id="head-nav-primary" class="head-nav">
                <li class="head-nav-home"><router-link to="/">首页</router-link></li>
                <li><router-link to="/book">作品</router-link></li>
                <li><router-link to="/essay">创作</router-link></li>
                <li class="head-search">
                    <form action="/search">
                        <input type="search" name="q" placeholder="狂人日记原创文学网" class="key">
                        <button class="go btn btn-link"><span class="fa fa-search"></span></button>
                    </form>
                </li>
            </ul>
            <ul id="head-nav-secondary" class="head-nav">
                <li class="head-compose"><router-link to="/register">新会员注册</router-link></li>
                <li class="head-compose"><router-link to="/login">登录</router-link></li>
                <div class="navbar-close"><a href="#nav-user" class="fa fa-angle-up"></a></div>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: 'TopBar',
  data () {
        return{
            count:0
        }
  }
}
</script>
<style scoped>

</style>
