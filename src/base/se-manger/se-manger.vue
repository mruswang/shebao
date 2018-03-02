<template>
  <div class="se-manger">
    <el-button size="small" class="bg-blue">新建</el-button>
    <el-button size="small" >批量删除</el-button>
    <span class="fa fa-list-ul" :class="{ blue : islist}"></span>
    <span class="fa fa-th-large" :class="{ blue : !islist}"></span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      islist: false
    }
  }
}
</script>

<style lang="less">
.se-manger{
  padding: 10px;
  background-color: #EEEEEE;
  margin-top: 5px;
  .bg-blue{
    background-color: #419DEA;
    color: #fff;
  }
  .fa{
    font-size: 20px;
    line-height: 20px;
    vertical-align: middle;
    margin-left: 10px;
    color: #616C7A;
    &.blue{
      color: #419DEA;
    }
  }
}
</style>
