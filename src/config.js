const appConfig = require('application-config')('electonpreset')
const path = require('path')
const pkg = require('../package.json')

const APP_NAME = 'Electron Preset'
const APP_TEAM = pkg.author
const APP_VERSION = pkg.version
const APP_YEAR = `2018`

module.exports = {
  APP_COPYRIGHT: `Copyright © ${APP_YEAR} ${APP_TEAM}`,
  APP_NAME: APP_NAME,
  APP_TEAM: APP_TEAM,
  APP_VERSION: APP_VERSION,
  APP_DESCRIPTION: pkg.description,
  APP_WINDOW_TITLE: APP_NAME,
  APP_ICON: getIcon(),

  CONFIG_PATH: path.dirname(appConfig.filePath),

  ABOUT_URL: pkg.homepage,
  GITHUB_URL: pkg.repository.url,
  GITHUB_URL_NEW_ISSUE: `${pkg.bugs}/new`,
  GITHUB_URL_ISSUES: pkg.bugs.url,

  ROOT_PATH: path.join(__dirname, '..'),

  WINDOW_ABOUT: `file://${path.join(__dirname, 'renderer', 'about.html')}`,
  WINDOW_MAIN: `file://${path.join(__dirname, 'renderer', 'index.html')}`,
  WINDOW_WIDTH: 800,
  WINDOW_HEIGHT: 600
}

function getIcon () {
  let b = path.join(__dirname, '..', 'assets', 'icons')
  switch (process.platform) {
    case 'win32':
      return path.join(b, 'icon.ico')
    case 'darwin':
      return path.join(b, 'icon.icns')
    default:
      return path.join(b, 'icon.png')
  }
}
