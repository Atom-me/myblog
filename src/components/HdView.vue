<template>
  <div class="header">
    <div class="logo">
      <img src="@/assets/images/youtube_PNG102356-1.png" alt="">
    </div>
    <div class="link">
      <a href="#">博客列表</a>
      <a href="#">添加博客</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HdView'
}
</script>

<style scoped lang="less">
.header {
  height: 80px;
  background: #42b983;
  margin: 0 auto;
  display: flex; /*弹性盒模型，弹性布局*/
  justify-content: space-between; /*两端对齐*/
  align-items: center; /*在一行显示*/

  .logo {
    height: 100%;

    img {
      height: 80%;
      margin: 10% 0 0 20px;
    }
  }

  .link {
    padding-right: 20px;
    display: flex;

    a {
      display: block; /*展示块元素*/
      padding: 8px 30px;
      margin-left: 30px;
      color: #fff;
      border-radius: 3px;
      text-decoration: none;
    }

    a:hover {
      background: #fff;
      color: #41bb83;
    }
  }
}


</style>
