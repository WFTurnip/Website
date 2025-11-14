echo "結合するフォントのディレクトリ名を入力してください。"
ls -d */
read fontname

cat $fontname/uni0044.svg $fontname/uni007c.svg >$fontname/uni0024.svg
cat $fontname/uni0030.svg $fontname/uni002f.svg >$fontname/uni0025.svg
cat $fontname/uni0051.svg $fontname/uni003e.svg $fontname/uni0027.svg >$fontname/uni0026.svg
cat $fontname/uni002c.svg $fontname/uni0030.svg >$fontname/uni003b.svg
cat $fontname/uni002e.svg $fontname/uni0030.svg >$fontname/uni003a.svg
cat $fontname/uni005c.svg $fontname/uni0030.svg >$fontname/uni00b6.svg
