<template>
  <div class="select-nav">
    <el-select class="select-box"  size="small" v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select class="select-box" size="small" v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <div class="f-time">
      <span>发布时间：</span>
      <el-date-picker
        size="small"
        v-model="value2"
        align="right"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions1">
      </el-date-picker>
    </div>
    <div class="f-people">
      <span>发布人员：</span>
      <el-autocomplete
        size="small"
        v-model="state4"
        :fetch-suggestions="querySearchAsync"
        placeholder="请输入内容"
        @select="handleSelect"
      ></el-autocomplete>
    </div>
    <el-button size="small" class="bg-blue" icon="el-icon-search">搜索</el-button>
    <el-button size="small" >按时间倒序<i class="fa fa-long-arrow-down"></i></el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      pickerOptions1: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [{
          text: '今天',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      },
      value2: '',
      restaurants: [],
      state4: '',
      timeout: null
    }
  },
  mounted () {
    this.restaurants = this.loadAll()
  },
  methods: {
    loadAll () {
      return [
        {'value': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号'}
      ]
    },
    querySearchAsync (queryString, cb) {
      var restaurants = this.restaurants
      var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants

      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        cb(results)
      }, 3000 * Math.random())
    },
    createStateFilter (queryString) {
      return (state) => {
        return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    handleSelect (item) {
      console.log(item)
    }
  }
}
</script>

<style lang="less">
.select-nav{
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #EEEEEE;
  margin-top: 5px;
  .select-box{
    width: 100px;
    margin-right: 10px;
  }
  .bg-blue{
    background-color: #419DEA;
    color: #fff;
  }
  .f-time,.f-people{
    display: flex;
    align-items: center;
    margin-left: 10px;
    span{
      font-size: 12px;
      color: #999;
    }
  }
}
</style>
