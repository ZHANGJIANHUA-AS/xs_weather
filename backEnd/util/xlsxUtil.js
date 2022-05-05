const fs = require('fs')
const xlsx = require('node-xlsx')
const axiosUtil = require('./axiosUtil')

const xlsxParse = (file, sheet) => {
  const excelData = xlsx.parse(file)
  let data = []
  for (let i = 0; i < excelData.length; i++) {
    if (excelData[i].name === sheet) {
      if (excelData[i].data.length > 1) data = excelData[i].data
      break
    }
  }
  return data
}

const xlsxBuild = xlsxData => {
  const xlsxBuffer = xlsx.build([{name: 'output.xlsx', data: xlsxData }])
  fs.writeFileSync('' + 'output\\output.xlsx', xlsxBuffer)
}

const xlsxHandle = (file, sheet = 'Sheet1') => {
  const excelData = xlsxParse(file, sheet)
  const excelDataWithoutTitle = [...excelData].splice(1)

  const xlsxRequestData = excelDataWithoutTitle.map(async item => {
    if (item[0]) {
      const result = await axiosUtil.get(`http://www.weather.com.cn/data/sk/${item[0]}.html`)
      if (result.status === 200 && result.data.weatherinfo && result.data.weatherinfo.temp) {
        return [...item, result.data.weatherinfo.temp]
      }
    }
  })

  Promise.all(xlsxRequestData)
    .then(res => {
      xlsxBuild([excelData[0], ...res])
    })
}

module.exports = {
  xlsxHandle
}