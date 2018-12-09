<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
  >
    <el-menu-item index="0" @click="$router.push('/')">
      <i class="el-icon-menu"></i>
      <span>JSON Signer</span>
    </el-menu-item>
    <el-menu-item index="1" @click="$router.push('/thirdparty/ontid')">
      <i class="el-icon-menu"></i>
      <span>thirdparty ontid</span>
    </el-menu-item>
    <el-menu-item index="2" @click="$router.push('/authrequesters')">
      <i class="el-icon-menu"></i>
      <span>auth requesters</span>
    </el-menu-item>
  </el-menu>
</template>
