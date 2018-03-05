<template>
  <div class="inquire">
    <div class="i-left">
      <div>
        <router-link :to="{path: '/inquire/notice'}">通知备忘</router-link>
        <router-link :to="{path: '/inquire/customer'}">客户档案</router-link>
        <router-link :to="{path: '/inquire/order'}">订单管理</router-link>
        <router-link :to="{path: '/inquire/refund'}">退款管理</router-link>
        <router-link :to="{path: '/inquire/operation'}">操作日志</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script >

</script>

<style scoped lang="less">
.inquire{
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
}

</style>
