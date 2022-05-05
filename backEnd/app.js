const express = require('express')
const app = express()
const port = 3000

const multerUtil = require('./util/multerUtil')
const xlsxUtil = require('./util/xlsxUtil')

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  if (req.method === 'OPTIONS') res.sendStatus(200)
  else next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// 上传
app.post('/upload', multerUtil.upload.single('file'), async (req, res) => {
  await xlsxUtil.xlsxHandle(req.file.path)
  res.json({
    status: 1
  })
})

// 下载
app.get('/download', (req, res) => {
  res.download('output\\output.xlsx')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})