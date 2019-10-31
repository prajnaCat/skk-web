<template>
      <div id="app">
              <router-view v-if="isRouterAlive" />
      </div>
</template>

<script>
export default {
  name: 'App',
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  }
}
</script>
<style lang="stylus">
#app
  font-family Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
body
  margin 0
  padding 0

html
  margin 0
  padding 0
  
.zy-main .el-scrollbar {
  height: 100%;
}
.zy-main .el-scrollbar__wrap {
  overflow: scroll;
  overflow-x:auto
}
</style>
