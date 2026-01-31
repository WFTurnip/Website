#!/bin/zsh

echo "結合するフォントのディレクトリ名を入力してください。"
ls -d */
read -p ">>> " fontname

cat ${fontname}/uni0049.svg ${fontname}/uni0045.svg >${fontname}/uni0041.svg
cat ${fontname}/uni0057.svg ${fontname}/uni0055.svg >${fontname}/uni004f.svg
