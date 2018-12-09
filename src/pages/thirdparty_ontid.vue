<style lang='scss'>
.control {
  margin: 2rem 0;
}
.el-alert {
  margin: 2rem 0;
}
</style>

<template>
  <el-card>
    <h1>thirdparty/ontid</h1>
    <div class="control">
      <el-button :loading="isSubmitting" type='primary' @click='onRegister'>Register</el-button>
    </div>

    <div v-if='response && response.Desc === "SUCCESS"'>
      <el-alert type='success'>
        Success
      </el-alert>
      <vue-json-pretty
        :data='response.Result'
      >
      </vue-json-pretty>
    </div>
  </el-card>
</template>

<script>
import axios from 'axios'
import VueJsonPretty from 'vue-json-pretty'

export default {
  components: {
    VueJsonPretty,
  },
  data: () => ({
    response: null,
    isSubmitting: false,
  }),
  computed: {
    resultJSON() {
      if (this.response) {
        return JSON.stringify(this.response.Result)
      }
    },
  },
  methods: {
    async onRegister() {
      this.isSubmitting = true
      const url = 'https://us-central1-ontology-signer.cloudfunctions.net/getOntid'
      try {
        const res = await axios.get(url)
        this.response = res.data
      } catch (e) {
        console.error(e)
      }
      this.isSubmitting = false
    }
  }
}
</script>

