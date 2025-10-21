echo "結合するフォントのディレクトリ名を入力してください。"
ls -d */
read fontname

# cat $fontname/uni003c.svg $fontname/uni003e.svg >$fontname/uni003d.svg
cat $fontname/uni005C.svg $fontname/uni002E.svg >$fontname/uni003A.svg
cat $fontname/uni005C.svg $fontname/uni002C.svg >$fontname/uni003B.svg
# cat $fontname/uni0051.svg $fontname/uni003e.svg $fontname/uni003f.svg >$fontname/uni0026.svg
cat $fontname/uni0035.svg $fontname/uni005c.svg >$fontname/uni0040.svg
# cat $fontname/uni0051.svg $fontname/uni0050.svg >$fontname/uni005f.svg
# cat $fontname/uni0051.svg $fontname/uni0050.svg >$fontname/uni005e.svg
# cat $fontname/uni0046.svg $fontname/uni0054.svg >$fontname/uni007e.svg
# cat $fontname/uni005c.svg >>$fontname/uni007e.svg
# cat $fontname/uni005e.svg $fontname/uni007e.svg >$fontname/uni0060.svg
cat $fontname/uni007c.svg $fontname/uni0042.svg >$fontname/uni0023.svg
cat $fontname/uni007c.svg $fontname/uni005c.svg $fontname/uni005e.svg $fontname/uni005f.svg >$fontname/uni0024.svg
