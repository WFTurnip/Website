echo "開くフォントのディレクトリ名を入力してください。"
ls -d */
read fontname

cat $fontname/uni0052.svg $fontname/uni0030.svg $fontname/uni005c.svg > $fontname/uni0040.svg