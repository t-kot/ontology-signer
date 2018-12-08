<style scoped>
.header-title {
  font-size: 1.2rem;
}
</style>

<template>
  <el-container>
    <el-header>
      <h1 class='header-title'>Ontology tools</h1>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <navmenu></navmenu>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
</el-container>
</template>

<script>
import navmenu from '@/components/navmenu'
export default {
  name: 'App',
  components: {
    navmenu,
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
