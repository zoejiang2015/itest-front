<template>
  <div class="newapi">
    <el-form ref="form" :model="form" label-width="80px">
      <el-row>
        <el-col :span="10">
          <el-form-item label="接口名称:" placeholder="请输入接口名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="接口分类:">
            <el-select v-model="form.category" placeholder="请选择类型">
              <el-option label="类别1" value="shanghai"></el-option>
              <el-option label="类别2" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10">
          <el-form-item label="默认环境:">
            <el-select v-model="form.env" placeholder="默认环境">
              <el-option label="默认环境" value="shanghai"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="备注:">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10">
          <el-form-item label="环境域名:" placeholder="协议+域名">
            <el-input v-model="form.domainName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="状态:">
            <el-select v-model="form.status">
              <el-option label="未完成" value="shanghai"></el-option>
              <el-option label="已完成" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <div style="margin-top: 15px;">
          <el-form-item label="接口路径:">
            <el-input placeholder v-model="form.input3" class="input-with-select">
              <el-select v-model="form.select" slot="prepend" placeholder="请选择">
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
          </el-form-item>
        </div>
      </el-row>
      <!-- Sub Tabs -->
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="Params" name="Params"></el-tab-pane>
        <el-tab-pane label="Header" name="Header"></el-tab-pane>
        <el-tab-pane label="断言" name="断言"></el-tab-pane>
        <el-tab-pane label="参数提取" name="参数提取"></el-tab-pane>
        <el-tab-pane label="前置处理器" name="前置处理器"></el-tab-pane>
      </el-tabs>
      
      <!-- sub-components -->
      <div
        class="params"
        v-for="(domain, index) in dynamicValidateForm.domains"
        :key="domain.key"
        :rules="{required: true}"
      >
        <el-row v-model="domain.value">
          <el-col :span="8">
            <!-- <el-input type="text" v-model="list.name"></el-input> -->
            <el-form-item>
              <el-input type="text" placeholder="key" v-model="form.params1" @change="addValue"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-input type="text" placeholder="value" v-model="form.params2"></el-input>
          </el-col>
        </el-row>
      </div>

      <el-row>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
          <el-button>调试</el-button>
        </el-form-item>
      </el-row>
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
        desc: "",
        input1: "",
        input2: "",
        input3: "",
        select: "",
        params1: "",
        params2: ""
      },
      activeName: "Params",
      dynamicValidateForm: {
        domains: [{ value: "1" }],
        email: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },

    addValue: function() {
      console.log("add items");
      this.dynamicValidateForm.domains.push({
        value: "",
        key: Date.now()
      });
    },

    handleClick(tab) {
      if (tab.name == "接口列表") {
        this.isAPIList = true;
        this.isnewapi = false;
      } else if (tab.name == "新建接口") {
        this.isAPIList = false;
        this.isnewapi = true;
      }
    }
  }
};
</script>

<style scoped>
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.el-form {
  width: 100%;
}

.el-input {
  width: 100%;
  margin-left: 10px;
}

.el-form-item {
  width: 100%;
}

.el-select {
  width: 100%;
}
</style>