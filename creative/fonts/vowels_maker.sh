#!/bin/zsh

echo "開くフォントのディレクトリ名を入力してください。"
ls -d */
read -p ">>> " fontname

inkscape ${fontname}/uni0041.svg
inkscape ${fontname}/uni0045.svg
inkscape ${fontname}/uni0049.svg
inkscape ${fontname}/uni004f.svg
inkscape ${fontname}/uni0055.svg
inkscape ${fontname}/uni0057.svg
