<template>
  <div class="new-notice">
    <div><se-nav :back="back" name="通知备忘"></se-nav></div>
    <el-row class="notice-caozuo">
      <el-col :span="15" class="notice-caozuo-left">
        <el-button @click="backbefore" size="small" icon="el-icon-arrow-left">返回</el-button>
        <div>
          <el-button size="small" class="bg-blue">保存</el-button>
          <el-button size="small">保存并退出</el-button>
        </div>
      </el-col>
      <el-col :span="9" class="notice-caozuo-right">
        <el-button size="small">删除并关闭</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="15" class="notice-edit">
        <div class="notice-edit-box">
          <div class="notice-edit-box-now">今天的工作安排</div>
          <quill-editor class="notice-edit-content" ref="myTextEditor"
            v-model="content"
            :config="editorOption"
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
            @ready="onEditorReady($event)">
          </quill-editor>
        </div>
        <div class="record-bg">
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
      </el-col>
      <el-col :span="9" class="add-box">
        <div class="add-info">
          <p><span>发布人员：</span><span class="a-i-c9">sasha</span></p>
          <p><span>发布时间：</span><span class="a-i-c9">2018-01-19  20:13:14</span></p>
          <p><span class="a-i-red">附 件 ：</span><span class="a-i-bg-red">有</span></p>
          <p>
            <span>指 派 给：</span>
            <el-select style="width: 100px" class="select-box" size="small" v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </p>
          <p>
            <span>优 先 级：</span>
            <el-select style="width: 100px" class="select-box input-select" size="small" @change="vCitiesChange" v-model="vCities" placeholder="请选择">
              <el-option
                v-for="(item,index) in cities"
                :key="index"
                :value="item">
                <span class="fa fa-flag" :class="item.className"></span>
                <span>{{ item.label }}</span>
              </el-option>
            </el-select>
          </p>
          <p><span>标签：</span><span class="a-i-bg-gray">办公</span><span class="a-i-add">+</span></p>
          <div class="upload-box">
            <span>附件：</span>
            <div>
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList2"
                list-type="picture">
                <el-button size="small" type="primary" icon="el-icon-upload">选择上传文件</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过4M</div>
              </el-upload>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import SeNav from '@/base/se-nav/se-nav'
import { quillEditor } from 'vue-quill-editor'
export default {
  data () {
    return {
      back: false,
      content: '请输入文字',
      editorOption: {
        // something config
      },
      vCities: '',
      cities: [{
        value: '1',
        label: '紧急',
        className: 'ji'
      }, {
        value: '2',
        label: '高',
        className: 'gao'
      }, {
        value: '3',
        label: '中',
        className: 'zhong'
      }, {
        value: '4',
        label: '低',
        className: 'di'
      }],
      options: [{
        value: '选项1',
        label: '黄金糕',
        className: 'ji'
      }, {
        value: '选项2',
        label: '双皮奶',
        className: 'gao'
      }, {
        value: '选项3',
        label: '蚵仔煎',
        className: 'zhong'
      }, {
        value: '选项4',
        label: '龙须面',
        className: 'di'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
    }
  },
  components: {
    SeNav, quillEditor
  },
  methods: {
    onEditorBlur (editor) {
      console.log('editor blur!', editor)
    },
    onEditorFocus (editor) {
      console.log('editor focus!', editor)
    },
    onEditorReady (editor) {
      console.log('editor ready!', editor)
    },
    onEditorChange ({ editor, html, text }) {
      // console.log('editor change!', editor, html, text)
      this.content = html
    },
    backbefore () {
      this.$router.push({path: '/inquire/notice'})
    },
    vCitiesChange (item) {
      this.vCities = item.label
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    }
  },
  computed: {
    editor () {
      return this.$refs.myTextEditor
    }
  },
  mounted () {
    // you can use current editor object to do something(editor methods)
    console.log('this is my editor', this.editor)
    // this.editor to do something...
  }
}
</script>

<style scoped lang="less">
.new-notice{
  background-color: #f8f8f8;
  left: 200px;
  z-index: 10;
  top: 62px;
  bottom:0;
  position:fixed;
  overflow-y:scroll;
  width: calc(100% - 200px);
  .notice-caozuo{
    margin-top: 5px;
    background-color: #eee;
    padding: 10px;
    .bg-blue{
      background-color: #419DEA;
      color: #fff;
    }
    .notice-caozuo-left{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .notice-caozuo-right{
      text-align: right;
    }
  }
  .notice-edit{
    margin-top: 5px;
    border: 1px solid #ddd;
    .notice-edit-box{
      height: 500px;
      .notice-edit-box-now{
        padding: 10px;
        color: #666;
      }
      .notice-edit-content{
        padding-left: 10px;
      }
      .quill-editor{
        height: calc(100% - 28%);
      }
    }
    .record-bg{
      .record-box{
        padding-left: 10px;
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
  .add-box{
    padding: 5px 10px 5px;
    .add-info{
      border: 1px solid #ddd;
      padding: 10px;
      p{
        margin: 5px 0;
        font-size: 12px;
        color: #666;
        position: relative;
        .a-i-c9{
          color: #999;
        }
        .a-i-red{
          color: #F04844;
        }
        .a-i-bg-red{
          display: inline-block;
          background-color: #F04844;
          color: #fff;
          padding: 2px 5px;
        }
        .a-i-bg-gray{
          display: inline-block;
          background-color: #DEDEDE;
          color: #fff;
          padding: 2px 5px;
        }
        .a-i-add{
          display: inline-block;
          border: 1px solid #ddd;
          padding: 2px 5px;
          margin-left: 10px;
        }
        span:first-child{
          width: 70px;
          display: inline-block;
        }
      }
      .upload-box{
        display: flex;
        span:first-child{
          font-size: 12px;
          color: #666;
          width: 70px;
        }
      }
    }
  }
}
.ji{
  color: #F04844 !important;
}
.gao{
  color: #F04844 !important;
}
.zhong{
  color: #1ABC9C !important;
}
.di{
  color: #CCCCCC !important;
}
</style>
