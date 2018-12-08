<template>
  <el-card class='form'>
    <el-form label-width="200px">
      <el-form-item label='callback_addr'>
        <el-input v-model='model.callback_addr' aria-required="true"></el-input>
      </el-form-item>
      <el-form-item label='description'>
        <el-input v-model='model.description'></el-input>
      </el-form-item>
      <el-form-item label='name'>
        <el-input v-model='model.name'></el-input>
      </el-form-item>
      <el-form-item label='ta_info'>
        <el-form-item label='claims_contexts'>
          <el-input v-model='model.ta_info.claims_contexts'></el-input>
        </el-form-item>
        <el-form-item label='ontid'>
          <el-input v-model='model.ta_info.ontid'></el-input>
        </el-form-item>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data: () => ({
    model: {
      callback_addr: '',
      description: '',
      name: '',
      ta_info: {
        claims_contexts: [],
        ontid: '',
      }
    }
  })
}
</script>

