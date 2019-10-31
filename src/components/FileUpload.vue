<template>
    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" >
        <el-card shadow="never" style="padding: 0px;border: 0px;">
            <el-form-item label-width="80px"  :label="getFormLabel()"> 
                <el-upload 
                    class="upload-demo"
                    action=""
                    :on-preview="imageReview"
                    :on-remove="imageRemove"
                    :file-list="imageList"
                    :http-request="upImage"
                    :before-upload = "beforeUpload"
                    :disabled="!$cookie.status()"
                    list-type="picture">
                    <el-button size="small" v-if="$cookie.status()" icon="el-icon-upload" type="primary">点击上传</el-button>
                    <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                </el-upload>
            </el-form-item>
        </el-card>
        <el-dialog :visible.sync="imageVisible">
            <img width="100%" :src="imageUrl" alt="">
        </el-dialog>
    </el-col>
    
</template>

<script>
import { async } from 'q';
  export default {
    props:[
        "dossiersType",
        "background",
        "isFile",
        "productNo"
    ],
    data() {
        return {
            imageList:[],
            imageType:['JPG','PNG','JPEG'],
            
            upimage:{
                url: '',
                dossiers_type: '',
                invest_product_no: '',
                business_scope: localStorage.getItem("BUSINESSSCOPE"),
                business_class: 'account_open',
                id_type: localStorage.getItem("IDTYPE"),
                id_no: localStorage.getItem("IDNO"),
                client_no:""
            },
           
            form:{
                businessType:'',
                branch:'',
            },
            query: {
                business_class: 'account_open',
                business_scope: localStorage.getItem("BUSINESSSCOPE"),
                client_type: localStorage.getItem("CLIENTTYPE"),
                i_ROOT_ID: localStorage.getItem("ROOTID"),
                i_USERNAME: localStorage.getItem("USERNAME"),
                id_type: localStorage.getItem("IDTYPE"),
                id_no: localStorage.getItem("IDNO"),
                investor_type: ''
            },
            limitCount:"",
            
            //正面
            hideImage:false,
            imageUrl:'',
            imageVisible: false,
      };
    },

    mounted() {
        this.queryImage();
    },
    methods: {
        
        queryImage: async function () {
            this.query.invest_product_no = this.productNo; 
            const result = await this.$axios.post("/matching/getdossiers", this.query);
            if (result.success && result.body) {
                var images = result.body;
                console.log("images=",images);
                images.forEach( (item) => {
                    if (item.dossiers_type == this.dossiersType && item.file_path) {
                        this.imageList.push({
                            'name':item.file_name_original,
                            'url': item.file_path,
                            'detail_id': item.detail_id
                        });
                        this.hideImage = true;
                    }
                })
            }
        },

        imageReview(file) {
            this.imageUrl = file.url;
            this.imageVisible = true;
        },
        
        imageChange(file, fileList) {
          this.hideImage = fileList.length >= this.limitCount;
        },

        beforeUpload(file) {
            var imageName = file.name;
            var imageType = imageName.substring(imageName.lastIndexOf(".") + 1, imageName.length);
            console.log("imageType=",imageType);

            if (this.imageType.indexOf(imageType.toUpperCase()) < 0){
                this.$alert('只接受 JPG, PNG, JPEG格式的图片文件', '文件格式错误', {
                    confirmButtonText: '确定',
                    callback: action => {
                    }
                });
                return false;
            }
        },

        getFormLabel: function () {
            if (this.dossiersType == '120501') {
                return "银行卡"
            }
            if (this.dossiersType == '120702') {
                return "知识测评"
            }
        },

        getLimit: function () {
            console.log("this.dossiersType="+this.dossiersType)
            if (this.dossiersType == '120702') {
                this.limitCount = 100;
                return 100;
            } else {
                this.limitCount = 1;
                return 1;
            }
        },

        upImage(file) {
            var imgFile = file.file;
            var imageName = imgFile.name;
            var fileName = imgFile.name;
            this.submitFile(this.upimage,fileName,imgFile);
        },

        submitFile:  function (upImage, fileName, imgFile){
            console.log("upImage=",upImage);
            let images = [];
            let reader = new FileReader(); //html5读文件
            reader.readAsDataURL(imgFile); //转BASE64
            reader.onload = async (e) => {
                //读取完毕后调用接口
                var fileString = e.target.result;
                let imageObject = {
                    image_name: fileName,
                    image_data: fileString
                };
                images.push(imageObject);
                upImage['images'] = images;
                upImage['dossiers_type'] = this.dossiersType;
                if (this.productNo) {
                    upImage['invest_product_no'] = this.productNo;
                }
                console.log("upImage2=",upImage);
                const result = await this.$axios.post("/matching/upFile", upImage);
                if (result.success) {
                    this.$notify({
                        title: '成功',
                        message: '图片上传成功',
                        type: 'success'
                    });
                }
            };
        },

        imageRemove: async function (file, fileList) {
            const result = await this.$axios.post("/matching/delFile",{
                detail_id: file.detail_id
            });
            if (result.success) {
                this.$notify({
                    title: '成功',
                    message: '图片删除成功',
                    type: 'success'
                });
                this.hideImage = fileList.length >= this.limitCount;
            }
        },

        formsubmit: function (formName) {
            console.log("fff", this.frontList);
            if (this.imageList.length == 0) {
                this.$message({
                    showClose: true,
                    message: "请上传相关资料图片！",
                    type: 'warning',
                    duration:0,
                    center: true
                });
                return false;
            }
            return true;
        },
    }
  }
</script>
<style>
.hide .el-upload--picture-card {
    display: none;
}
.el-upload-list__item {
    width:200px;
}
.el-upload{
    width:100%;
    text-align: right;
}
.el-upload-list--picture-card .el-upload-list__item {
    width:100%;
    height: auto;
}
#yingyeFront .el-upload--picture-card{
    background-image:url('../assets/yingye1.png');
}
#idcardFront .el-upload--picture-card{
    background-image:url('../assets/idcard1.png');
}
#idcardObverse .el-upload--picture-card{
    background-image:url('../assets/idcard0.png');
}
#bank .el-upload--picture-card{
    background-image:url('../assets/bank.png');
}
.el-upload--picture-card{
    background-size: 100%  100%;
    border: 0px ;
    height: 11rem;
}
.el-upload-list--picture-card .el-upload-list__item-thumbnail {
    width: 100%;
    height: 11rem;
}
.el-form-item {
    margin-bottom: 0px;
}
.upload-demo .el-upload-list {
    margin-left: -80px;
    
}
</style>