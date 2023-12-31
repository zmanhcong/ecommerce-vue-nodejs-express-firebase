Click on the link below to move to the
[English version](./README-ENGLISH.md)

# E コマースプロジェクト

## 👟 プロジェクトについて

このプロジェクトは、基本的な E コマースシステムで、さまざまな種類の靴を販売しています。Vue.js、Node.js、MongoDB、および Firebase を使用して、基本的な技術を習得し、実践することを目的としています。

## 🖥️ プロジェクトの構築方法

### フロントエンドのセットアップ

これで、以下のコマンドを実行すると、フロントエンドとバックエンドが同時に起動します。

```bash
１．npm install
２．npm run install:all
３．npm start
```

正常に実行されれば Backend 側で「8000」ポートで起動し, Frontend は http://localhost:8004 で起動しますので、ブラウザからアクセスしてみてください。

## 🏗️ プロジェクトで使用される技術

-   **Vue.js**: フロントエンドの開発に使用される JavaScript フレームワーク。
-   **Node Express**: サーバーサイドのアプリケーションを構築するための Web アプリケーションフレームワーク。
-   **MongoDB**: NoSQL データベースで、データの保管に使用されます。
-   **Firebase**: ユーザー認証機能を提供します。

## 📌 注意事項

-   プロジェクトを始める前に、各技術の公式ドキュメントを参照し、最新の情報を確認してください。
-   バックエンドとフロントエンドの両方で実行され、必要な依存関係をインストールされ、Terminal にエラーがないか確認してください。
-   MongoDB と Firebase の設定が完了していることを確認してください。（設定手順は frontend または backend フォルダーの README ファイルに確認してください。）

## 🛠️ その他のドキュメント

-   Mongodb にデータ登録する手順などがあります。「frontend」または「Backend」フォルダーにそれぞれ参考にしてください。

-   Postman で API テスト用設定

```bash
１．全ての商品を習得 (GET)
    localhost:8001/api/products/
２．カートにある全て商品を習得 (GET)
    localhost:8001/api/users/12345/cart
３．特定商品を習得 (GET)
    localhost:8001/api/products/345
４．新しい商品を登録 (POST)
    localhost:8001/api/users/12345/cart
        {
            "productId": "890"
        }
５．カートに商品を削除 (DEETE)
    localhost:8001/api/users/12345/cart/890
```

## 結果

Product Page
![Product Page](./frontend/public/assets/result/productpage.png)

Product Detail Page
![Product Detail Page](./frontend/public/assets/result/productdetailPag.png)

Cart Page
![Product Detail Page](./frontend/public/assets/result/cartpage.png)
