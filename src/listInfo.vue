<template>
    <div id="listInfoWrap">
        <el-form ref="form" :model="listInfo" label-width="80px" size="mini" :inline="true" :label-position="'left'">
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="商品名称">
                        <el-input v-model="listInfo.name" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="库存">
                        <el-input v-model="listInfo.stock"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="已销售">
                        <el-input v-model="listInfo.sold"></el-input>
                    </el-form-item>
                </el-col>

            </el-row>

            <el-row :gutter="20">
                <el-col :span="16">
                    <el-radio-group v-model="listInfo.purchaseType">
                        <el-form-item>
                            <el-radio label="1" >全部积分抵扣</el-radio>
                            <el-radio label="2" >部分积分抵扣</el-radio>
                        </el-form-item>
                        <el-form-item>
                            <el-input placeholder="折扣比例" style="width: 100px;margin: 0 16px;" v-model="listInfo.proportion"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-radio label="3" >无法积分抵扣</el-radio>
                        </el-form-item>
                    </el-radio-group>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="商品类型">
                        <el-input placeholder="预留商品类型字段" clearable v-model="listInfo.spuType"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="封面">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button>上传</el-button>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="产品大图">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button>上传</el-button>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="内容描述">
                        <el-input type="textarea" v-model="listInfo.description"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="上架时间">
                        <el-input v-model="listInfo.publishTime"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="下架时间">
                        <el-input v-model="listInfo.lowerTime"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20" justify="center">
                <el-form-item size="large">
                    <el-button type="primary" :disabled="disabled">设置规格</el-button>
                    <el-button :disabled="disabled">设置价格</el-button>
                    <el-button @click="disabled = false">保存</el-button>
                </el-form-item>
            </el-row>

        </el-form>
    </div>
</template>


<script>
import mock2 from "./mock2";
export default {
  data() {
    return {
      listInfo: {
        id: "",
        name: "人参",
        type: 1,
        stock: 100,
        sold: 200,
        purchaseType: 1,
        proportion: 78,
        spuType: "日用品",
        images: {
          id: "",
          imageUrl: "",
          description: "",
          type: 1,
          status: 0
        },
        description: "哈哈哈",
        publishTime: "2017-08-15 12:00",
        lowerTime: "2017-10-15 12:00",
        price: 1560
      },
      disabled: true
    };
  },
  computed:{
      
  },
  created: function(){
    console.log(this.listInfo.purchaseType)
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style>
#listInfoWrap {
  padding: 16px;
  width: 960px;
}
</style>
