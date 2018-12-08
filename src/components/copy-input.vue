<style lang='scss' scoped>
.input-with-select {
    margin-bottom: 2rem;
}
</style>

<template>
  <div>
    <el-input readonly :value="text" class="input-with-select" :type="hidden ? 'password' : 'text'">
      <el-button slot="prepend" icon="el-icon-document" @click="onClickCopy">
          Copy
      </el-button>
      <el-button slot="append" v-if="isPrivate" @click="onClickToggle" icon="el-icon-view"></el-button>
    </el-input>
    <input :style="{position: 'fixed', top: '100vh'}" :value="text" ref='target' />
  </div>
</template>


<script>
export default {
  data() {
      return {
          hidden: (this.isPrivate ? true : false)
      }
  },
  methods: {
      onClickToggle(e) {
          e.preventDefault()
          this.hidden = !this.hidden
      },
      onClickCopy(e) {
          e.preventDefault()
          this.$refs.target.select()
          document.execCommand('copy')
          this.$refs.target.blur()

          this.$message({ message: 'Copied', type: 'success'})
      }
  },
  props: ['text', 'isPrivate']
}
</script>
