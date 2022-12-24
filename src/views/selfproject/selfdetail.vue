<template>
  <el-row class="detail_box">
    <el-row>
      <el-form>
        <el-form-item label="项目归属">{{detailObj.projectOwner}}</el-form-item>

        <el-col :span="6">
          <el-form-item label="研发来源">{{detailObj.RDSource}}</el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="研发方式">{{detailObj.RDMode}}</el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="参与评审人员"><span v-for="item in detailObj.reviewDetail" style="margin-right:5px">{{item.userInfo.username}}</span></el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="项目负责人">{{detailObj.projectLeader}}</el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="设计负责人">{{detailObj.designerManager.username}}</el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="系列名称">{{detailObj.seriesName}}</el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="项目名称">{{detailObj.projectName}}</el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="立项时间">{{detailObj.projectTime}}</el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="重要程度">{{detailObj.majorLevel}}</el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="紧急程度">{{detailObj.urgentLevel}}</el-form-item>
        </el-col>
      </el-form>
    </el-row>
    <el-row>
      <el-tag>上传设计图</el-tag>
      <el-upload
        action="#"
        list-type="picture-card"
        :auto-upload="false"
        style="margin-top:20px"
        :headers="tokens"
        :before-upload = "upload"
        :data ="dataOss"
        :on-success="uploadSuccess"
        :on-error = "uploadError"
      >
        <i slot="default" class="el-icon-plus" />
        <div slot="file" slot-scope="{file}">
          <img
            class="el-upload-list__item-thumbnail"
            :src="file.url"
            alt=""
          >
          <span class="el-upload-list__item-actions">
            <span
              class="el-upload-list__item-preview"
              @click="handlePictureCardPreview(file)"
            >
              <i class="el-icon-zoom-in" />
            </span>
            <span
              v-if="!disabled"
              class="el-upload-list__item-delete"
              @click="handleDownload(file)"
            >
              <i class="el-icon-download" />
            </span>
            <span
              v-if="!disabled"
              class="el-upload-list__item-delete"
              @click="handleRemove(file)"
            >
              <i class="el-icon-delete" />
            </span>
          </span>
        </div>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
      <el-button style="margin-top:30px;display:flex;justinfity" class="btn_sub" type="primary" @click="uploadImg">提交</el-button>
    </el-row>

  </el-row>

</template>
<script>
import {projectDetail,drawSubmit} from "../../api/projectdetail"
export default {
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      detailId:'',
      detailObj:{},
      //参与评审人员
      reviewPart:''
    }
  },
  methods: {
    handleRemove(file) {
      console.log(file)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleDownload(file) {  
      console.log(file)
    },
    getProjectDetail(){
      projectDetail(this.detailId).then(res =>{
        console.log(234,res)
        this.detailObj = res.data
      })
    },
    getDetailId(){
      this.detailId = this.$route.query.id
      console.log(11,this.detailId)
      this.getProjectDetail()
    },
    //获取上传参数
    upload(){
      
    },
    uploadImg(data){
      console.log(data)

    }
  },
  mounted(){
    this.getDetailId()
  }
  
}
</script>
<style scoped>
.detail_box{
  margin:30px
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .btn_sub{
    width:100%;
    margin-top:30px;
    display:flex;
    justify-content: center;
  }
</style>
