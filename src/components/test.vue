<template>
  <!-- <div>
    <el-input placeholder="请输入内容" v-model="input1">
      <template slot="prepend">Http://</template>
    </el-input>
  </div>

  <div style="margin-top: 15px;">
    <el-input placeholder="请输入内容" v-model="input2">
      <template slot="append">.com</template>
    </el-input>
  </div>-->

  <!-- Date Picker -->
  <!-- <el-form-item label="活动时间">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
      </el-col>
  </el-form-item>-->

  <!-- Switch -->
  <!-- <el-form-item label="即时配送">
      <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>-->

  <!-- Check box -->
  <!-- <el-checkbox-group v-model="form.type">
        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
        <el-checkbox label="地推活动" name="type"></el-checkbox>
        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
  </el-checkbox-group>-->

  

  <!-- API input box -->
  <div style="margin-top: 15px;">
    <el-input placeholder v-model="input3" class="input-with-select">
      <el-select v-model="select" slot="prepend" placeholder="请选择">
        <el-option label="GET" value="1"></el-option>
        <el-option label="POST" value="2"></el-option>
        <el-option label="PUT" value="3"></el-option>
        <el-option label="DELETE" value="4"></el-option>
        <el-option label="HEADS" value="5"></el-option>
        <el-option label="OPTIONS" value="6"></el-option>
        <el-option label="PATCH" value="6"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
</template>


<style>
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
<script>
export default {
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
      select: ""
    };
  }
};
</script>