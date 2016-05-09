const activeWin = require('active-win')
const Repeat = require('repeat')
const log = require('log4js').getLogger()

var current_app;

function checkApps(){
  activeWin().then(result => {
    if(current_app !== result.app){
      current_app = result.app;
      log.info(`The current app is ${result.app} with the ${result.title} title`)
    }
  })
}

Repeat(checkApps).every(500, 'ms').start.now()
