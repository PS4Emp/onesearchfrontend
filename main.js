const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

// Require electron-reload and pass the app object
require('electron-reload')(__dirname);
app.commandLine.appendSwitch('disable-web-security');
// Function to create the main window
function createMainWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Load your HTML file using the 'file://' protocol
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));
  mainWindow.webContents.on('did-fail-load', (event, errorCode, errorDescription) => {
    console.error(`Failed to load page: ${errorDescription} (${errorCode})`);
  });
  
  // Open the DevTools if needed (for debugging)
   mainWindow.webContents.openDevTools();
}

// Listen for the "ready" event to create the main window
app.on('ready', createMainWindow);
