<template>
    <div class="col-md-3 col-sm-3 side">
            <ul class="sidenav-list">
                <li class="sidenav-major active">
                    <a href="/book?tab=book">所有图书</a></li>
                <li class="sidenav-major ">
                    <a href="/book?tab=ebook">电子书</a></li>
                <li class="sidenav-major ">
                    <a href="/book?tab=free">免费</a></li>
                <li class="sidenav-major ">
                    <a href="/book?tab=translator">诚征译者</a></li>
                <li class="sidenav-major ">
                    <a href="/book?tab=soon">即将上市</a></li>
                <li class="sidenav-major ">
                    <a href="/book?tab=90vote">90天内推荐</a></li>
                <li class="sidenav-major ">
                    <a href="/book?tab=fav">收藏夹</a></li>
                <li class="sidenav-major ">
                    <a href="/book?tab=gift">可兑换图书</a></li>
            </ul>
            <ul class="sidenav-list">
                <li class="sidenav-header active">
                    <a href="/book?tab=book&amp;sort=hot">
                        <h3>所有分类</h3></a>
                </li>
                <li class="sidenav-major  ">
                    <a href="/book?tab=book&amp;sort=hot&amp;category=1">
                        <span></span>计算机</a>
                </li>
                <li class="sidenav-major  ">
                    <a href="/book?tab=book&amp;sort=hot&amp;category=16">
                        <span></span>科普</a>
                </li>
                <li class="sidenav-major  ">
                    <a href="/book?tab=book&amp;sort=hot&amp;category=44">
                        <span></span>设计</a>
                </li>
                <li class="sidenav-major  ">
                    <a href="/book?tab=book&amp;sort=hot&amp;category=97">
                        <span></span>经管</a>
                </li>
                <li class="sidenav-major  ">
                    <a href="/book?tab=book&amp;sort=hot&amp;category=103">
                        <span></span>生活自助</a>
                </li>
                <li class="sidenav-major  ">
                    <a href="/book?tab=book&amp;sort=hot&amp;category=108">
                        <span></span>心理学</a>
                </li>
                <li class="sidenav-major  ">
                    <a href="/book?tab=book&amp;sort=hot&amp;category=113">
                        <span></span>电工电子</a>
                </li>
                <li class="sidenav-major  ">
                    <a href="/book?tab=book&amp;sort=hot&amp;category=140">
                        <span></span>高等数学</a>
                </li>
                <li class="sidenav-major  ">
                    <a href="/book?tab=book&amp;sort=hot&amp;category=217">
                        <span></span>文艺</a>
                </li>
                <li class="sidenav-major  ">
                    <a href="/book?tab=book&amp;sort=hot&amp;category=236">
                        <span></span>体育</a>
                </li>
            </ul>
        </div>
</template>

<script>
    export default {
        name: 'bk-sideBar',
        data () {
            return{
                count:0
            }
        }
    }
</script>
<style scoped>
</style>
