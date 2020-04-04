<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>测试页面
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>UI自动化
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-setting"></i>接口自动化
          </template>
          <el-menu-item-group>
            <!-- <template slot="title">分组一</template> -->
            <el-menu-item index="3-1">接口管理</el-menu-item>
            <el-menu-item index="3-2">接口管理(新)</el-menu-item>
            <el-menu-item index="3-3">用例管理</el-menu-item>
            <el-menu-item index="3-4">用例集管理</el-menu-item>
            <el-menu-item index="3-5">执行计划</el-menu-item>
            <el-menu-item index="3-6">测试报告</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>
      <el-main>
        <el-tabs v-model="activeName" @tab-click="handleClick" closable @tab-remove="removeTab">
          <el-tab-pane label="接口列表" name="接口列表"></el-tab-pane>
          <el-tab-pane label="新建接口" name="新建接口" v-if="isNewAPITab"></el-tab-pane>
        </el-tabs>
        <!-- 表单1：接口列表 -->
        <v-APIList v-if="isAPIList" v-on:listenToChildEvent="Receive"></v-APIList>
        <!-- 表单2： 新建接口表单 -->
        <v-newapi v-if="isnewapi"></v-newapi>
        <!-- <v-test></v-test> -->
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
/* No.1: 如何使用组件 
1. import 组件 在根组件中 
2. 注册-挂载
3. 使用 */
import SiderBar from "./components/SiderBar.vue";
import APIList from "./components/APIList.vue";
import NewAPI from "./components/NewAPI.vue";
import test from "./components/test.vue";

export default {
  name: "App",
  components: {
    "v-siderBar": SiderBar,
    "v-APIList": APIList,
    "v-newapi": NewAPI,
    "v-test": test,
  },

  data() {
    return {
      restaurants: [],
      state1: "",
      state2: "",
      comName: "v-APIList",
      isAPIList: true,
      isnewapi: false,
      activeName: "接口列表",
      isNewAPITab: false,
      // for tab add/remove:
      editableTabsValue: "2",
      editableTabs: [
        {
          title: "Tab 1",
          name: "1",
          content: "Tab 1 content"
        },
        {
          title: "Tab 2",
          name: "2",
          content: "Tab 2 content"
        }
      ],
      tabIndex: 2
    };
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        {
          value: "Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号"
        },
        {
          value: "新旺角茶餐厅",
          address: "上海市普陀区真北路988号创邑金沙谷6号楼113"
        },
        { value: "泷千家(天山西路店)", address: "天山西路438号" },
        {
          value: "胖仙女纸杯蛋糕（上海凌空店）",
          address: "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"
        },
        { value: "贡茶", address: "上海市长宁区金钟路633号" },
        {
          value: "豪大大香鸡排超级奶爸",
          address: "上海市嘉定区曹安公路曹安路1685号"
        },
        {
          value: "茶芝兰（奶茶，手抓饼）",
          address: "上海市普陀区同普路1435号"
        },
        { value: "十二泷町", address: "上海市北翟路1444弄81号B幢-107" },
        { value: "星移浓缩咖啡", address: "上海市嘉定区新郁路817号" },
        { value: "阿姨奶茶/豪大大", address: "嘉定区曹安路1611号" },
        { value: "新麦甜四季甜品炸鸡", address: "嘉定区曹安公路2383弄55号" },
        {
          value: "Monica摩托主题咖啡店",
          address: "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F"
        },
        {
          value: "浮生若茶（凌空soho店）",
          address: "上海长宁区金钟路968号9号楼地下一层"
        },
        { value: "NONO JUICE  鲜榨果汁", address: "上海市长宁区天山西路119号" },
        { value: "CoCo都可(北新泾店）", address: "上海市长宁区仙霞西路" },
        {
          value: "快乐柠檬（神州智慧店）",
          address: "上海市长宁区天山西路567号1层R117号店铺"
        },
        {
          value: "Merci Paul cafe",
          address: "上海市普陀区光复西路丹巴路28弄6号楼819"
        },
        {
          value: "猫山王（西郊百联店）",
          address: "上海市长宁区仙霞西路88号第一层G05-F01-1-306"
        },
        { value: "枪会山", address: "上海市普陀区棕榈路" },
        { value: "纵食", address: "元丰天山花园(东门) 双流路267号" },
        { value: "钱记", address: "上海市长宁区天山西路" },
        { value: "壹杯加", address: "上海市长宁区通协路" },
        {
          value: "唦哇嘀咖",
          address: "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元"
        },
        { value: "爱茜茜里(西郊百联)", address: "长宁区仙霞西路88号1305室" },
        {
          value: "爱茜茜里(近铁广场)",
          address:
            "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺"
        },
        {
          value: "鲜果榨汁（金沙江路和美广店）",
          address: "普陀区金沙江路2239号金沙和美广场B1-10-6"
        },
        {
          value: "开心丽果（缤谷店）",
          address: "上海市长宁区威宁路天山路341号"
        },
        { value: "超级鸡车（丰庄路店）", address: "上海市嘉定区丰庄路240号" },
        { value: "妙生活果园（北新泾店）", address: "长宁区新渔路144号" },
        { value: "香宜度麻辣香锅", address: "长宁区淞虹路148号" },
        {
          value: "凡仔汉堡（老真北路店）",
          address: "上海市普陀区老真北路160号"
        },
        { value: "港式小铺", address: "上海市长宁区金钟路968号15楼15-105室" },
        { value: "蜀香源麻辣香锅（剑河路店）", address: "剑河路443-1" },
        { value: "北京饺子馆", address: "长宁区北新泾街道天山西路490-1号" },
        {
          value: "饭典*新简餐（凌空SOHO店）",
          address: "上海市长宁区金钟路968号9号楼地下一层9-83室"
        },
        {
          value: "焦耳·川式快餐（金钟路店）",
          address: "上海市金钟路633号地下一层甲部"
        },
        { value: "动力鸡车", address: "长宁区仙霞西路299弄3号101B" },
        { value: "浏阳蒸菜", address: "天山西路430号" },
        { value: "四海游龙（天山西路店）", address: "上海市长宁区天山西路" },
        {
          value: "樱花食堂（凌空店）",
          address: "上海市长宁区金钟路968号15楼15-105室"
        },
        { value: "壹分米客家传统调制米粉(天山店)", address: "天山西路428号" },
        {
          value: "福荣祥烧腊（平溪路店）",
          address: "上海市长宁区协和路福泉路255弄57-73号"
        },
        {
          value: "速记黄焖鸡米饭",
          address: "上海市长宁区北新泾街道金钟路180号1层01号摊位"
        },
        { value: "红辣椒麻辣烫", address: "上海市长宁区天山西路492号" },
        {
          value: "(小杨生煎)西郊百联餐厅",
          address: "长宁区仙霞西路88号百联2楼"
        },
        { value: "阳阳麻辣烫", address: "天山西路389号" },
        {
          value: "南拳妈妈龙虾盖浇饭",
          address: "普陀区金沙江路1699号鑫乐惠美食广场A13"
        }
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
    handleClick(tab) {
      if (tab.name == "接口列表") {
        this.isAPIList = true;
        this.isnewapi = false;
      } else if (tab.name == "新建接口") {
        this.isAPIList = false;
        this.isnewapi = true;
      }
    },
    Receive: function(data) {
      if (data == true) {
        this.isNewAPITab = true;
        this.isnewapi = true;
        this.isAPIList = false;
        this.activeName = "新建接口";
      }
    },
    removeTab: function() {
      // let tabs = this.editableTabs;
      // console.log(tabs, targetName);
      console.log("removeTab...");
      this.isNewAPITab = false;
      this.isnewapi = false;
      this.isAPIList = true;
      this.activeName = "接口列表";
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
    // End of method
  }

  // For Tab add/remove
  // addTab(targetName) {
  //   let newTabName = ++this.tabIndex + "";
  //   this.editableTabs.push({
  //     title: "New Tab",
  //     name: newTabName,
  //     content: "New Tab content"
  //   });
  //   this.editableTabsValue = newTabName;
  // },
  // removeTab:function(){
  //   let tabs = this.editableTabs;
  //   console.log(tabs,targetName);
  //   this.isNewAPITab = false;
  //   this.isnewapi = false;
  //   this.isAPIList = true;
  //   this.activeName = "接口列表";
  // let activeName = this.editableTabsValue;
  // if (activeName === targetName) {
  //   tabs.forEach((tab, index) => {
  //     if (tab.name === targetName) {
  //       let nextTab = tabs[index + 1] || tabs[index - 1];
  //       if (nextTab) {
  //         activeName = nextTab.name;
  //       }
  //     }
  //   });
  // }
  // this.editableTabsValue = activeName;
  // this.editableTabs = tabs.filter(tab => tab.name !== targetName);
  // }
};
</script>

<style>
* {
  margin: 0px;
}
div {
  display: block;
}
.body {
  margin: 0;
  height: 100%;
  /* line-height: 8px; */
}
/* 如何自动填充整个屏幕的高度？ */
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 500px;
  position: relative;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
/* .el-main{
  position: relative;
} */

.item-tab {
  position: relative;
  display: inline-block;
  height: 40px;
  box-sizing: border-box;
  list-style: none;
  font-size: 14px;
}
.item-tab {
  border: black 1px solid;
}

.item-tab el-tab-pane {
  display: inline;
}

.item-tab .el-icon-close {
  border-radius: 50%;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  margin-left: 5px;
}

[class*=" el-icon-"],
[class^="el-icon-"] {
  font-family: element-icons !important;
  /* speak:none; */
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  vertical-align: baseline;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
}
</style>
