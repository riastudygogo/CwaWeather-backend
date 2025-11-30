const express = require('express');
const dotenv = require('dotenv');
const weatherRoutes = require('./src/routes/weather');

dotenv.config();

const app = express();

// 解析 JSON
app.use(express.json());

// 靜態檔案
app.use(express.static('public'));

// 天氣 API 路由
app.use('/api/weather', weatherRoutes);

// ✅ 新增首頁路由
app.get('/', (req, res) => {
  res.send('天氣 APP 後端運作中 👍');
});

// 監聽 port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
