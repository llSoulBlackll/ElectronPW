const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

//const main = require("electron").ipcMain;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

//window.jQuery = window.$ = require("node_modules/jquery/jquery-3.2.1.min.js")
//import 'node_modules/bootstrap/js/bootstrap.js'
//import 'node_modules/bootstrap/css/bootstrap.css'

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 700, frame:false})

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/login/login.html`)

  // Open the DevTools.

  //mainWindow.webContents.openDevTools()//OPENS DEV

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

exports.openWindow = () => {
  let win = new BrowserWindow({ width: 700, height: 600, frame:false });
  //win.webContents.openDevTools();
  win.loadURL(`file://${__dirname}/api/api.html`)
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', function(){
  createWindow()
  console.log("Window Loaded")
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.