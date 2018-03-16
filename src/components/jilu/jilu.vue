<template>
  <div class="jilu">
    <div class="search-box">
      <div class="block">
        <p>操作时间</p>
        <el-date-picker
          v-model="value13"
          type="daterange"
          size="small"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="['00:00:00', '23:59:59']">
        </el-date-picker>
      </div>
      <div>
        <span>操作</span>
        <el-select style="width: 100px" class="select-box" size="small" v-model="value" placeholder="退款状态">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <el-input style="width: 100px" size="small" v-model="input" placeholder="账号"></el-input>
      <el-input style="width: 100px" size="small" v-model="input" placeholder="摘要"></el-input>
      <el-button class="bg-blue" size="small" icon="el-icon-search">搜索</el-button>
    </div>
    <div class="table-box">
      <div class="table-box-top">
        <div><i class="fa fa-list"></i>操作日志</div>
        <div class="table-box-top-right">
          <el-button class="bg-gray" size="small">设置导出项</el-button>
          <el-button class="bg-green" size="small" icon="el-icon-download">下载</el-button>
        </div>
      </div>
      <el-table
        ref="multipleTable"
        :data="excelData"
        tooltip-effect="dark"
        style="width: 100%;font-size: 12px"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          label="序号"
          width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="旺旺号"
          width="120">
          <template  slot-scope="scope">
            <span @click="cellClikc(scope.$index, scope.row)">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="身份证号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="联系方式"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="社保电脑号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="公积金账号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="社保状态"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="公积金状态"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="档案备注"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="微信号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="微信公众号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="支付生活号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="深户"
          width="120">
        </el-table-column>
        <el-table-column
          prop="hei"
          label="黑名单"
          width="120">
          <template  slot-scope="scope">
            <span :class="scope.row.hei ? 'blue' : 'red'">{{ scope.row.hei ? '是': '否' }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="c-page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
    <transition name="fadeLeft">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      back: false,
      options: [{
        value: '1',
        label: '是'
      }, {
        value: '2',
        label: '否'
      }],
      value: '',
      input: '',
      value13: '',
      currentPage4: 4,
      excelData: [
        {
          name: '红烧鱼', size: '大', taste: '微辣', price: '40', remain: '100', 'hei': true, id: 1
        },
        {
          name: '麻辣小龙虾', size: '大', taste: '麻辣', price: '138', remain: '200', 'hei': false, id: 1
        },
        {
          name: '清蒸小龙虾', size: '大', taste: '清淡', price: '138', remain: '200', id: 1
        },
        {
          name: '香辣小龙虾', size: '大', taste: '特辣', price: '138', remain: '200', id: 1
        },
        {
          name: '十三香小龙虾', size: '大', taste: '中辣', price: '138', remain: '108', id: 1
        },
        {
          name: '蒜蓉小龙虾', size: '大', taste: '中辣', price: '138', remain: '100', id: 1
        },
        {
          name: '凉拌牛肉', size: '中', taste: '中辣', price: '48', remain: '60', id: 1
        },
        {
          name: '虾仁寿司', size: '大', taste: '清淡', price: '29', remain: '无限', id: 1
        },
        {
          name: '海苔寿司', size: '大', taste: '微辣', price: '26', remain: '无限', id: 1
        }
      ],
      multipleSelection: []
    }
  },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    cellClikc (index, val) {
    }
  },
  components: {
  }
}
</script>

<style scoped lang="less">
  .jilu{
    background-color: #f8f8f8;
    left: 0;
    top: 100px;
    position:absolute;
    width: 100%;
    .bg-blue{
      background-color: #419DEA;
      color: #fff;
    }
    .search-box{
      display: flex;
      align-items: center;
      padding: 10px;
      background-color: #eeeeee;
      margin-top: 5px;
      font-size: 12px;
      color: #666;
      position: relative;
      z-index: 10;
      .block{
        display: flex;
        align-items: center;
        p{
          margin-right: 8px;
        }
      }
      .el-input{
        margin-right: 10px;
      }
      .shouqi{
        color: #419DEA;
        cursor: pointer;
        margin-left: 20px;
        i{
          font-size: 18px;
        }
      }
    }
    .show-collaspe{
      background-color: #fff;
      width: calc(100% - 20px);
      font-size: 12px;
      color: #666;
      padding: 5px 10px;
    }
    .table-box{
      margin-top: 5px;
      .table-box-top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #eee;
        padding:5px 10px;
        font-size: 12px;
        color: #666;
        .table-box-top-right{
          display: flex;
          align-items: center;
          i{
            font-size: 20px;
            color: #999;
            margin-right: 8px;
            margin-top: 5px;
          }
          .bg-gray{
            background-color: #ccc;
            color: #fff;
          }
          .bg-green{
            background-color: #1ABC9C;
            color: #fff;
            margin-left: 0;
          }
        }
      }
    }
    .c-page{
      text-align: center;
    }
    .fadeLeft-enter-active, .fadeLeft-leave-active {
      transition: all 1s;
      transform: translateX(0);
    }
    .fadeLeft-enter, .fadeLeft-leave-to /* .fade-leave-active below version 2.1.8 */ {
      /*opacity: 0;*/
      transform: translateX(1800px);
    }
  }
</style>
