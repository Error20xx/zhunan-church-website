# 希望教會形象網站

使用 Vue 3、Vite、Vue Router、Composition API 與原生 CSS 製作的繁體中文教會形象網站。無需後端，可直接部署到 GitHub 與 Cloudflare Pages。

## 安裝與本機啟動

需要 Node.js 18 以上版本。

```bash
npm install
npm run dev
```

終端機會顯示本機網址，通常是 `http://localhost:5173`。

## 建置與預覽

```bash
npm run build
npm run preview
```

建置結果會輸出至 `dist`。

## 上傳 GitHub

在專案根目錄執行：

```bash
git init
git add .
git commit -m "建立竹南靈糧堂網站"
git branch -M main
git remote add origin https://github.com/你的帳號/你的儲存庫.git
git push -u origin main
```

如果儲存庫已經初始化，只需要提交並推送本次變更。

## Cloudflare Pages 部署

1. 在 Cloudflare Pages 選擇「連接至 Git」並選取 GitHub 儲存庫。
2. Framework preset 可選 `Vue` 或 `Vite`。
3. Build command 設為 `npm run build`。
4. Build output directory 設為 `dist`。
5. 儲存後開始部署。

`public/_redirects` 已包含 `/* /index.html 200`，Cloudflare Pages 會將 Vue Router 子路由重新整理導向應用程式，不會出現 404。

## 修改內容

- 教會資訊：`src/data/churchInfo.js`
- 生命見證：`src/data/testimonies.js`
- 活動照片：`src/data/gallery.js`
- 聚會資訊：`src/data/meetings.js`
- 團隊資料：`src/data/team.js`
- 各頁段落文案：`src/views/` 與 `src/components/`

遠端圖片可直接替換資料檔案內的 `image` 網址。

## 替換 Logo

用新的 PNG 圖片覆蓋 `src/assets/images/church-logo.png`，檔名保持相同即可。若圖片不存在或載入失敗，Header、Hero 與 Footer 會顯示「希望教會」文字 fallback，不會破壞版面。

## 修改品牌顏色

全站色彩、漸層、陰影、圓角與字級變數集中在：

`src/assets/styles/variables.css`

修改其中的 CSS Variables 即可套用到整個網站。

## 專案結構

```text
src/
├─ assets/
│  ├─ images/
│  └─ styles/
├─ components/
├─ composables/
├─ data/
├─ router/
├─ views/
├─ App.vue
└─ main.js
```
