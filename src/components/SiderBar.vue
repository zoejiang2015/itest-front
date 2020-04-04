// 新增接口表单
<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="接口列表" name="接口列表"></el-tab-pane>
    <el-tab-pane label="新建接口" name="新建街口"></el-tab-pane>
    <!-- <el-tab-pane label="角色管理" name="third"></el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>-->
  </el-tabs>

          <!-- <el-button @click="comName='v-newapi'">新增接口</el-button> -->
  <!-- <component :is="comName"></component> -->
</template>

<script>
export default {
  data() {
    return {
      activeName: "接口列表"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab);
    }
  }
};
</script>