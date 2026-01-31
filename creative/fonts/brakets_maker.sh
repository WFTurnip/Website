#!/bin/zsh

echo "開くフォントのディレクトリ名を入力してください。"
ls -d */
read -p ">>> " fontname

touch ${fontname}/uni003c.svg
touch ${fontname}/uni003e.svg
touch ${fontname}/uni0028.svg
touch ${fontname}/uni0029.svg
touch ${fontname}/uni005b.svg
touch ${fontname}/uni005d.svg
touch ${fontname}/uni007b.svg
touch ${fontname}/uni007d.svg
