<template>
  <div class="se-manger">
    <el-button size="small" class="bg-blue" @click="addList">新建</el-button>
    <el-button size="small" >批量删除</el-button>
    <span @click="selectList(true)" class="fa fa-list-ul" :class="{ blue : islist}"></span>
    <span  @click="selectList(false)" class="fa fa-th-large" :class="{ blue : !islist}"></span>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    islist: {
      type: Boolean,
      dafault: false
    }
  },
  methods: {
    selectList (value) {
      this.$emit('selectList', value)
    },
    addList () {
      this.$emit('addList')
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
  span.fa{
    font-size: 20px;
    line-height: 20px;
    vertical-align: middle;
    margin-left: 10px;
    color: #616C7A;
    &.blue{
      color: #419DEA;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: all 1s;
    transform: translateX(0);
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    /*opacity: 0;*/
    transform: translateX(1800px);
  }
}

</style>
