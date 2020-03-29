// 新增接口表单
<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="接口列表" name="first"></el-tab-pane>
    <el-tab-pane label="新建接口" name="second"></el-tab-pane>
    <!-- <el-tab-pane label="角色管理" name="third"></el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane> -->
  </el-tabs>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>