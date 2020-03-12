// プラグインを利用するためにwebpackを読み込んでおく
const webpack = require("webpack");

// プラグインを利用するためにclean-webpack-pluginを読み込んでおく
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// OSによるoutput.pathにしていされているパスか
// 異なることに対応するため
const path = require("path");

module.exports = {
  // エントリーポイントの設定
  entry: "./src/js/app.js",
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: "bundle.js",
    // 出力先のパス（絶対パスを指定しないとエラーが出るので注意）
    path: path.resolve(__dirname, "public/js"),
    // ブラウザから出力したファイルにアクセスする際のパス
    publicPath: "/js/"
  },
  devServer: {
    // webpack-dev-serverの設定
    // サーバー起動時ブラウザを自動的に起動する
    open: true,
    // ポート番号
    port: 8000,
    // コンテンツのルートディレクトリ
    contentBase: "./public"
  },
  module: {
    rules: [
      {
        // ローダーの処理対象ファイル
        test: /\.scss$/,
        // ローダーの処理対象となるディレクトリ
        include: path.resolve(__dirname, "src/scss"),
        // 利用するローダー
        // sass-loader css-loader style-loader の順で実行される
        use: [
          // HTML に、style-loader で変換した CSS のスタイルが記述された <style> タグを追加する
          "style-loader",
          // CSS をモジュールに変換する
          "css-loader",
          // Sass を CSS にコンパイルする
          "sass-loader"
        ]
      },
      {
        // ローダーの対象ファイル
        test: /\.(png|jpg|gif)$/i,
        // ローダーの処理対象となるディレクトリ
        include: path.resolve(__dirname, "src/images/"),
        // 利用するローダー
        loader: "url-loader",
        options: {
          // 画像ファイルサイズが 8KB
          limit: 8192,
          // 出力するDataURLに変換しなかった画像の名前
          // [name].[ext],
          // デフォルトではoutput.pathに指定したパス
          outputPath: "../images/",
          // 出力されるファイルからの画像の読み込み先
          // 今回 public/index.htmlから public/imagesの画像を
          // 以下の指定になる
          publicPath: path => "./images/" + path
        }
      },
      {
        // ローダーの処理対象ファイル
        test: /\.js$/,
        // ローダーの処理対象となるディレクトリ
        include: path.resolve(__dirname, "src/js"),
        use: [
          {
            // 利用するローダー
            loader: "babel-loader",
            // ローダーのオプション
            options: {
              presets: [["@babel/preset-env", { modules: false }]]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // プラグインの設定
    // 今回output.pathにpublic/jsを指定しているため
    // public/jsディレクトリ内のファイルが削除されてからビルドが実行される

    // ProvidePluginを利用(webpackに入っている)
    new webpack.ProvidePlugin({
      // 外部モジュールであるjqueryを、全てのファイル上で利用できるようになる
      $: "jquery"
    }),

    // clean-weboack-pluginを利用
    // 不要なoutput.path内のファイルを削除する
    new CleanWebpackPlugin()
  ]
};
