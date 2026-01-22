#!/bin/zsh

echo "開くフォントのディレクトリ名を入力してください。"
ls -d */
read -p ">>> " fontname

inkscape ${fontname}/uni003c.svg
inkscape ${fontname}/uni003e.svg
inkscape ${fontname}/uni0028.svg
inkscape ${fontname}/uni0029.svg
inkscape ${fontname}/uni005b.svg
inkscape ${fontname}/uni005d.svg
inkscape ${fontname}/uni007b.svg
inkscape ${fontname}/uni007d.svg
