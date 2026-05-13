# Taylor Era Mirror

Taylor Swift 主题的 AI 个性化 Era 测试静态网页。用户完成问卷并输入最近状态后，页面会生成当前最接近的 Era、人格解读、关键词、配色、今日建议、分享卡片和沉浸式 Era Room。

## 本地预览

直接用浏览器打开 `index.html` 即可运行。

如果希望用本地服务预览：

```bash
npm run dev
```

然后打开 `http://127.0.0.1:5188`。

## CloudBase 静态托管

这个项目不依赖构建步骤，适合直接上传到 CloudBase 静态托管。上传根目录中的这些文件即可：

- `index.html`
- `styles.css`
- `app.js`

当前的 Era 判断逻辑在 `app.js` 的 `scoreEra()` 函数中。后续如果要接真正的 AI，可以把该函数替换为请求 CloudBase Function 的异步调用，再由云函数调用模型服务。

## 版权说明

页面使用 Taylor Swift 的 Era 概念作为主题灵感，不包含 Taylor Swift 歌词、专辑封面或音频文件。Era Room 播放器使用浏览器 Web Audio 生成原创氛围音。
