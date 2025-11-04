echo "結合するフォントのディレクトリ名を入力してください。"
ls -d */
read fontname

# cat $fontname/uni004b.svg $fontname/uni005c.svg >$fontname/uni0047.svg
# cat $fontname/uni0054.svg $fontname/uni005c.svg >$fontname/uni0044.svg
# cat $fontname/uni0053.svg $fontname/uni005c.svg >$fontname/uni005a.svg
# cat $fontname/uni0051.svg $fontname/uni005c.svg >$fontname/uni0043.svg
# cat $fontname/uni0052.svg $fontname/uni005c.svg >$fontname/uni004c.svg
# cat $fontname/uni0050.svg $fontname/uni005c.svg >$fontname/uni0042.svg
# cat $fontname/uni0048.svg $fontname/uni005c.svg >$fontname/uni0058.svg
# cat $fontname/uni0046.svg $fontname/uni005c.svg >$fontname/uni0056.svg
# cat $fontname/uni004d.svg $fontname/uni005c.svg >$fontname/uni004e.svg
cat $fontname/uni0053.svg $fontname/uni005c.svg $fontname/uni0030.svg >$fontname/uni004a.svg
cat $fontname/uni0051.svg $fontname/uni005c.svg $fontname/uni0030.svg >$fontname/uni0059.svg
