
# 餐廳首頁

* 使用者可以在首頁看到所有餐廳與它們的簡單資料：

    * 餐廳照片

    * 餐廳名稱

    * 餐廳分類 :中東料理、美式、咖啡、日本料理、義式餐廳、酒吧

    * 餐廳評分

* 使用者可以透過搜尋餐廳名稱及類別來找到特定的餐廳

# 餐廳的詳細資料

* 使用者點擊餐廳圖片可以觀看其詳細資訊：

    * 類別 : 中東料理、美式、咖啡、日本料理、義式餐廳、酒吧

    * 地址 : 點地址後面的符號可以連到 google map

    * 電話

    * 描述

    * 圖片

# 環境建置
* node.js - 10.15.0
* express - 4.17.1
* express-handlebars - 5.3.2
* Mongodb - 4.2.15
* method-override : 3.0.0

# 增加CRUD功能
* Create: 點擊**新增餐廳**可以增加一間餐廳
* Read: 可以瀏覽全部餐廳，點擊餐廳照片可觀看其詳細資料
* Update: 點擊**Edit**可以修改餐廳資訊
* Delete: 點擊**Delete**可以刪除餐廳

# 使用方法

1. 開啟終端機，輸入 `git clone https://github.com/pinjin1201/restaurant.git`

2. 進入此專案資料夾 `cd restaurant`

3. 安裝 npm 套件 `npm install`

4. 安裝 nodemon 套件 `npm install -g nodemon`

5. 啟動專案 `npm run dev`

6. 終端機出現以下訊息後，即可在 http://localhost:3000 開始使用 `Express is listening on localhost:3000`