const {app, BrowserWindow, screen} = require('electron')


function createWindow() {
    const {width, height} = screen.getPrimaryDisplay().workAreaSize;
    const win = new BrowserWindow({
        width, height,
        webPreferences: {
            nodeIntegration: true
        },
        // icon: "";
    })

    win.loadFile('index.html')
    win.webContents.openDevTools()
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
