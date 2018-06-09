<template>
  <div id="home">
    <el-button @click="dialogVisible = true">新增</el-button>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose" center>
      <span class="btns">
        <el-button type="primary" @click="dialogVisible=false">预售</el-button>
        <el-button type="primary" @click="dialogVisible = false">直采</el-button>
      </span>
    </el-dialog>

    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="name" label="商品名称" width="180">
      </el-table-column>
      <el-table-column prop="type" label="商品来源" width="180">
      </el-table-column>
      <el-table-column prop="stock" label="库存">
      </el-table-column>
      <el-table-column prop="sold" label="已售">
      </el-table-column>
      <el-table-column prop="publishTime" label="上架时间">
      </el-table-column>
      <el-table-column prop="lowerTime" label="下架时间">
      </el-table-column>
      <el-table-column prop="status" label="当前状态">
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="toListInfo" type="text" size="small">查看详情</el-button>
          <el-button type="text" size="small">发布</el-button>
          <el-button type="text" size="small">隐藏</el-button>
        </template>
      </el-table-column>
    </el-table>
    <button @click="fetch">请求数据</button>
  </div>
</template>

<script>
import mockData from "./mock";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      tableData: [
        {
          id: "",
          status: 2,
          type: 1,
          date: "2016-05-02",
          name: "人参",
          stock: 1000,
          sold: 1000,
          publishTime: "2017-08-15 12:00",
          lowerTime: "2017-10-15 12:00",
          isShow: 1
        }
      ],
      dialogVisible: false,
      token: ""
    };
  },
  created: function() {
    this.tableData = mockData.map(function(e, index) {
      return e;
    });
    this.selectType;
    // console.log(this.tableData)
  },
  computed: {
    selectType() {
      this.tableData.forEach(e => {
        switch (e.type) {
          case 1:
            e.type = "平台自营";
            break;
          case 2:
            e.type = "转卖";
            break;
          case 3:
            e.type = "预售";
        }
        switch (e.status) {
          case 1:
            e.type = "未发布";
            break;
          case 2:
            e.type = "预上线";
            break;
          case 3:
            e.type = "销售中";
        }

        // if (e.status === 1) {
        //   e.status = "未发布";
        // } else if (e.status === 2) {
        //   e.status = "预上线";
        // }
      });
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    toListInfo() {
      this.dialogVisible = false;
      this.$router.push({ path: "/listinfo" });
    },
    fetch() {
      // let token = localStorage.getItem("token");
      // console.log(token);
      //  this.$axios.defaults.headers.common['token'] = token;

      //  this.$axios.get("http://back.nmbjvip.com/api/mall/goods/list").then(
      //   res => {
      //     console.log(res)
      //   },
      //   error => {
      //     console.log(error);
      //   })

      var script = document.createElement("script");
      script.src = "/http://back.nmbjvip.com/api/mall/goods/list";
      document.body.appendChild(script);
      //script必须在页面中才能发起请求

      script.onload = function(e) {
        alert("success");
        console.log(e);
        // debugger
        e.currentTarget.remove(); //清除script标签
      };

      script.onerror = function(e) {
        alert("fail");
        e.currentTarget.remove(); //清除script标签
      };
    }
  }
};
</script>

<style lang="scss">
#home {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
}
.btns {
  margin: 0 auto;
}
</style>
