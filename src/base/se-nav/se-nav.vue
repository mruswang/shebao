<template>
  <div class="se-nav">
    <div class="name">{{name}}</div>
    <div>
      <el-button v-show="back" size="small" class="refresh" icon="fa fa-angle-left">返回</el-button>
      <el-button size="small" class="refresh" icon="fa fa-refresh">刷新</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    back: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less">
.se-nav{
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #EEEEEE;
  padding: 10px;
  .name{
    font-size: 18px;
    color: #999999;
    position: relative;
    &:after{
      content: '';
      display: block;
      width: 5px;
      height: 100%;
      position: absolute;
      left: -10px;
      top: 0;
      background-color: #419DEA;
    }
  }
  .refresh{
    i{
      margin-right: 10px;
    }
  }
}

</style>
