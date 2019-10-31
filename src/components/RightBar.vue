<template>
  <div>
      <el-aside v-if="isPc()">
          <!-- <el-button id="nextstep" v-onclick="nextStep">{{nextStep}}</el-button> -->
      </el-aside>
  </div>
     
</template>
<script>
import { METHODS } from 'http';
export default {
  name: 'RightBar',
  data () {
    return {
      // nextStep: '下一步'
    }
  },
  methods: {
    isPc() {
          let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
          if(flag){
              return false;
          }else{
              return true;
          }
        }
  },
  
};
</script>
<style>
  .el-aside {
    width: 15%;
    position: relative;
  }

  #nextstep {
    position: absolute;
    left: 0px;
    bottom: 0px;
  }

</style>