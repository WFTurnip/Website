#!/bin/zsh

echo "開くフォントのディレクトリ名を入力してください。"
ls -d */
read -p ">>> " fontname

inkscape ${fontname}/uni004b.svg
inkscape ${fontname}/uni0054.svg
inkscape ${fontname}/uni0053.svg
inkscape ${fontname}/uni0051.svg
inkscape ${fontname}/uni0052.svg
inkscape ${fontname}/uni0050.svg
inkscape ${fontname}/uni0048.svg
inkscape ${fontname}/uni0046.svg
inkscape ${fontname}/uni004d.svg