# 图片尺寸编辑器

## 打包分享

在 Windows 项目目录运行 `npm run package`，重新生成 `dist/picture-size-editor.zip`。打包使用 Node.js、npm 和 Windows 自带的 `tar.exe`。

把 ZIP 发给其他用户。对方解压后用浏览器打开 `index.html` 即可使用，支持离线操作。

如果 Windows 拦截浏览器下载的图片，可用 Chrome 或 Edge 打开网页，尝试点击「导出并另存为」，选择本地保存位置。此按钮仅在浏览器提供文件保存接口时显示。

如需分享访问链接，将 `dist/index.html` 上传到静态网站托管服务。

## 修改网页

入口文件是 `src/index.html`。修改后运行 `npm run build`，生成可直接打开的 `dist/index.html`。

## 许可协议

本项目采用 MIT 许可协议。
详情请参阅 [LICENSE](LICENSE) 文件。
