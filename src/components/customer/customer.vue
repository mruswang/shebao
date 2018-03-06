<template>
  <div class="customer">
    <div><se-nav :back="back" name="客户档案"></se-nav></div>
    <div class="c-caozuo">
      <div><el-button class="bg-blue" size="small">批量导入</el-button><el-button class="bg-black" size="small">下载模板</el-button></div>
      <div><el-button class="bg-gray" size="small">设置导出项</el-button><el-button class="bg-green" size="small" icon="el-icon-download">下载</el-button></div>
    </div>
    <div class="search-box">
      <el-input style="width: 150px" size="small" v-model="input" placeholder="请输入内容"></el-input>
      <el-input style="width: 100px" size="small" v-model="input" placeholder="输入姓名"></el-input>
      <el-input style="width: 200px" size="small" v-model="input" placeholder="输入身份证查询"></el-input>
      <el-input style="width: 150px" size="small" v-model="input" placeholder="输入联系方式查询"></el-input>
      <div>
        <span>深户</span>
        <el-select style="width: 100px" class="select-box" size="small" v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <el-button class="bg-blue" size="small" icon="el-icon-search">搜索</el-button>
      <span @click="showTableSearch" class="shouqi" v-if="searchCollaspe"><i class="el-icon-arrow-down"></i>展开</span>
      <span @click="showTableSearch" class="shouqi" v-else><i class="el-icon-arrow-up"></i>收起</span>
    </div>
    <transition name="fade">
      <div class="search-collaspe" v-show="!searchCollaspe">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="6">
            <el-input style="width: 160px" size="small" v-model="input" placeholder="社保电脑号"></el-input>
            <div class="selectedbox">
              <span>社保状态</span>
              <el-select style="width: 100px" class="select-box" size="small" v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="6">
            <el-input style="width: 160px" size="small" v-model="input" placeholder="公积金账号"></el-input>
            <div class="selectedbox">
              <span>公积金状态</span>
              <el-select style="width: 100px" class="select-box" size="small" v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="6">
            <el-input style="width: 160px" size="small" v-model="input" placeholder="微信号"></el-input>
            <div class="selectedbox">
              <span>支付生活号</span>
              <el-select style="width: 100px" class="select-box" size="small" v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="selectedbox">
              <span>微信公众号</span>
              <el-select style="width: 100px" class="select-box" size="small" v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="selectedbox">
              <span>黑名单</span>
              <el-select style="width: 100px" class="select-box" size="small" v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="6">
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 10}"
              placeholder="档案备注"
              v-model="textarea">
            </el-input>
          </el-col>
        </el-row>
      </div>
    </transition>
    <div class="tabBox">
      <div class="tabBox-title">
        <div><i class="fa fa-list"></i>档案列表</div>
        <div>
          <el-button class="bg-blue" size="small" >设置字段显示顺序</el-button>
          <el-button class="bg-blue" size="small" >设置单元格冻结字段</el-button>
          <el-select style="width: 100px" class="select-box" size="small" v-model="value" placeholder="排序方式">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="index" v-loading.fullscreen.lock="fullscreenLoading" element-loading-text="拼命加载中...">
        <input type="file" @change="importFile(this)" id="imFile" style="display: none"
               accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"/>
        <a id="downlink"></a>
        <el-button class="button" @click="uploadFile()">导入</el-button>
        <el-button class="button" @click="downloadFile(excelData)">导出</el-button>
        <!--错误信息提示-->
        <el-dialog title="提示" v-model="errorDialog" size="tiny">
          <span>{{errorMsg}}</span>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="errorDialog=false">确认</el-button>
          </span>
        </el-dialog>
        <!--展示导入信息-->
        <el-table :data="excelData" tooltip-effect="dark">
          <el-table-column label="名称" prop="name" show-overflow-tooltip></el-table-column>
          <el-table-column label="分量" prop="size" show-overflow-tooltip></el-table-column>
          <el-table-column label="口味" prop="taste" show-overflow-tooltip></el-table-column>
          <el-table-column label="单价(元)" prop="price" show-overflow-tooltip></el-table-column>
          <el-table-column label="剩余(份)" prop="remain" show-overflow-tooltip></el-table-column>
        </el-table>
        <el-table
          ref="multipleTable"
          :data="excelData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            label="日期"
            width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            show-overflow-tooltip>
          </el-table-column>
        </el-table>
      </div>
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
  </div>
</template>

<script>
import SeNav from '@/base/se-nav/se-nav'
import XLSX from 'xlsx'
export default {
  data () {
    return {
      back: false,
      input: '',
      searchCollaspe: true,
      currentPage4: 4,
      options: [{
        value: '1',
        label: '是'
      }, {
        value: '2',
        label: '否'
      }],
      value: '',
      textarea: '',
      fullscreenLoading: false, // 加载中
      imFile: '', // 导入文件el
      outFile: '',
      errorDialog: false, // 错误信息弹窗
      errorMsg: '', // 错误信息内容
      excelData: [
        {
          name: '红烧鱼', size: '大', taste: '微辣', price: '40', remain: '100'
        },
        {
          name: '麻辣小龙虾', size: '大', taste: '麻辣', price: '138', remain: '200'
        },
        {
          name: '清蒸小龙虾', size: '大', taste: '清淡', price: '138', remain: '200'
        },
        {
          name: '香辣小龙虾', size: '大', taste: '特辣', price: '138', remain: '200'
        },
        {
          name: '十三香小龙虾', size: '大', taste: '中辣', price: '138', remain: '108'
        },
        {
          name: '蒜蓉小龙虾', size: '大', taste: '中辣', price: '138', remain: '100'
        },
        {
          name: '凉拌牛肉', size: '中', taste: '中辣', price: '48', remain: '60'
        },
        {
          name: '虾仁寿司', size: '大', taste: '清淡', price: '29', remain: '无限'
        },
        {
          name: '海苔寿司', size: '大', taste: '微辣', price: '26', remain: '无限'
        },
        {
          name: '金针菇寿司', size: '大', taste: '清淡', price: '23', remain: '无限'
        },
        {
          name: '泡菜寿司', size: '大', taste: '微辣', price: '24', remain: '无限'
        },
        {
          name: '鳗鱼寿司', size: '大', taste: '清淡', price: '28', remain: '无限'
        },
        {
          name: '肉松寿司', size: '大', taste: '清淡', price: '22', remain: '无限'
        },
        {
          name: '三文鱼寿司', size: '大', taste: '清淡', price: '30', remain: '无限'
        },
        {
          name: '蛋黄寿司', size: '大', taste: '清淡', price: '20', remain: '无限'
        }
      ]
    }
  },
  components: {
    SeNav
  },
  mounted () {
    this.imFile = document.getElementById('imFile')
    this.outFile = document.getElementById('downlink')
  },
  methods: {
    showTableSearch () {
      this.searchCollaspe = !this.searchCollaspe
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    uploadFile: function () { // 点击导入按钮
      this.imFile.click()
    },
    downloadFile: function (rs) { // 点击导出按钮
      let data = [{}]
      for (let k in rs[0]) {
        data[0][k] = k
      }
      data = data.concat(rs)
      this.downloadExl(data, '菜单')
    },
    importFile: function () { // 导入excel
      this.fullscreenLoading = true
      let obj = this.imFile
      if (!obj.files) {
        this.fullscreenLoading = false
        return
      }
      var f = obj.files[0]
      var reader = new FileReader()
      let $t = this
      reader.onload = function (e) {
        var data = e.target.result
        if ($t.rABS) {
          $t.wb = XLSX.read(btoa(this.fixdata(data)), {
            type: 'base64'
          })
        } else {
          $t.wb = XLSX.read(data, {
            type: 'binary'
          })
        }
        let json = XLSX.utils.sheet_to_json($t.wb.Sheets[$t.wb.SheetNames[0]])
        console.log(typeof json)
        $t.dealFile($t.analyzeData(json)) // analyzeData: 解析导入数据
      }
      if (this.rABS) {
        reader.readAsArrayBuffer(f)
      } else {
        reader.readAsBinaryString(f)
      }
    },
    downloadExl: function (json, downName, type) {
      let keyMap = [] // 获取键
      for (let k in json[0]) {
        keyMap.push(k)
      }
      console.info('keyMap', keyMap, json)
      let tmpdata = [] // 用来保存转换好的json
      json.map((v, i) => keyMap.map((k, j) => Object.assign({}, {
        v: v[k],
        position: (j > 25 ? this.getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
      }))).reduce((prev, next) => prev.concat(next)).forEach(function (v) {
        tmpdata[v.position] = {
          v: v.v
        }
      })
      let outputPos = Object.keys(tmpdata)
      let tmpWB = {
        SheetNames: ['mySheet'], // 保存的表标题
        Sheets: {
          'mySheet': Object.assign({},
            tmpdata, // 内容
            {
              '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1] // 设置填充区域
            })
        }
      }
      let tmpDown = new Blob([this.s2ab(XLSX.write(tmpWB,
        {bookType: (type === undefined ? 'xlsx' : type), bookSST: false, type: 'binary'} // 这里的数据是用来定义导出的格式类型
      ))], {
        type: ''
      })
      var href = URL.createObjectURL(tmpDown)
      this.outFile.download = downName + '.xlsx'
      this.outFile.href = href
      this.outFile.click()
      setTimeout(function () {
        URL.revokeObjectURL(tmpDown) // 用URL.revokeObjectURL()来释放这个object URL
      }, 100)
    },
    analyzeData: function (data) {
      return data
    },
    dealFile: function (data) {
      console.log(data)
      this.imFile.value = ''
      this.fullscreenLoading = false
      if (data.length <= 0) {
        this.errorDialog = true
        this.errorMsg = '请导入正确信息'
      } else {
        this.excelData = data
      }
    },
    s2ab: function (s) { // 字符串转字符流
      var buf = new ArrayBuffer(s.length)
      var view = new Uint8Array(buf)
      for (var i = 0; i !== s.length; ++i) {
        view[i] = s.charCodeAt(i) & 0xFF
      }
      return buf
    },
    getCharCol: function (n) { // 将指定的自然数转换为26进制表示。映射关系：[0-25] -> [A-Z]。
      let s = ''
      let m = 0
      while (n > 0) {
        m = n % 26 + 1
        s = String.fromCharCode(m + 64) + s
        n = (n - m) / 26
      }
      return s
    },
    fixdata: function (data) {
      var o = ''
      var l = 0
      var w = 10240
      for (; l < data.byteLength / w; ++l) {
        o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)))
      }
      o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)))
      return o
    }
  }
}
</script>

<style scoped lang="less">
.customer{
  background-color: #f8f8f8;
  padding-left: 200px;
  .bg-blue{
    background-color: #419DEA;
    color: #fff;
  }
  .bg-black{
    background-color: #616C7A;
    color: #fff;
  }
  .bg-gray{
    background-color:#CCCCCC;
    color: #fff;
  }
  .bg-green{
    background-color: #1ABC9C;
    color: #fff;
  }
  .c-caozuo{
    display: flex;
    align-items: center;
    padding: 10px;
    margin-top: 5px;
    background-color: #EEEEEE;
    position: relative;
    z-index: 10;
    div:first-child{
      margin-right: 20px;
      .bg-black{
        margin-left: 0;
      }
    }
    div:last-child{
      .bg-green{
        margin-left: 0;
      }
    }
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
  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .search-collaspe{
    padding: 10px;
    background-color: #fff;
    font-size: 12px;
    color: #666;
    .selectedbox{
      margin-top: 10px;
    }
  }
  .tabBox{
    .tabBox-title{
      margin-top: 5px;
      padding: 10px;
      background-color: #eeeeee;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 12px;
      color: #666;
    }
  }
  .c-page{
    text-align: center;
  }
}
</style>
