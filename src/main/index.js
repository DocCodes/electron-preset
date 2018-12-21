console.time('app')
console.time('init')

// <region> Variables
const { app } = require('electron')
const ipc = require('./ipc')
var menu
var main
// </region>

// <region> App Handling
ipc.init()
app.on('ready', () => {
  console.timeEnd('app')
  menu = require('./menu')
  main = require('./window')

  main.init()
  menu.init()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (main.win === null) {
    main.init()
  }
})

app.once('ipcReady', () => {
  console.timeEnd('init')
})
// </region>
