import * as fs from "fs/promises";
import * as iconv from "iconv-lite";

// mkdir -p /tmp/aaa
// cat hoge.csv | node convert_only.mjs > /tmp/aaa/zzz.csv
// とりあえず10行試してみる場合
// cat hoge.csv | head -n 10 | node convert_only.mjs > /tmp/aaa/zzz.csv

const main = async () => {
  // Buffer型で読み込む
  var buf = await fs.readFile("/dev/stdin");
  const list = iconv.default.decode(buf, "SHIFT_JIS").split(/\r\n|\n/);
  console.log(list.join('\n'));
};
main();
