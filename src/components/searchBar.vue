<template>
  <div class="header">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="接口名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="接口描述">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="接口类别">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button>清空</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style>
.div{
    display: block;
}

.header {
    padding: 0;
    position: relative;
    margin: 0 0 15px;
}

.el-form {
    display: inline-block;
    margin-right: 10px;
    vertical-align: top;
}

.el-form-item {
  display: inline-block;
}
</style>