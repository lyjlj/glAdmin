<template>
  <el-row>
    <el-form label-width="80px" :model="searchForm">
      <el-row>
        <el-col :span="6" class="searchCol">
          <el-form-item label="项目名称" prop="projectName">
            <el-input v-model="searchForm.projectName" />
          </el-form-item>
        </el-col>
        <el-col :span="6" class="searchCol">
          <el-form-item label="研发方式" prop="mode">
            <el-input v-model="searchForm.mode" />
          </el-form-item>
        </el-col>
        <el-col :span="6" class="searchCol">
          <el-form-item label="项目号" prop="projectNo">
            <el-input v-model="searchForm.projectNo" />
          </el-form-item>
        </el-col>
        <el-col :span="3" class="searchCol">
          <el-button type="primary" @click="onSearch">查询</el-button>
          <el-button @click="reset">重置</el-button>
        </el-col>
      </el-row>
    </el-form>
    <el-row style="margin:20px;">
      <el-col :span="5" style="display: flex;justify-content: center;align-items: center;margin:10px" :router="true" @click.native="turnToDetail(item)"  v-for="item in projectData">
        <el-descriptions :column="1" style="border:2px solid #ccc;padding:10px" >
          <el-descriptions-item label="项目名称" class="descItem">{{item.projectName}}</el-descriptions-item>
          <el-descriptions-item label="设计出图时间周期" class="descItem">{{item.designPlotCycle	}}</el-descriptions-item>
          <el-descriptions-item label="项目归属" class="descItem">{{item.projectOwner}}</el-descriptions-item>
          <el-descriptions-item label="研发方式" class="descItem">{{item.RDMode}}</el-descriptions-item>
          <el-descriptions-item label="项目号" class="descItem">{{item.id}}</el-descriptions-item>
          <el-descriptions-item label="项目状态" style="float:right"><el-tag size="small">{{item.status==-2 ? "待上级审核" : item.status==-1 ? "待审核" : item.status==0 ? "驳回" : item.status==1 ? "待分配设计师" : item.status==2 ? "设计中" : item.status==3 ? "待评审" : item.status==4 ? "已完结": item.status=='3-1' ? "待重新设计": ''  }}</el-tag></el-descriptions-item>
        </el-descriptions>
      </el-col>
    </el-row>
  </el-row>

</template>
<script>
import projectList from '../../api/project.js'
import router from '@/router'
export default {
  data() {
    return {
      searchForm: {},
      projectData:[],
      //搜索关键字
      keyword:''
    }
  },
  methods: {
    onSearch(data1,data2) {
      console.log(data1)
    },
    reset() {

    },
    getPorjectList(){
      projectList().then(res =>{
        this.projectData = res.data
        console.log(this.projectData)
      })
    },
    turnToDetail(data) {
      console.log(123)
      console.log(data)
      this.$router.push(
        { path: '/selfproject/selfdetail',
        query: {
        id: data.id,
  } })
    }
  },
  mounted(){
    this.getPorjectList()
  }

}
</script>
<style lang="scss">
.searchCol{
    margin:20px
}
.descItem{
    display: block;
}
</style>
