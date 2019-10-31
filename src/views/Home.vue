<template>

    <div style="margin:0; padding:0;">
        <top-bar></top-bar>
        <div id="home" class="customized-page"> 
            <div id="row-1" class="out-container"> 
                <div class="container"> 
                    <div class="row"> 
                        <div class="col-md-12 col-sm-12 column" id="column-1">
                            <!--标签--> 
                            <tag-bar></tag-bar>
                        </div> 
                    </div> 
                </div> 
            </div> 
            <div id="row-2" class="out-container"> 
                <div class="container"> 
                    <div class="row"> 
                        <div class="col-md-9 col-sm-12 column" id="column-2"> 
                            <!--热门图书-->
                            <pop-books></pop-books>
                            <!-- 推荐文章-->
                            <recmd-article></recmd-article>
                        </div>
                 
                        <!-- 侧边栏 -->
                        <side-bar></side-bar>
                    </div> 
                </div> 
            </div> 
        </div> 
        <div id="footer">
            <foot-bar></foot-bar>
        </div>
        <div id="toTop"> 
            <a style="font-size:30px;" href="#" class="fa fa-angle-up"></a> 
        </div> 
    </div>
</template>
<script>
import PopBooks from "./../components/PopBooks";
import RecmdArticle from "./../components/RecmdArticle";
  export default {
    components:{
        PopBooks,
        RecmdArticle,
    },
    data() {
      return {
      }      
    },
    created() {
    },

    mounted(){
    },
    
    methods: {
       
    },  
    
    
  }
</script>
<style scoped>
  #home{
        padding-top: 90px;
  }
</style>
