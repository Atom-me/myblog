<template>
  <div class="addBlog">

    <div class="addMain">

      <div class="row">
        <div class="text">博客标题</div>
        <div class="iptBox">
          <input type="text" class="text" v-model="blogObj.title">
        </div>
      </div>

      <div class="row rowAuthor">
        <div class="text">作者：</div>
        <div class="iptBox">
          <input type="text" class="text" v-model="blogObj.author">
        </div>
      </div>

      <div class="row">
        <div class="text">分类：</div>
        <div class="iptBox">
          <select v-model="blogObj.classify">
            <option v-for="item in classArr" :key="item.id" :value="item.classname">{{ item.classname }}</option>
          </select>
        </div>
      </div>


      <div class="row rowArea">
        <div class="text">博客内容：</div>
        <div class="iptBox">
          <textarea v-model="blogObj.content"> </textarea>
        </div>
      </div>

      <div class="row rowArea">
        <div class="text"></div>
        <div class="iptBox">
        </div>
        <button>发表博客</button>
      </div>

    </div>


  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      blogObj: {
        title: '',
        author: '',
        content: '',
        classify: ''
      },
      classArr: []
    }
  },
  mounted () {
    this.getClassify()
  },
  methods: {
    getClassify () {
      axios({
        method: 'GET',
        url: 'https://ku.qingnian8.com/dataApi/blog/classBlog.php',
      }).then(res => {
        console.log(res, '1111')
        this.classArr = res.data
      })
    }
  }

}
</script>

<style scoped lang="less">

</style>
