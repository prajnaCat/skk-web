<template>
    <el-col :span="10" :xs="24" :sm="10" :md="10" :lg="10" >
        <el-card shadow="never" style="padding: 0px;border: 0px;height: 11rem;">
            <el-form-item :label="dossiersname"> 
                <el-upload :class="{hide:false}"  :id="background" style="height: 11rem;"
                    action=""
                    list-type="picture-card"
                    :on-preview="imageReview"
                    :on-remove="imageRemove"
                    :on-change="imageChange"
                    :http-request="upImage"
                    :before-upload = "beforeUpload"
                    :file-list="imageList"
                    :disabled="!$cookie.status()"
                    >
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
        "productNo",
        "temporary",
        "index",
        "relaId"
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

            remove: {
                detail_id: '',
            },
            limitCount:1,
            
            //正面
            hideImage:false,
            imageUrl:'',
            imageVisible: false,

            validImage: false,
            dossiersname: "",
            dossierstypes:  [
                    {id:"100000",	value:"标准电子档案"},
                    {id:"110000",	value:"客户核心档案"},
                    {id:"110001",	value:"身份证正面照"},
                    {id:"110002",	value:"身份证反面照"},
                    {id:"110003",	value:"头部正面照"},
                    {id:"110004",	value:"客户签字"},
                    {id:"110005",	value:"营业执照"},
                    {id:"110006",	value:"组织机构代码证"},
                    {id:"110007",	value:"税务登记号"},
                    {id:"110008",	value:"机构成立证明文件"},
                    {id:"110009",	value:"当地纳税证件"},
                    {id:"110010",	value:"港澳永久居民身份证正面照"},
                    {id:"110011",	value:"港澳永久居民身份证反面照"},
                    {id:"110012",	value:"外国人永久居留证正面照"},
                    {id:"110013",	value:"外国人永久居留证反面照"},
                    {id:"110014",	value:"台湾往来大陆通行证正面照"},
                    {id:"110015",	value:"台湾往来大陆通行证反面照"},
                    {id:"110016",	value:"护照本人信息页面扫描件"},
                    {id:"120000",	value:"账户中心"},
                    {id:"120100",	value:"个人"},
                    {id:"120101",	value:"驾照扫描件"},
                    {id:"120102",	value:"社保证件扫描件"},
                    {id:"120103",	value:"纳税证件扫描件"},
                    {id:"120104",	value:"当地身份证正反面扫描件"},
                    {id:"120105",	value:"其它参考证件扫描件"},
                    {id:"120200",	value:"单位"},
                    {id:"120201",	value:"法人身份证正面照"},
                    {id:"120202",	value:"法人身份证反面照"},
                    {id:"120203",	value:"法人头部正面照"},
                    {id:"120204",	value:"开户代理人身份证正面照"},
                    {id:"120205",	value:"开户代理人身份证反面照"},
                    {id:"120206",	value:"开户代理人头部正面照"},
                    {id:"120300",	value:"特殊单位"},
                    {id:"120400",	value:"资管"},
                    {id:"120500",	value:"银期账户"},
                    {id:"120501",	value:"客户结算银行扫描件/复印件"},
                    {id:"120600",	value:"联系人信息"},
                    {id:"130000",	value:"适当性"},
                    {id:"200000",	value:"自定义电子档案"},
                    {id:"210000",	value:"账户中心"},
                    {id:"220000",	value:"适当性"},
                    {id:"130107",	value:"受益人身份证正面照"},
                    {id:"130108",	value:"受益人身份证反面照"},
                    {id:"130109",	value:"受益人头部正面照"},
                    {id:"130110",	value:"控制人身份证正面照"},
                    {id:"130111",	value:"控制人身份证反面照"},
                    {id:"130112",	value:"控制人头部正面照"},
                ]
        }
    },

    mounted() {
        this.queryImage();
        this.getFormLabel();
    },
    methods: {
        queryImage: async function () {
            const result = await this.$axios.post("/matching/getdossiers", this.query);
            if (result.success && result.body) {
                var images = result.body;
                console.log("images=",images);
                images.forEach( (item) => {
                    if (this.temporary == '1') {
                        if (item.rela_id == this.relaId && item.dossiers_type == this.dossiersType && item.file_path) {
                            this.imageList.push({
                                'name':item.file_name_original,
                                'url': item.file_path,
                                'detail_id': item.detail_id
                            });
                            this.remove.detail_id = item.detail_id;
                            this.validImage = true;
                            this.hideImage = true;
                            return;
                        }
                    } else {
                        if (item.dossiers_type == this.dossiersType && item.file_path) {
                       
                             this.imageList.push({
                                'name':item.file_name_original,
                                'url': item.file_path,
                                'detail_id': item.detail_id
                            });
                            this.remove.detail_id = item.detail_id;
                            this.validImage = true;
                            this.hideImage = true;
                        }
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
            this.dossierstypes.forEach(item => {
                if (item.id == this.dossiersType) {
                    this.dossiersname = item.value;
                    return item.value;
                }
            });
        },

        upImage(file) {
            var imgFile = file.file;
            var imageName = imgFile.name;
            var fileName = imgFile.name;
            this.submitFile(this.upimage,fileName,imgFile);
        },

        submitFile:  function (upImage, fileName, imgFile){
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
                if(this.temporary) {
                    upImage['temporary'] = this.temporary;
                }
                if (this.productNo) {
                    upImage['invest_product_no'] = this.productNo;
                }
                const result = await this.$axios.post("/matching/upFile", upImage);
                if (result.success) {
                    this.$notify({
                        title: '成功',
                        message: '图片上传成功',
                        type: 'success'
                    });
                    var detail_id = result.body[0].detail_id;
                    this.remove.detail_id = detail_id;
                    this.validImage = true;
                    this.$emit("listenUpload", {
                       detail_id: detail_id, 
                       index : this.index,
                       dossiers_type: this.dossiers_type,
                       upload: true
                    });
                }
            };
        },

        imageRemove: async function (file,fileList) {
            const result = await this.$axios.post("/matching/delFile",this.remove);
            if (result.success) {
                this.$emit("listenUpload", {
                       detail_id: this.remove.detail_id, 
                       index : this.index,
                       dossiers_type: this.dossiers_type,
                       upload: false
                });
                this.$notify({
                    title: '成功',
                    message: '图片删除成功',
                    type: 'success'
                });
                this.hideImage = fileList.length >= this.limitCount;
            }
        },


        formsubmit: function () {
            if (!this.validImage) {
                this.$notify({
                        title: '提示',
                        message: '请上传' + this.dossiersname,
                        type: 'warning'
                });
            }
            return this.validImage;
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
</style>