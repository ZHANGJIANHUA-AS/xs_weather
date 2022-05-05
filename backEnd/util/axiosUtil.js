const axios = require('axios')

const get = function(url) {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}

module.exports = {
  get
}