const {app, BrowserWindow, Menu, dialog} = require('electron')
const url = require("url");
const path = require("path");
const fs = require('fs');

const MAIN_WINDOW_TEMPLATE_PATH = 'src/renderer/mainWindow.html'
const WINDOW_WIDTH = 1000
const WINDOW_HEIGHT = 700

function onOpenClick(mainWindow) {
  dialog.showOpenDialog(
    mainWindow,
    {
      properties: ['openFile'],
        filters: [
          { name: 'Изображения', extensions: ['jpg', 'png', 'gif'] },
          { name: 'Видео', extensions: ['mkv', 'avi', 'mp4'] },
          { name: 'Свой тип файлов', extensions: ['as'] },
          { name: 'Все файлы', extensions: ['*'] }
        ]
    },
    files => {
      if (files && files.length) {
        mainWindow.webContents.send('image-selected', files[0])
      }
    }
  )
}

function getMenu(mainWindow) {
  return Menu.buildFromTemplate([
    {
      label: 'File',
      submenu: [
        {
          label: 'New image',
          accelerator: 'Ctrl+N',
          click: () => mainWindow.webContents.send('new-image')
        },
        {
          label: 'Open image',
          accelerator: 'Ctrl+O',
          click: () => onOpenClick(mainWindow)
        },
        {
          label: 'Save',
          accelerator: 'Ctrl+S',
          click: () => mainWindow.webContents.send('save-image')
        },
        {
          type: 'separator',
        },
        {
          label: 'Exit',
          click: () => app.quit()
        }
      ]
    }
  ])
}

function main() {
  let mainWindow = new BrowserWindow({
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
  })
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, MAIN_WINDOW_TEMPLATE_PATH),
    protocol: 'file:',
    slashes: true,
  }))

  mainWindow.webContents.openDevTools()

  const mainMenu = getMenu(mainWindow)
  Menu.setApplicationMenu(mainMenu)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', () => main())

app.on('window-all-closed', () => app.quit())