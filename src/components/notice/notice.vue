<template>
  <div class="notice">
    <div class="n-nav"><se-nav :back="back" name="通知备忘"></se-nav></div>
    <div>
      <div><se-manger @selectList="selectList" @addList="addList" :islist="islist"></se-manger></div>
      <div><select-nav></select-nav></div>
      <div v-if="islist"><n-list></n-list></div>
      <div class="garid-box" v-else><n-garid></n-garid></div>
    </div>
  </div>
</template>

<script>
import SeNav from '@/base/se-nav/se-nav'
import SeManger from '@/base/se-manger/se-manger'
import SelectNav from '@/base/select-nav/select-nav'
import NList from '@/base/n-list/n-list'
import NGarid from '@/base/n-garid/n-garid'
export default {
  data () {
    return {
      back: false,
      islist: false
    }
  },
  mounted () {
  },
  components: {
    SeNav, SeManger, SelectNav, NList, NGarid
  },
  methods: {
    selectList (val) {
      this.islist = val
    },
    addList () {
      this.$router.push({path: '/inquire/add-notice'})
    }
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
  .garid-box{
    margin-left: 10px;
  }
}
</style>
