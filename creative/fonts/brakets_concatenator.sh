#!/bin/zsh

echo "結合するフォントのディレクトリ名を入力してください。"
ls -d */
read -p ">>> " fontname

cat ${fontname}/uni0028.svg
cat ${fontname}/uni0029.svg

cat ${fontname}/uni003c.svg
cat ${fontname}/uni003e.svg

cat ${fontname}/uni005b.svg
cat ${fontname}/uni005d.svg

cat ${fontname}/uni007b.svg
cat ${fontname}/uni007d.svg
