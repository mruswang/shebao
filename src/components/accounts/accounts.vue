<template>
  <div class="accounts">
    <div class="i-left">
      <div>
        <router-link :to="{path: '/accounts/tixing'}">提醒管理</router-link>
        <router-link :to="{path: '/accounts/zhangdan'}">账单管理</router-link>
        <router-link :to="{path: '/accounts/citiao'}">词条收录</router-link>
      </div>
    </div>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script >

</script>

<style scoped lang="less">
  .accounts{
    /*width: 100%;*/
    /*height: 100%;*/
    margin-top: 62px;
    background-color: #f8f8f8;
    .i-left{
      position: fixed;
      top: 62px;
      left: 0;
      width: 200px;
      height: 100%;
      background-color: #7A889A;
      z-index: 10;
      div{
        background-color: #657180;
        a{
          display: block;
          padding: 10px;
          color: #fff;
          text-decoration: none;
          font-size: 12px;
          &.active{
            background-color: #414952;
            color: #419DEA;
          }
        }
      }
    }
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }
  }

</style>
