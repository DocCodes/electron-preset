module.exports = {
  init
}

const { app, ipcMain } = require('electron')
const main = require('./window')

async function init () {
  ipcMain.once('ipcReady', (e) => {
    app.ipcReady = true
    app.emit('ipcReady')
  })

  ipcMain.on('setProgress', (e, ...args) => main.setProgress(...args))
  ipcMain.on('setTitle', (e, ...args) => main.setTitle(...args))
  ipcMain.on('show', () => main.show())
}
