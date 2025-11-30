#!/bin/zsh
set -e

rm -f -- *~ *gf *pk *dvi *l*g *ps *tfm *png *gif *pdf *ind *idx

touch *

mpost emblem.mp

uplatex reference.tex

# upmendex reference.idx

uplatex reference.tex

uplatex reference.tex

dvipdfmx reference.dvi

echo "生成ファイル一覧"
ls *pdf 2>/dev/null || echo "生成ファイルなし。"
echo "画像を開きますか？"
echo "yes / no"
read -p ">>> " check
if [ "$check" = "yes" ]; then
    open *pdf
    echo "画像を開きました。"
elif [ "$check" = "no" ]; then
    echo "画像を開きません。"
fi
