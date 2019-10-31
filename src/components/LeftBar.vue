<template>
  <div>
    <el-aside v-if="isPc()">
        <!-- <el-button id="upstep" >{{upStep}}</el-button> -->
    </el-aside>
  </div>
</template>
<script>
export default {
  name: 'LeftBar',
  data () {
    return {
      // upStep: '上一步'
    }
  },
  methods:{
    isPc() {
        let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
        if(flag){
            return false;
        }else{
            return true;
        }
    }
  }
};
</script>
<style>
  .el-aside {
    width: 15%;
    position: relative;
  }

  #upstep {
    position: absolute;
    right: 0;
    bottom: 0;
  }

</style>