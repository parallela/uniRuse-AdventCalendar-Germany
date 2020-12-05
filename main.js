const {app, BrowserWindow, screen} = require('electron')
const path = require('path');
const url = require('url')



function createWindow() {
    const {width, height} = screen.getPrimaryDisplay().workAreaSize;
    const win = new BrowserWindow({
        width, height,
        webPreferences: {
            nodeIntegration: true
        },
        icon: __dirname+"/64.ico"
    })

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    win.removeMenu();
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
