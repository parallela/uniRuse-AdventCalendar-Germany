/*
 * This software is under the MIT license.
 * Creators: Lubomir Stankov
 * For: University Of Ruse "Angel Kanchev"
 *
 * Website links:
 * UR "Angel Kanchev": www.uni-ruse.bg
 * Lubomir Stankov Personal Website: www.lstankov.me
 *
 */
const {app, BrowserWindow} = require('electron')
const path = require('path');
const url = require('url')
// The program running mode.
const mode = require(__dirname+'/config/app');


function createWindow() {
    const win = new BrowserWindow({
        width: 1024,
        height: 720,
        webPreferences: {
            nodeIntegration: true
        },
        icon: __dirname + "/vendor/icon.ico"
    })

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
    if (mode == "dev") {
        win.webContents.openDevTools();
    }
    win.removeMenu();
}

app.whenReady().then(createWindow)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

