<template>
  <div class="n-list">
    <div class="n-l-top">
      <div>
        <el-checkbox></el-checkbox>
        <span class="l-c3">发布人员：</span>
        <span class="l-c9">admin</span>
        <span class="l-c3">发布时间：</span>
        <span class="l-c9">2017-08-02 15:47:44</span>
        <span class="l-c3">接收对象：</span>
        <span class="l-c9">@全体人员 </span>
        <span class="l-c3">状态：</span>
        <span class="l-yellow">处理中</span>
        <span class="l-c3">优先级：紧急</span>
        <i class="fa fa-fa"></i>
        <el-button size="small">办公</el-button>
      </div>
      <div>
        <el-button class="l-record" size="small" @click="showRecord">跟进记录</el-button>
      </div>
    </div>
    <div class="n-l-text">
      尊敬的用户，为了给您带来更好的体验，秒杀专区业务将于2017年4月26日22：00-2017年4月27日09:00期间进行系统升级，升级期间秒杀专区入口将暂时下线。升级后可正常充值和查看充值记录，请有需要的用户提前充值或者在系统升级后再充值。给您带来的不便，敬请谅解。感谢您一
      如既往的支持。
    </div>
    <transition name="fade">
      <div class="record-bg" v-show="showRecordIndex" :style="{borderBottom : showRecordIndex? '1px solid #ddd' : ''}">
        <div class="record-box" >
          <div class="record-box-text">
            <div class="re-name">跟进记录</div>
            <div class="re-textarea">
              <textarea placeholder="回复内容回复内容..."></textarea>
            </div>
            <div class="re-submit">
              <el-button class="bg-blue" size="small">提交</el-button>
            </div>
          </div>
          <div class="hui-record">
            <ul>
              <li class="hui-record-item">
                <div class="hui-record-item-top">
                  <div class="hui-record-item-top-left">
                    <i class="fa fa-user-circle"></i>
                    <span class="hui-record-name">用户昵称</span>
                    <span class="hui-record-time">2018-01-19 14:20</span>
                    <span class="hui-record-hui">回复</span>
                  </div>
                  <div class="hui-record-item-top-right">#1</div>
                </div>
                <div class="hui-record-item-text">尽快落实完成！</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showRecordIndex: false
    }
  },
  methods: {
    showRecord () {
      this.showRecordIndex = !this.showRecordIndex
    }
  }
}
</script>

<style lang="less">
  .n-list{
    margin-top: 10px;
    border-top: 1px solid #eee;
    border-right: 1px solid #eee;
    .n-l-top{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      background-color: #fff;
      position: relative;
    &:after{
       content: '';
       display: block;
       width: calc(100% - 30px);
       height: 1px;
       background-color: #eee;
       position: absolute;
       left: 30px; bottom: 0;
     }
      .l-c3{
        font-size: 12px;
        color: #666;
      }
      .l-c9{
        font-size: 12px;
        color: #999;
        margin-right: 10px;
      }
      .l-yellow{
        color: #FFA847;
        font-size: 12px;
      }
      i{
        color: #F04844;
      }
      .l-record{
        background-color: #414952;
        color: #F9F9F9;
      }
    }
    .n-l-text{
      padding:10px 10px 10px 30px;
      font-size: 12px;
      color: #666;
      border-bottom: 1px solid #eee;
      background-color: #fff;
    }
    .fade-enter-active, .fade-leave-active {
      transition: all .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }
    .record-bg{
      background-color: #fff;
      .record-box{
        padding-left: 30px;
        width: 70%;
        .record-box-text{
          .re-name{
            background-color: #EEEEEE;
            display: inline-block;
            font-size: 12px;
            color: #666666;
            padding: 5px 15px;
            margin-bottom: 3px;
            position: relative;
            margin-top: 5px;
            border-radius: 2px;
            &:after{
               position: absolute;
               left: 0;
               top:-5px;
               width: 100%;
               height: 3px;
               background-color: #419DEA;
               content: '';
             }
          }
          .re-textarea{
            padding: 5px;
            border: 1px solid #DEDEDE;
            background-color: #f3f3f3;
            border-radius: 2px;
            textarea{
              display: block;
              width: 100%;
              height: 100px;
              outline: none;
              border: none;
              background-color: #f3f3f3;
            }
          }
          .re-submit{
            text-align: right;
            margin-top: 5px;
          }
        }
      }
      .hui-record{
        ul{
          padding-left: 0;
          .hui-record-item{
            list-style: none;
            .hui-record-item-top{
              display: flex;
              align-items: center;
              justify-content: space-between;
              .hui-record-item-top-left{
                i{
                  color: #999;
                }
                .hui-record-name{
                  font-size: 12px;color: #666;
                }
                .hui-record-time{
                  font-size: 12px;color: #999;
                }
                .hui-record-hui{
                  font-size: 12px;
                  color: #419DEA;
                }
              }
              .hui-record-item-top-right{
                font-size: 12px;
                color: #999;
              }
            }
            .hui-record-item-text{
              font-size: 12px;
              color: #666;
              padding-left: 20px;
            }
          }
        }
      }
    }
  }
</style>
