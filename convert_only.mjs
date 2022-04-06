import * as fs from "fs/promises";
import iconv from "iconv-lite";

// mkdir -p /tmp/aaa
// 例）文字コード指定は無くても動く（）
// cat hoge.csv | head -n 10 | node convert_only.mjs SHIFT_JIS UTF-8 > /tmp/aaa/zzz.csv
// 文字コード指定の文字列は下記を参照
// @see https://encoding.spec.whatwg.org/#names-and-labels

const main = async () => {
  const from = process.argv[2] || 'SHIFT_JIS'
  const to = process.argv[3]

  // Buffer型で読み込む
  var buf = await fs.readFile("/dev/stdin");
  let str = iconv.decode(buf, "SHIFT_JIS");

  // 引数があれば、変換する。無ければUTF-8（OSデフォルト？）で出力される。
  if (to !== undefined) {
    str = iconv.encode(str, to).toString()
  }
  console.log(str);

  // 何か処理をするなら下記で。
  // const list = str.split(/\r\n|\n/);
  // console.log(list.join('\n'));
};
main();
