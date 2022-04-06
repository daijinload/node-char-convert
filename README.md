# node-char-convert

Node.jsで文字列変換するプロジェクト

コマンドラインツールだと、範囲外文字などがあると止まってしまう。

Node.jsのiconv-liteを使えば変換出来るため、手軽に使えるように作成した。

標準入出力のコードとして作成したため、コマンドラインを駆使すれば色々出来ます。

```bash

npm install

# 実行
cat hoge.csv | node convert_only.mjs > /tmp/aaa/zzz.csv

# とりあえず10行試してみる場合
cat hoge.csv | head -n 10 | node convert_only.mjs > /tmp/aaa/zzz.csv
```
