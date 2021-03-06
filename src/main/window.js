const main = module.exports = {
  init,
  send,
  setProgress,
  setTitle,
  show,
  toggleDevTools,
  win: null
}

const { BrowserWindow } = require('electron')
const config = require('../config')

console.log(config.WINDOW_MAIN)
console.log(__dirname)
async function init () {
  if (main.win) { return main.win.show() }
  var win = main.win = new BrowserWindow({
    backgroundColor: '#FFFFFF',
    darkTheme: false,
    icon: config.APP_ICON,
    resizable: true,
    width: config.WINDOW_WIDTH,
    height: config.WINDOW_HEIGHT,
    minWidth: config.WINDOW_WIDTH * 0.75,
    minHeight: config.WINDOW_HEIGHT * 0.75,
    title: config.APP_WINDOW_TITLE,
    useContentSize: true,
    show: false
  })
  win.loadURL(config.WINDOW_MAIN)

  win.on('closed', () => {
    win = main.win = null
  })

  win.once('ready-to-show', () => {
    win.show()
  })
}

function send (...args) {
  if (!main.win) { return }
  main.win.send(...args)
}

function setProgress (progress) {
  if (!main.win) { return }
  main.win.setProgressBar(progress)
}

function setTitle (title) {
  if (!main.win) { return }
  main.win.setTitle(title)
}

function show () {
  if (!main.win) { return }
  main.win.show()
}

function toggleDevTools () {
  if (!main.win) { return }
  if (main.win.webContents.isDevToolsOpened()) {
    main.win.webContents.closeDevTools()
  } else {
    main.win.webContents.openDevTools({ mode: 'detach' })
  }
}
