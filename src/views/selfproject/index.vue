<template>
  <el-row>
    <el-form label-width="80px" :model="searchForm">
      <el-row>
        <el-col :span="6" class="searchCol">
          <el-form-item label="项目名称">
            <el-input v-model="searchForm.projectName" />
          </el-form-item>
        </el-col>
        <el-col :span="6" class="searchCol">
          <el-form-item label="研发方式">
            <el-input v-model="searchForm.mode" />
          </el-form-item>
        </el-col>
        <el-col :span="6" class="searchCol">
          <el-form-item label="项目号">
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
      <el-col :span="5" style="display: flex;justify-content: center;align-items: center;margin:10px" @click.native="turnToDetail">
        <el-descriptions :column="1" style="border:2px solid #ccc;padding:10px">
          <el-descriptions-item label="项目名称" class="descItem">周大福菜单系列</el-descriptions-item>
          <el-descriptions-item label="设计出图时间周期" class="descItem">2022-02-05</el-descriptions-item>
          <el-descriptions-item label="项目归属" class="descItem">周大福</el-descriptions-item>
          <el-descriptions-item label="研发方式" class="descItem">客户立项</el-descriptions-item>
          <el-descriptions-item label="项目号" class="descItem">20221008</el-descriptions-item>
          <el-descriptions-item label="项目状态" style="float:right"><el-tag size="small">已上传</el-tag></el-descriptions-item>
        </el-descriptions>
      </el-col>
      <el-col :span="5" style="display: flex;justify-content: center;align-items: center; margin:10px">
        <el-descriptions :column="1" style="border:2px solid #ccc;padding:10px">
          <el-descriptions-item label="项目名称" class="descItem">周大福菜单系列</el-descriptions-item>
          <el-descriptions-item label="设计出图时间周期" class="descItem">2022-02-05</el-descriptions-item>
          <el-descriptions-item label="项目归属" class="descItem">周大福</el-descriptions-item>
          <el-descriptions-item label="研发方式" class="descItem">客户立项</el-descriptions-item>
          <el-descriptions-item label="项目号" class="descItem">20221008</el-descriptions-item>
          <el-descriptions-item label="项目状态" style="float:right"><el-tag size="small">已上传</el-tag></el-descriptions-item>
        </el-descriptions>
      </el-col>

    </el-row>
  </el-row>

</template>
<script>
export default {
  data() {
    return {
      searchForm: {}
    }
  },
  methods: {
    onSearch() {

    },
    reset() {

    },
    turnToDetail(data) {
      console.log(123)
      console.log(data)
      this.$rounter.push({ path: '/views/selfproject/slefdetail' })
    }
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
