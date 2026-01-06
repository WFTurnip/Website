echo "結合するフォントのディレクトリ名を入力してください。"
ls -d */
read fontname

cat $fontname/uni0049.svg $fontname/uni0045.svg >$fontname/uni0041.svg
cat $fontname/uni0057.svg $fontname/uni0055.svg >$fontname/uni004F.svg

sed -i '' -E "s#[[:space:]]*</svg>[[:space:]]*<svg width=\"[0-9]{3}\" height=\"[0-9]{3}\" xmlns=\"http://www.w3.org/2000/svg\">[[:space:]]*##g" "$fontname/uni0041.svg"
sed -i '' -E "s#[[:space:]]*</svg>[[:space:]]*<svg width=\"[0-9]{3}\" height=\"[0-9]{3}\" xmlns=\"http://www.w3.org/2000/svg\">[[:space:]]*##g" "$fontname/uni004F.svg"
