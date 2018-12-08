<template>
  <div>
    <h1>Sign JSON</h1>

    <el-form>
      <el-form-item label='Private Key'>
        <el-input v-model='rawPrivKey'></el-input>
      </el-form-item>
      <el-form-item label="Request Object">
        <el-input rows="10" type="textarea" v-model="obj"></el-input>
      </el-form-item>
      <el-form-item label='Result'>
        <copy-input :text='signed'></copy-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import copyInput from '@/components/copy-input'

const sdk = require('ontology-ts-sdk')
const PrivateKey = sdk.Crypto.PrivateKey
const Signature = sdk.Crypto.Signature
const SignatureScheme = sdk.Crypto.SignatureScheme
const utils = sdk.utils

export default {
  components: {
    copyInput,
  },
  data() {
    return {
      rawPrivKey: '',
      obj: '',
    }
  },
  computed: {
    privKey() {
      if (this.rawPrivKey) {
        return new PrivateKey(this.rawPrivKey)
      }
    },
    signed() {
      if (!this.obj.length || !this.privKey) return

      try {
        const json = JSON.stringify(JSON.parse(this.obj))
        const msg = utils.str2hexstr(json)
        const signature = this.privKey.sign(msg, SignatureScheme.ECDSAWithSHA256)
        return signature.serializePgp().Value
      } catch (e) {
        return
      }
    }
  }
}
</script>
