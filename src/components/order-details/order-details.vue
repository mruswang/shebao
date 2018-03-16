<template>
  <div class="order-details">
    <div><se-nav @historyback="historyback" @refresh="refresh" :back="back" name="订单详情"></se-nav></div>
    <div>
      <div class="table-box-top">
        <div><i class="fa fa-list"></i>订单详情</div>
      </div>
      <el-table
        :data="excelData"
        style="width: 100%;font-size: 12px">
        <el-table-column
          prop="date"
          label="订单号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="name"
          label="来源"
          width="110">
        </el-table-column>
        <el-table-column
          prop="address"
          label="下单昵称">
        </el-table-column>
        <el-table-column
          prop="address"
          label="付款时间">
        </el-table-column>
        <el-table-column
          prop="address"
          label="订单状态">
        </el-table-column>
        <el-table-column
          prop="address"
          label="订单金额">
        </el-table-column>
        <el-table-column
          prop="address"
          label="实付金额">
        </el-table-column>
        <el-table-column
          prop="address"
          label="收货人">
        </el-table-column>
        <el-table-column
          prop="address"
          label="收件人电话">
        </el-table-column>
        <el-table-column
          prop="address"
          label="备注旗帜">
        </el-table-column>
        <el-table-column
          prop="address"
          label="买家留言">
        </el-table-column>
        <el-table-column
          prop="address"
          label="卖家备注">
        </el-table-column>
      </el-table>
    </div>
    <div>
      <div class="table-box-top">
        <div><i class="fa fa-list"></i>宝贝信息</div>
      </div>
      <el-table
        :data="excelData"
        style="width: 100%;font-size: 12px">
        <el-table-column
          prop="date"
          label="序号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="name"
          label="宝贝简称"
          width="110">
        </el-table-column>
        <el-table-column
          prop="address"
          label="宝贝属性">
        </el-table-column>
        <el-table-column
          prop="address"
          label="单价">
        </el-table-column>
        <el-table-column
          prop="address"
          label="数量">
        </el-table-column>
        <el-table-column
          prop="address"
          label="合计">
        </el-table-column>
      </el-table>
    </div>
    <div>
      <div class="table-box-top">
        <div><i class="fa fa-list"></i>对应账单</div>
      </div>
      <el-table
        :data="excelData"
        style="width: 100%;font-size: 12px">
        <el-table-column
          prop="date"
          label="序号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="110">
        </el-table-column>
        <el-table-column
          prop="address"
          label="身份证">
        </el-table-column>
        <el-table-column
          prop="address"
          label="缴费年月">
        </el-table-column>
        <el-table-column
          prop="address"
          label="缴费类型">
        </el-table-column>
        <el-table-column
          prop="address"
          label="缴费档次">
        </el-table-column>
        <el-table-column
          prop="address"
          label="缴费公司">
        </el-table-column>
        <el-table-column
          prop="address"
          label="订单实付">
        </el-table-column>
        <el-table-column
          prop="address"
          label="账单金额">
        </el-table-column>
        <el-table-column
          prop="address"
          label="结账">
        </el-table-column>
        <el-table-column
          prop="address"
          label="办理状态">
        </el-table-column>
        <el-table-column
          prop="address"
          label="续费提醒">
        </el-table-column>
        <el-table-column
          prop="address"
          label="账单备注">
        </el-table-column>
      </el-table>
    </div>
    <div>
      <div class="table-box-top table-hasrigeht">
        <div><i class="fa fa-list"></i>相关档案</div>
        <el-button class="bg-blue" size="small">新增</el-button>
      </div>
      <el-table
        :data="excelData"
        style="font-size: 12px">
        <el-table-column
          prop="date"
          label="序号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="110">
        </el-table-column>
        <el-table-column
          prop="address"
          label="身份证号">
        </el-table-column>
        <el-table-column
          prop="address"
          label="是否黑名单">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import SeNav from '@/base/se-nav/se-nav'
export default {
  data () {
    return {
      back: true,
      excelData: [
        {
          name: '红烧鱼', size: '大', taste: '微辣', price: '40', remain: '100', 'hei': true, id: 1
        },
        {
          name: '麻辣小龙虾', size: '大', taste: '麻辣', price: '138', remain: '200', 'hei': false, id: 1
        }
      ],
      multipleSelection: []
    }
  },
  methods: {
    historyback () {
      console.log(1)
      window.history.back()
    },
    refresh () {
      console.log(2)
    }
  },
  components: {
    SeNav
  }
}
</script>

<style scoped lang="less">
.order-details{
  background-color: #f8f8f8;
  left: 200px;
  z-index: 10;
  top: 62px;
  bottom:0;
  position:fixed;
  overflow-y:scroll;
  width: calc(100% - 200px);
  .table-box-top{
    font-size: 12px;
    color: #666;
    padding:10px;
    background-color: #eee;
    margin-top: 5px;
  }
  .table-hasrigeht{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .bg-blue{
      background-color: #419DEA;
      color: #fff;
    }
  }
}
</style>
