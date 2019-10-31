<template>
    <div class="col-md-3 col-sm-3 side">
        <ul class="sidenav-list">
            <li class="sidenav-major active">
                <a href="/article?tab=article">所有文章</a></li>
            <li class="sidenav-major ">
                <a href="/article?tab=7hot">7日热门</a></li>
            <li class="sidenav-major ">
                <a href="/article?tab=30hot">30日热门</a></li>
            <li class="sidenav-major ">
                <a href="/article?tab=follow">我的关注</a></li>
            <li class="sidenav-major ">
                <a href="/article?tab=fav">我的收藏</a></li>
            <li class="sidenav-major ">
                <a href="/article?tab=mine">我的文章</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'es-sideBar',
            data () {
                return{
                    count:0
                }
            }
    }
</script>
<style scoped>
</style>