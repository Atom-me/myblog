<template>
  <div class="addBlog">

    <div class="addMain">

      <div class="row">
        <div class="text">博客标题</div>
        <div class="iptBox">
          <input type="text" class="text">
        </div>
      </div>

      <div class="row rowAuthor">
        <div class="text">作者：</div>
        <div class="iptBox">
          <input type="text" class="text">
        </div>
      </div>

      <div class="row">
        <div class="text">分类：</div>
        <div class="iptBox">
          <select>
            <option>html5</option>
            <option>css3</option>
            <option>vue</option>
          </select>
        </div>
      </div>


      <div class="row rowArea">
        <div class="text">博客内容：</div>
        <div class="iptBox">
          <textarea> </textarea>
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
export default {
  name: 'AddBlog'
}
</script>

<style scoped lang="less">

</style>
