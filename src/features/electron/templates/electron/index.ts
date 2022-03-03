import { join } from 'path';
import { BrowserWindow, app, ipcMain, IpcMainEvent } from 'electron';
import isDev from 'electron-is-dev';

function createWindow() {
  // 1.创建窗体
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    // transparent: true, // 透明(窗体，而不是用户区)
    frame: false, // 设置为false可使用自定义的菜单AppBar
    show: true,
    resizable: true,
    fullscreenable: true,
    webPreferences: {
      preload: join(__dirname, 'preload.js')
    }
  });

  const port = process.env.PORT || 3000;
  const url = isDev ? `http://localhost:${port}` : join(__dirname, '../src/out/index.html');

  // 2.加载应用的index.html
  if (isDev) {
    window?.loadURL(url);
  } else {
    window?.loadFile(url);
  }
  // Open the DevTools.
  // window.webContents.openDevTools();

  // 3.为AppBar绑定一些事件
  ipcMain.on('minimize', () => {
    window.isMinimized() ? window.restore() : window.minimize();
    // or alternatively: win.isVisible() ? win.hide() : win.show()
  });
  ipcMain.on('maximize', () => {
    window.isMaximized() ? window.restore() : window.maximize();
  });

  ipcMain.on('close', () => {
    window.close();
  });
}

// 4.当Electron完成初始化该方法会被调用，并将要创建浏览窗口; 一些API只有在这之后才能使用
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// 5.当所有窗口均关闭时退出
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// NOTICE: In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// 6.使用示例：监听message通道，并将该message返回给渲染器进程
ipcMain.on('message', (event: IpcMainEvent, message: any) => {
  console.log(message);
  setTimeout(() => event.sender.send('message', 'hi from electron'), 200);
});
