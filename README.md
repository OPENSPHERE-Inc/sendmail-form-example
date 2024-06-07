# Cloudflare メール送信フォームサンプルコード

本リポジトリは OPENSPHERE Inc. blog 記事 [Cloudflare フリープランだけでメールフォームを実装する方法](https://blog.opensphere.co.jp/posts/cloudflare001) のサンプルコードです。

## 必要環境

- Node.js v18.20.3
- yarn v4.2.2
- 別リポジトリにある [メール送信 Worker](https://github.com/OPENSPHERE-Inc/sendmail-worker-example) が先にデプロイされていること

## デプロイ

まず、リポジトリをクローンしたら `yarn` を実行してください。

次に、`wrangler.toml` を編集して下さい。

```toml
name = "sendmail-form-example"
pages_build_output_dir = "out"
compatibility_date = "2024-06-07"

[env.production]
compatibility_date = "2024-06-05"
compatibility_flags = [ "nodejs_compat" ]

[[services]]
binding = "CONTACTMAIL"
service = "sendmail-worker-example"
environment = "production"

[[env.production.services]]
binding = "CONTACTMAIL"
service = "sendmail-worker-example"
environment = "production"
```

- `name = "sendmail-form-example""` - サイト名を書き換えてください
- `service = "sendmail-worker-example"` - メール送信 Worker 名に書き換えてください。

wrangler で Cloudflare にログインしてください。

```shell
$ npx wrangler login
```

準備が出来たら、次のコマンドで Cloudflare Pages にデプロイ可能です。

```shell
$ yarn deploy
```

## その他

内容に不備などあれば issue までお知らせください。
