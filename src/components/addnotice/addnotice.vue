<template>
  <div class="new-notice">
    <div><se-nav :back="back" name="通知备忘"></se-nav></div>
    <el-row class="notice-caozuo">
      <el-col :span="15" class="notice-caozuo-left">
        <el-button size="small" icon="el-icon-arrow-left">返回</el-button>
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
      </el-col>
      <el-col :span="9"><div class="grid-content bg-purple-light"></div></el-col>
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
      }
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
    }
  },
  computed: {
    editor () {
      return this.$refs.myTextEditor.quillEditor
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
  width: calc(100% - 200px);
  height: 100%;
  background-color: #f8f8f8;
  position: fixed;
  top: 62px;
  left: 200px;
  z-index: 30;
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
  /*overflow-y: scroll;*/
  .notice-edit{
    height: 300px;
    margin-top: 5px;
    border: 1px solid #ddd;
    .notice-edit-box{
      height: 100%;
      .notice-edit-box-now{
        padding: 10px;
        color: #666;
      }
      .notice-edit-content{
        padding-left: 10px;
        .ql-toolbar.ql-snow{
          border: none;
        }
      }
      .quill-editor{
        height: calc(100% - 140px);
      }
    }
  }
}
</style>
