<template>
  <div class="tixing">
    <div><se-nav :back="back" name="提醒管理"></se-nav></div>
    <div class="ti-link">
      <router-link :to="{path:'/accounts/tixing/moban'}">短信模板</router-link>
      <router-link :to="{path:'/accounts/tixing/jilu'}">发送记录</router-link>
      <router-link :to="{path:'/accounts/tixing/tongji'}">发送统计</router-link>
    </div>
    <transition name="fadeLeft">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import SeNav from '@/base/se-nav/se-nav'
export default {
  data () {
    return {
      back: false
    }
  },
  components: {
    SeNav
  }
}
</script>

<style scoped lang="less">
.tixing{
  background-color: #f8f8f8;
  left: 200px;
  z-index: 10;
  top: 62px;
  bottom:0;
  position:fixed;
  overflow-y:scroll;
  width: calc(100% - 200px);
  .ti-link{
    background-color: #eee;
    margin-top: 5px;
    a{
      text-decoration: none;
      padding: 10px;
      display: inline-block;
      color: #666;
      font-size: 12px;
      position: relative;
      &.active{
        color: #419DEA;
        &:after{
          content: '';
          display: block;
          position: absolute;
          left: 0;
          bottom: 0;
          background-color: #419DEA;
          height: 2px;
          width: 100%;
        }
      }
    }
  }
  .fadeLeft-enter-active, .fadeLeft-leave-active {
    transition: all 1s;
    /*transform: translateX(0);*/
  }
  .fadeLeft-enter, .fadeLeft-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    /*transform: translateX(1800px);*/
  }
}
</style>
