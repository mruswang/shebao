<template>
  <div class="notice">
    <div class="n-nav"><se-nav :back="back" name="通知备忘"></se-nav></div>
    <div>
      <div><se-manger></se-manger></div>
      <div><select-nav></select-nav></div>
      <div><n-list></n-list></div>
    </div>
  </div>
</template>

<script>
import SeNav from '@/base/se-nav/se-nav'
import SeManger from '@/base/se-manger/se-manger'
import SelectNav from '@/base/select-nav/select-nav'
import NList from '@/base/n-list/n-list'
export default {
  data () {
    return {
      back: false
    }
  },
  mounted () {
  },
  components: {
    SeNav, SeManger, SelectNav, NList
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
.notice{
  padding-left: 200px;
  /*padding-top: 52px;*/
  .n-nav{
    /*position: fixed;*/
    /*top:62px;*/
    /*width: calc(100% - 200px);*/
  }
}
</style>
