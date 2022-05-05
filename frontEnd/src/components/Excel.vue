<template>
  <div class="hello">
    <el-upload
      class="upload"
      action="http://localhost:3000/upload"
      :show-file-list="false"
      accept=".xlsx"
      :on-success="successHandle"
      :on-error="errorHandle"
      :on-progress="progressHandle"
      :on-change="finishHandle"
    >
      <el-button type="primary" :loading="uploadLoading">上传</el-button>
    </el-upload>
    <el-button type="primary">
      <a class="download" href="http://localhost:3000/download" download="">下载</a>
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'Excel',
  data() {
    return {
      uploadLoading: false
    }
  },
  methods: {
    successHandle(res, file) {
      this.$message.success(`${file.name} 上传成功`)
    },
    errorHandle(err, file) {
      this.$message.error(`${file.name} 上传失败`)
    },
    progressHandle() {
      this.uploadLoading = true
    },
    finishHandle() {
      this.uploadLoading = false
    }
  }
}
</script>

<style scoped>
.upload {
  margin-bottom: 10px;
}
.download {
  color: #fff;
  text-decoration: none;
}
</style>
