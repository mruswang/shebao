<template>
  <div class="refund-details">
    <div><se-nav @historyback="historyback" @refresh="refresh" :back="back" name="退款管理"></se-nav></div>
    <div>
      <div class="table-box-top table-hasrigeht">
        <div><i class="fa fa-list"></i>相关档案</div>
        <i class="fa fa-edit"></i>
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
.refund-details{
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
    .fa-edit{
      font-size: 15px;
      color: #666;
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
