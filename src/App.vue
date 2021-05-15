<template>
  <div id="app">
    <HdView></HdView>
    <ShowBlog></ShowBlog>
    <FtView></FtView>
  </div>
</template>

<script>

import HdView from '@/components/HdView'
import FtView from '@/components/FtView'
import ShowBlog from '@/components/ShowBlog'

export default {
  components: {
    HdView,
    FtView,
    ShowBlog
  }
}

</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  width: 1000px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(65, 184, 131, 0.6);
  border: 1px solid #41bb83;
}
</style>
