<template>
  <div class="c-details">
    <div><se-nav @historyback="historyback" @refresh="refresh" :back="back" name="客户档案"></se-nav></div>
    <el-row class="content1-box">
      <el-col :span="6">
        <div class="u-picture">
          <img src="../../assets/logo.png" alt="">
          <p class="u-name">客户姓名</p>
          <p>185837****8899</p>
          <p>51130319********1X</p>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="">
          <div class="kehuziliao">
            <span>客户资料</span>
            <span>保存</span>
          </div>
          <div class="u-info">
            <dl class="gary1">
              <dt>旺旺号</dt>
              <dt>公积金状态</dt>
              <dt>公积金账号</dt>
              <dt>深户</dt>
              <dt>支付生活号</dt>
            </dl>
            <dl>
              <dt>78642531</dt>
              <dt>正常</dt>
              <dt>1255668</dt>
              <dt>是</dt>
              <dt>已关注</dt>
            </dl>
            <dl class="gary1">
              <dt>微信号</dt>
              <dt>社保状态</dt>
              <dt>社保电脑号</dt>
              <dt>是否黑名单</dt>
              <dt>微信公众号</dt>
            </dl>
            <dl>
              <dt>78642531</dt>
              <dt>正常</dt>
              <dt>1255668</dt>
              <dt>是</dt>
              <dt>已关注</dt>
            </dl>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="u-beizhu">
          <p><span>客户档案备注</span><i class="fa fa-edit"></i></p>
          <textarea class="u-textarea" cols="32" rows="10"></textarea>
        </div>
      </el-col>
    </el-row>
    <div class="content2-box">
      <div class="c2-top">
        <div><i class="fa fa-list"></i>档案列表</div>
        <div class="c2-top-right">
          <i class="fa fa-edit"></i>
          <el-button class="bg-gray" size="small">设置导出项</el-button>
          <el-button class="bg-green" size="small" icon="el-icon-download">下载</el-button>
        </div>
      </div>
      <div>
        <el-table
          ref="multipleTable"
          :data="excelData"
          tooltip-effect="dark"
          style="width: 100%;font-size: 12px"
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            label="缴纳月份"
            width="120">
          </el-table-column>
          <el-table-column
            prop="name"
            label="缴费类型"
            width="120">
          </el-table-column>
          <el-table-column
            prop="name"
            label="缴费档次"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="缴费公司"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="订单实收"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="账单金额"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="扣费金额"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="结账"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="下单昵称"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="下单订单号"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="办理状态"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="办理人"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="续费提醒"
            width="120">
          </el-table-column>
          <el-table-column
            prop="hei"
            label="账单备注"
            width="120">
            <template  slot-scope="scope">
              <span :class="scope.row.hei ? 'blue' : 'red'">{{ scope.row.hei ? '是': '否' }}</span>
            </template>
          </el-table-column>
        </el-table>
        <p class="check-more"><i @click="checkMore" class="el-icon-arrow-down"></i>查看更多</p>
      </div>
    </div>
    <div class="content3-box">
      <div class="c3-top">
        <div><i class="fa fa-list"></i>档案列表</div>
        <div class="c3-top-right">
          <el-button class="bg-gray" size="small">设置导出项</el-button>
          <el-button class="bg-green" size="small" icon="el-icon-download">下载</el-button>
        </div>
      </div>
      <div>
        <el-table
        ref="multipleTable"
        :data="excelData"
        tooltip-effect="dark"
        style="width: 100%;font-size: 12px"
        @selection-change="handleSelectionChange"
        >
        <el-table-column
          label="缴纳月份"
          width="120">
        </el-table-column>
        <el-table-column
          prop="name"
          label="缴费类型"
          width="120">
        </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="content2-box">
      <div class="c2-top">
        <div><i class="fa fa-list"></i>档案列表</div>
        <div class="c2-top-right">
          <i class="fa fa-edit"></i>
          <el-button class="bg-gray" size="small">设置导出项</el-button>
          <el-button class="bg-green" size="small" icon="el-icon-download">下载</el-button>
        </div>
      </div>
      <div>
        <el-table
          ref="multipleTable"
          :data="excelData"
          tooltip-effect="dark"
          style="width: 100%;font-size: 12px"
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            label="缴纳月份"
            width="120">
          </el-table-column>
          <el-table-column
            prop="name"
            label="缴费类型"
            width="120">
          </el-table-column>
          <el-table-column
            prop="name"
            label="缴费档次"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="缴费公司"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="订单实收"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="账单金额"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="扣费金额"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="结账"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="下单昵称"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="下单订单号"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="办理状态"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="办理人"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="续费提醒"
            width="120">
          </el-table-column>
          <el-table-column
            prop="hei"
            label="账单备注"
            width="120">
            <template  slot-scope="scope">
              <span :class="scope.row.hei ? 'blue' : 'red'">{{ scope.row.hei ? '是': '否' }}</span>
            </template>
          </el-table-column>
        </el-table>
        <p class="check-more"><i @click="checkMore" class="el-icon-arrow-down"></i>查看更多</p>
      </div>
    </div>
    <div class="content4-box">
      <div class="c4-top"><i class="fa fa-list"></i>档案文件</div>
      <div class="c4-img-box">
        <div class="c4-img-item">
          <img src="../../assets/logo.png" alt="">
          <p><i class="fa fa-eye"></i><i class="fa fa-trash-o"></i></p>
        </div>
        <div class="c4-img-item">
          <img src="../../assets/logo.png" alt="">
          <p><i class="fa fa-eye"></i><i class="fa fa-trash-o"></i></p>
        </div>
        <div class="c4-img-item">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SeNav from '@/base/se-nav/se-nav'
export default {
  data () {
    return {
      back: true,
      textarea: '',
      excelData: [
        {
          name: '红烧鱼', size: '大', taste: '微辣', price: '40', remain: '100', 'hei': true, id: 1
        },
        {
          name: '麻辣小龙虾', size: '大', taste: '麻辣', price: '138', remain: '200', 'hei': false, id: 1
        }
      ],
      multipleSelection: [],
      showmore1: false,
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  components: {
    SeNav
  },
  methods: {
    historyback () {
      console.log(1)
      window.history.back()
    },
    refresh () {
      console.log(2)
    },
    checkMore () {
      this.showmore1 = !this.showmore1
    },
    handleSelectionChange () {},
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>

<style scoped lang="less">
.c-details{
  background-color: #f8f8f8;
  left: 200px;
  z-index: 10;
  top: 62px;
  bottom:0;
  position:fixed;
  overflow-y:scroll;
  width: calc(100% - 200px);
  .content1-box{
    margin-top: 5px;
    .u-picture{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding-top: 10px;
      padding-bottom: 10px;
      border: 1px solid #ddd;
      padding: 25px 0;
      img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }
      p{
        margin: 5px;
        font-size: 12px;
        color: #666;
        &.u-name{
          color: #419DEA;
          display: inline-block;
          padding: 5px 10px;
          border: 1px solid #dddd;
        }
      }
    }
    .kehuziliao{
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #EEEEEE;
      padding:5px 10px;
      font-size: 12px;
      color: #666;
      border: 1px solid #DEDEDE;
      span:last-child{
        background-color: #419DEA;
        color: #fff;
        display: inline-block;
        padding: 5px 15px;
      }
    }
    .u-info{
      display: flex;
      align-items: center;
      dl{
        flex: 1;
        margin-top: 0;
        margin-bottom: 0;
        font-size: 12px;
        color: #666;
        dt{
          height: 30px;
          line-height: 30px;
          padding: 0 10px;
          border: 1px solid #ddd;
        }
      }
      .gary1{
        background-color: #e8eaec;
      }
    }
    .u-beizhu{
      margin-left: 10px;
      p{
        font-size: 12px;
        color: #666;
        color: #666;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #EEEEEE;
        padding: 10px;
        margin-top: 0;
        margin-bottom: 0;
        border-top: 1px solid #ddd;
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
      }
      .u-textarea{
        height: 150px;
        outline: none;
        padding: 4px;
        width: calc(100% - 10px);
        background-color: #fff;
        border: 1px solid #ddd;
      }
    }
  }
  .content2-box{
    margin-top: 5px;
    .c2-top{
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #eee;
      padding:5px 10px;
      font-size: 12px;
      color: #666;
      .c2-top-right{
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
    .check-more{
      text-align: center;
      font-size: 12px;
      color: #419DEA;
      cursor: pointer;
      margin-top: 0;
    }
  }
  .content3-box{
    margin-top: 5px;
    .c3-top{
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #eee;
      padding:5px 10px;
      font-size: 12px;
      color: #666;
      .c3-top-right{
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
  .content4-box{
    .c4-top{
      padding:5px 10px;
      font-size: 12px;
      color: #666;
      background-color: #eee;
      margin-top: 5px;
    }
    .c4-img-box{
      padding:5px 10px;
      &:after{
        clear:both;content:'';display:block;width:0;height:0;visibility:hidden;
      }
      .c4-img-item{
        position: relative;
        width: 148px;
        height: 148px;
        float: left;
        margin-right: 10px;
        img{
          width: 148px;
          height: 148px;
        }
        p{
          position: absolute;
          bottom: 0;
          left: 0;
          width: calc(100% - 20px);
          background-color: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0;
          padding: 10px;
          i{
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
