<template>
  <div id="home">
    <el-button @click="dialogVisible = true">新增</el-button>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose" center>
      <span class="btns">
        <el-button type="primary" @click="addList(0)">预售</el-button>
        <el-button type="primary" @click="addList(1)">直采</el-button>
      </span>
    </el-dialog>

    <el-table :data="tableData" stripe style="width: 100%" type='index'>
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
    this.tableData = mockData.map(e => {
      let typeArr = ["平台自营", "转卖", "预售"];
      let statusArr = ["未发布", "预上架", "销售中"];
      e.type = this.changeText([e.type, typeArr.length, typeArr]);
      e.status = this.changeText([e.status, statusArr.length, statusArr]);
      return e;
    });
    // this.selectType;
    // console.log(this.tableData)
  },
  computed: {

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
    },
    changeText([name, n, arr]) {
      for (let i = 1; i < n + 1; i++) {
        if (name === i) {
          return arr[i - 1];
        }
      }
    },
    addList(n) {
      if (n === 0) {
        this.tableData.push({
          id: "",
          status: 2,
          type: 3,
          date: "2016-05-02",
          name: "人参",
          stock: 1000,
          sold: 1000,
          publishTime: "2017-08-15 12:00",
          lowerTime: "2017-10-15 12:00",
          isShow: 1
        });
      }else{
        this.tableData.push({
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
        });
      }
      this.dialogVisible=false
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
