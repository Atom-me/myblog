<template>
  <div class="showblog">

    <div class="list">
      <div class="item" v-for="item in blogArr" :key="item.id">
        <div class="top">
          <div class="title">{{ item.title }}</div>
          <div class="time">{{ item.posttime }}</div>
        </div>
        <div class="center">
          {{ item.content }}
        </div>
        <div class="bottom">
          <div class="classify">分类：<span>{{ item.classify }}</span></div>
          <div class="author">作者：<span>{{ item.author }}</span></div>
        </div>
      </div>
    </div>
    <div class="page">
      {{ page }}
      <div class="pre" v-on:click="prePage">上一页</div>
      <div class="next" @click="nextPage">下一页</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  // name: 'ShowBlog'
  data () {
    return {
      blogArr: [],
      page: 1
    }
  },
  mounted () {
    this.getData()
  },

  methods: {
    nextPage () {
      this.page++
      this.getData(this.page)
    },

    prePage () {
      this.page--;
      if (this.page < 1) {
        alert('前面没有了');
        this.page=1;
        return;
      }
      this.getData(this.page);

    },
    /**
     * 获取博客列表
     */
    getData (page = 1) {//page形参，默认等于1
      axios({
        method: 'get',
        url: 'https://ku.qingnian8.com/dataApi/blog/showBlog.php',
        params: {
          page: page,//页码
          num: 3,//每页条数
        }
      }).then(res => {
        console.log(res.data)
        this.blogArr = res.data
      })
    }

  }
}
</script>

<style scoped lang="less">
.showblog {
  min-height: 500px;

  .list {
    padding: 40px;

    .item {
      margin-bottom: 40px;

      .top {
        display: flex;
        justify-content: space-between;

        .title {
          font-size: 26px;
          color: #333;
        }

        .time {
          font-size: 18px;
          color: #666;
        }
      }

      .center {
        margin: 15px 0;
        background: #F6F6F6;
        border-radius: 3px;
      }

      .bottom {
        font-size: 14px;
        color: #999;
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
          font-size: 16px;
          color: #666;
        }
      }
    }

  }

  .page {
    display: flex;
    justify-content: center;
    padding: 40px 0;

    div {
      padding: 10px 30px;
      border: #41bb83 solid;
      margin: 0 10px;
      color: #41bb83;
      font-size: 14px;
      cursor: pointer;

      &:hover { // & 代表父级本身，即 div
        background: #41bb83;
        color: #fff;
      }
    }
  }
}
</style>
