<style lang='scss'>
.subtitle {
  font-size: 1.0rem;
}
.register {
  margin: 2rem 0;
}
</style>

<template>
  <el-card class='form'>
    <h1>authrequesters</h1>
    <el-form label-width="200px">
      <el-form-item label='private key'>
        <el-input v-model='privkey'></el-input>
      </el-form-item>
      <h2 class='subtitle'>Request</h2>
      <el-form-item label='callback_addr'>
        <el-input v-model='model.callback_addr' aria-required="true"></el-input>
      </el-form-item>
      <el-form-item label='ontid'>
        <el-input v-model='model.ontid'></el-input>
      </el-form-item>
      <el-form-item label='name'>
        <el-input v-model='model.name'></el-input>
      </el-form-item>
      <el-form-item label='description'>
        <el-input v-model='model.description'></el-input>
      </el-form-item>
      <el-form-item label='ta_info'>
        <el-form-item label='claims_contexts'>
          <el-input v-model='model.ta_info.claims_contexts'></el-input>
        </el-form-item>
        <el-form-item label='ontid'>
          <el-input v-model='model.ta_info.ontid'></el-input>
        </el-form-item>
      </el-form-item>
      <h2 class="subtitle">JSON</h2>
      <el-input type='textarea' :rows='5' :disabled="true" :readonly="true" v-model='requestWithoutSignatureJSON'></el-input>
      <div v-if='valid'>
        <h2 class="subtitle">Signature</h2>
        <copy-input :text='signature'></copy-input>
        <h2 class="subtitle">Request</h2>
        <el-input type='textarea' :rows='5' :readonly="true" :disabled="true" v-model='requestWithSignatureJSON'></el-input>
      </div>
      <div class="register">
        <el-button type='primary' @click='onRegister' :loading="requesting">Register</el-button>
      </div>
      <div class="response" v-if='response'>
        <el-alert type='error' v-if='response.error'>
          {{ response.desc }}
        </el-alert>
        <el-alert type='info' v-else>
        </el-alert>
      </div>
    </el-form>
  </el-card>
</template>

<script>
import axios from 'axios'
const sdk = require('ontology-ts-sdk')
const PrivateKey = sdk.Crypto.PrivateKey
const Signature = sdk.Crypto.Signature
const SignatureScheme = sdk.Crypto.SignatureScheme
const utils = sdk.utils
import copyInput from '@/components/copy-input'
export default {
  data: () => ({
    privkey: '',
    model: {
      callback_addr: '',
      description: '',
      name: '',
      ontid: '',
      ta_info: {
        claims_contexts: '',
        ontid: '',
      }
    },
    response: null,
    requesting: false,
  }),
  components: {
    copyInput,
  },
  computed: {
    valid() {
      return this.privkey.length &&
        this.model.callback_addr.length &&
        this.model.description.length &&
        this.model.name.length &&
        this.model.ontid.length
    },
    signature() {
      const privkey = new PrivateKey(this.privkey)
      const msg = utils.str2hexstr(this.requestWithoutSignatureJSON)
      const signature = privkey.sign(msg, SignatureScheme.ECDSAWithSHA256)
      return signature.serializePgp().Value
    },
    requestWithSignatureJSON() {
      return JSON.stringify(this.requestWithSignature)
    },
    requestWithoutSignatureJSON() {
      return JSON.stringify(this.requestWithoutSignature)
    },
    requestWithoutSignature() {
      return {
        callback_addr: this.model.callback_addr,
        description: this.model.description,
        name: this.model.name,
        ontid: this.model.ontid,
        ta_info: [
          {
            claims_contexts: [this.model.ta_info.claims_contexts],
            ontid: this.model.ta_info.ontid
          },
        ],
      }
    },
    requestWithSignature() {
      return Object.assign({}, this.requestWithoutSignature, { signature: this.signature })
    },
  },
  methods: {
    async onRegister() {
      this.requesting = true
      const endpoint = 'https://api.ont.network/api/v1/ontpass/authrequesters'
      const response = await axios.post(endpoint, this.request)
      this.response = response.data
      this.requesting = false
    }
  }
}
</script>

