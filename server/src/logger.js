import bunyan from 'bunyan'

var log = bunyan.createLogger({
  name: 'logger',
  streams: [{
    level: 'error',
    path: './logs.json'
  }]
})

export default log